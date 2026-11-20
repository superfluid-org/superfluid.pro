# Superfluid Data

## Project Overview

This is a Superfluid data aggregation and processing system built with Next.js 16 and TypeScript. The system fetches Super Token data from multiple blockchain networks, enriches it with metadata, tracks historical prices via CoinGecko, and stores the results in structured formats (JSON/CSV) using Vercel Blob storage.

## Development Commands

```bash
# Install dependencies (using pnpm)
pnpm install

# Run development server with Turbopack
pnpm dev

# Build for production (generates the OpenAPI document first)
pnpm build

# Start production server
pnpm start

# Run linting
pnpm lint

# TypeScript type checking
pnpm typecheck

# Generate subgraph types from GraphQL schemas
pnpm codegen

# Test scripts for local development
pnpm test:fetch-super-tokens
pnpm test:coingecko-ids
pnpm test:daily-prices
pnpm test:current-price

# Generate and validate the OpenAPI document of this API
pnpm api:generate
pnpm api:validate

# Generate TypeScript types from the CoinGecko DEX OpenAPI schema
pnpm openapi

# Trigger.dev
pnpm trigger:dev
pnpm trigger:deploy
```

## Architecture and Structure

### Core Technologies
- **Next.js 16** with App Router and Turbopack
- **TypeScript** with strict mode and `noUncheckedIndexedAccess`
- **Trigger.dev v4** for scheduled background job processing
- **Superfluid Finance SDK** (`@superfluid-finance/metadata`, `@superfluid-finance/tokenlist`)
- **The Graph Client** (`graphclient`) for type-safe subgraph queries
- **Vercel Blob** for production data storage
- **CoinGecko API** for price data integration
- **Papaparse** for CSV generation

### Key Directories and Files
- `/app` - Next.js App Router: the read API under `app/api/v1/` (tokens, prices, mappings, OpenAPI document) and an API docs page
- `/features` - Core business logic organized by feature
  - `/fetch-super-tokens` - Main token aggregation system
  - `/fetch-coingecko-ids` - CoinGecko mapping functionality  
  - `/fetch-daily-prices` - Daily price tracking
  - `/fetch-current-price` - Current price lookup
  - `storage.ts` - Unified storage abstraction (blob/local)
- `/trigger` - Trigger.dev scheduled tasks with cron configuration
- `/lib/api` - Zod schemas and OpenAPI registry for the API
- `/subgraph-protocol` - Generated GraphQL client for Superfluid subgraphs
- `/scripts` - Development testing scripts
- `/data` - Local storage output directory (development only)

### Data Processing Pipeline

1. **Token Discovery & Fetching** (`features/fetch-super-tokens/`)
   - Discovers all Superfluid networks using metadata package
   - Fetches token statistics from subgraphs with pagination
   - Enriches tokens with official metadata from tokenlist
   - Implements fallback system for network failures
   - Runs Mon/Wed/Fri at 00:00 UTC

2. **CoinGecko ID Mapping** (`features/fetch-coingecko-ids/`)
   - Maps Super Tokens to CoinGecko coin IDs for price tracking
   - Uses CoinGecko's asset platform and coin list APIs
   - Runs on the 1st and 15th of each month at 00:00 UTC (IDs change infrequently)
   - Depends on token data from step 1

3. **Daily Price Tracking** (`features/fetch-daily-prices/`)
   - Fetches daily price history for all mapped tokens
   - Incremental updates (7 days) vs full history for new tokens
   - Runs every 3 days at 01:00 UTC; each token is refreshed on its own interval (daily to weekly) based on popularity
   - Depends on both token data and CoinGecko mappings

### Storage Strategy
- **Production**: Vercel Blob storage with public access URLs
- **Development**: Local filesystem when using `'local'` storage type
- **Structure**:
  - `super-tokens/latest/` - Current data (per-network + aggregated JSON/CSV)
  - `super-tokens/YYYY-MM-DD/` - Historical CSV snapshots
  - `coingecko-mappings/` - Token-to-coin ID mappings
  - `daily-prices/{network}/` - Per-token price history

### Trigger.dev Configuration
- Project ID: `proj_bhmallcjaxewxbsaujfe`
- Runtime: Node.js with 1-hour max duration
- Retry: 3 attempts with exponential backoff
- Tasks are discovered from the `/trigger` directory (`dirs` in `trigger.config.ts`)
- Deployed by running the `data-release-trigger-prod.yml` workflow manually

### GraphQL Integration
- Generated client from `@graphprotocol/client-cli`
- Query: `FetchTokensWithStatistics` with pagination support
- Type-safe operations with full TypeScript integration
- One subgraph endpoint per network, taken from `@superfluid-finance/metadata`

### Environment Variables
```bash
# Storage (production)
BLOB_READ_WRITE_TOKEN=...     # Vercel Blob access token

# Development  
LOCAL_STORAGE_PATH=./data    # Local storage directory (when using 'local' storage type)

# External APIs
COINGECKO_API_KEY=...        # CoinGecko Pro API access
```

### Important Configuration Files
- `trigger.config.ts` - Trigger.dev project and retry configuration
- `tsconfig.json` - TypeScript with `@/*` absolute imports from root
- `subgraph-protocol/.graphclientrc.yml` - GraphQL codegen configuration for subgraphs