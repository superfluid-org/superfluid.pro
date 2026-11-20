# Superfluid CMS

Payload CMS v3 on Next.js, live at https://cms.superfluid.pro. It manages Superfluid chains and tokens, synced from several external sources, and hosts the Points API.

## Commands

- `pnpm dev` - Start development server
- `pnpm devsafe` - Remove `.next` and start the dev server
- `pnpm build` - Build production version (8 GB memory allocation)
- `pnpm migrate` - Run Payload database migrations
- `pnpm generate` - Run all generators: import map, types, DB schema, subgraph client
- `pnpm generate:types` - Generate Payload TypeScript types (run after collection changes)
- `pnpm lint` - Run Biome checks
- `pnpm typecheck` - Run TypeScript type checking
- `pnpm test` - Run all tests (`test:int` with Vitest, `test:e2e` with Playwright)
- `pnpm payload` - Access Payload CLI commands
- `pnpm trigger:dev`, `pnpm trigger:login`, `pnpm trigger:deploy` - Trigger.dev

## Core Architecture

### Payload configuration (`src/payload.config.ts`, `src/payload.config.shared.ts`)
- **Database**: Vercel Postgres when `POSTGRES_URL` is set, otherwise SQLite at `DATABASE_URI` (default `file:./payload.db`)
- **Collections**: Users, Tokens, Chains, Campaigns, ApiKeys, PushRequests, PointEvents, PointBalances
- **TypeScript**: Auto-generated types in `src/payload-types.ts`
- **Authentication**: Users collection for admin authentication

### Domain-Based Architecture

Each domain in `src/domains/` is self-contained: types, collections, features (business logic) and Trigger.dev tasks. The `tokens` domain also has components and hooks.

```
src/domains/tokens/
├── types.ts          # Shared types
├── collections/      # Payload collections (Tokens, Chains)
├── components/       # React components (TokenCard, TokenTable, TokenFilters)
├── hooks/            # React hooks (useTokens, useTokenQueryParams)
├── features/         # Business logic (sync-tokens, sync-chains, calc-order)
└── trigger/          # Trigger.dev scheduled tasks
```

API routes live in `src/app/(api)/` per Next.js App Router convention and import types from the domain.

### Key Collections

**Chains** (`src/domains/tokens/collections/Chains.ts`): Superfluid network metadata (contract addresses, RPCs, subgraph endpoints), synced from `@superfluid-finance/metadata`.

**Tokens** (`src/domains/tokens/collections/Tokens.ts`):
- Composite IDs (`chainId:address`)
- Token types: underlyingToken, pureSuperToken, nativeAssetSuperToken, wrapperSuperToken
- Validation depends on tokenType (e.g., wrapperSuperToken requires underlyingAddress)
- Tags: streme, testnet, underlying, supertoken

**Points collections** (`src/domains/points/collections/`):
- **Campaigns**: Multi-tenant point campaigns
- **ApiKeys**: API keys with `sfp_` prefix, scoped to campaigns
- **PointEvents**: Individual point award/deduct events, deduplicated via `dedupKey` (`campaignId:account:uniqueId`)
- **PointBalances**: Aggregated per-account balances with composite ID `campaignId:account`
- **PushRequests**: Audit trail for API push requests with processing status

### Data Synchronization

**Token sync** (`src/domains/tokens/features/sync-tokens/`) has four sources: the tokenlist (`syncTokensFromTokenList.ts`), the Superfluid data API (`syncTokensFromDataApi.ts`), Streme.fun (`syncFromStreme.ts`) and the subgraph (`syncFromSubgraph.ts`). Syncs keep existing data, merge tags without duplicates and skip records without changes.

**Chain sync** (`src/domains/tokens/features/sync-chains/index.ts`) upserts all networks from `@superfluid-finance/metadata` by chainId.

**Scheduled via Trigger.dev** (`src/domains/tokens/trigger/`), daily, UTC: chains 02:00, tokenlist 02:30, data API 03:00, Streme 03:30, subgraph 04:00, calc-order 04:00. Each sync also has an admin-only route in `src/app/(api)/(tasks)/` (`requireAdmin()` from `src/utils/api-auth.ts`).

**Points processing** (`src/domains/points/trigger/`): `process-push-request` processes pushed events in the background; `retry-stale-push-requests` runs hourly and retries requests stuck for more than 15 minutes (up to 2 hours old by default).

### API

Routes are in `src/app/(api)/`: tokens, prices, token lists (`/tokenlist`, `/superfluid.tokenlist.json`, `/superfluid.extended.tokenlist.json`), campaign stats and the Points API (`/points/*`). The OpenAPI documents are the reference for parameters and responses:

- `/api-docs` and `/openapi.json` - token and price API
- `/points/api-docs` and `/points/openapi.json` - Points API

`POST /points/push` authenticates with an API key and returns 202; the events (up to 1000 per batch) are processed asynchronously by Trigger.dev.

### Validation & Utilities

- `src/utils/validation.ts`: shared Zod schemas (addressSchema, urlSchema and optional variants, decimalsSchema, symbolSchema, logoUriSchema), `validateWithZod()` for Payload field validation, `transformAddress()` for lowercasing addresses
- `src/utils/AccessControl.ts`: role-based access (publicRead, adminOnly, editorOrAdmin, tokenAccess, campaignAccess and others)

## Important Patterns

1. **Run `pnpm generate:types` after modifying collections**
2. **Use existing validation schemas** from `src/utils/validation.ts`
3. **Address normalization**: all Ethereum addresses are stored lowercase via hooks
4. **Sync error handling**: individual record failures are logged and do not stop the sync
5. **API key authentication**: the Points API validates `sfp_` keys via `validateApiKey()`

## Environment

`.env.example` lists the variables. Node.js `^18.20.2 || >=20.9.0`.
