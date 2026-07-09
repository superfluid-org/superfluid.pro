import { OpenAPIRegistry, OpenApiGeneratorV31 } from "@asteasolutions/zod-to-openapi"
import {
	ApiErrorSchema,
	BalanceBatchBodySchema,
	BalanceBatchResponseSchema,
	BalancePostBodySchema,
	BalanceQuerySchema,
	BatchWithDefaultsRequestSchema,
	BatchWithPerEventRequestSchema,
	CampaignAccountSchema,
	CampaignAccountsQuerySchema,
	CampaignAccountsResponseSchema,
	CampaignMetadataQuerySchema,
	CampaignMetadataResponseSchema,
	EventBalanceQuerySchema,
	EventBalanceResponseSchema,
	EventsQuerySchema,
	PaginationSchema,
	PointBalanceSchema,
	PointBalancesResponseSchema,
	PointEventSchema,
	PointEventsResponseSchema,
	PushRequestBodySchema,
	PushResponseSchema,
	SignedBalanceBatchBodySchema,
	SignedBalanceBatchResponseSchema,
	SignedBalanceQuerySchema,
	SignedBalanceResponseSchema,
	SingleEventRequestSchema,
} from "./schemas"

export const pointsRegistry = new OpenAPIRegistry()

// Register reusable components
pointsRegistry.register("PointBalance", PointBalanceSchema)
pointsRegistry.register("PointBalancesResponse", PointBalancesResponseSchema)
pointsRegistry.register("PointEvent", PointEventSchema)
pointsRegistry.register("PointEventsResponse", PointEventsResponseSchema)
pointsRegistry.register("Pagination", PaginationSchema)
pointsRegistry.register("PushResponse", PushResponseSchema)
pointsRegistry.register("SignedBalanceResponse", SignedBalanceResponseSchema)
pointsRegistry.register("SignedBalanceBatchResponse", SignedBalanceBatchResponseSchema)
pointsRegistry.register("BalanceBatchResponse", BalanceBatchResponseSchema)
pointsRegistry.register("EventBalanceResponse", EventBalanceResponseSchema)
pointsRegistry.register("CampaignAccount", CampaignAccountSchema)
pointsRegistry.register("CampaignAccountsResponse", CampaignAccountsResponseSchema)
pointsRegistry.register("CampaignMetadataResponse", CampaignMetadataResponseSchema)
pointsRegistry.register("ApiError", ApiErrorSchema)
pointsRegistry.register("SingleEventRequest", SingleEventRequestSchema)
pointsRegistry.register("BatchWithDefaultsRequest", BatchWithDefaultsRequestSchema)
pointsRegistry.register("BatchWithPerEventRequest", BatchWithPerEventRequestSchema)
pointsRegistry.register("PushRequestBody", PushRequestBodySchema)

// Register security scheme
pointsRegistry.registerComponent("securitySchemes", "ApiKeyAuth", {
	type: "apiKey",
	in: "header",
	name: "X-API-Key",
	description:
		"Send the API key in the `X-API-Key` header. Format: `sfp_` followed by 64 lowercase hexadecimal characters.",
})

// ============================================
// GET /points/campaign
// ============================================
pointsRegistry.registerPath({
	method: "get",
	path: "/points/campaign",
	summary: "Get campaign metadata",
	description:
		"Retrieves campaign metadata including name, slug, and aggregate statistics (total points, member count, total events).",
	tags: ["Campaign"],
	request: {
		query: CampaignMetadataQuerySchema,
	},
	responses: {
		200: {
			description: "Campaign metadata retrieved successfully",
			content: {
				"application/json": {
					schema: CampaignMetadataResponseSchema,
					example: {
						campaignId: 42,
						name: "My Campaign",
						slug: "my-campaign",
						totalPoints: 150000,
						memberCount: 342,
						totalEvents: 1205,
						lastEventAt: "2026-03-25T14:30:00.000Z",
						createdAt: "2026-01-15T10:00:00.000Z",
					},
				},
			},
		},
		400: {
			description: "Invalid request (missing or invalid campaignId)",
			content: {
				"application/json": {
					schema: ApiErrorSchema,
				},
			},
		},
		404: {
			description: "Campaign not found",
			content: {
				"application/json": {
					schema: ApiErrorSchema,
				},
			},
		},
		500: {
			description: "Internal server error",
			content: {
				"application/json": {
					schema: ApiErrorSchema,
				},
			},
		},
	},
})

// ============================================
// GET /points/balance
// ============================================
pointsRegistry.registerPath({
	method: "get",
	path: "/points/balance",
	summary: "Get point balance",
	description: "Retrieves point balance for a single Ethereum account.",
	tags: ["Balance"],
	request: {
		query: BalanceQuerySchema,
	},
	responses: {
		200: {
			description: "Point balance retrieved successfully",
			content: {
				"application/json": {
					schema: PointBalanceSchema,
					example: {
						account: "0x1234567890abcdef1234567890abcdef12345678",
						points: 1500,
						cappedPoints: 1500,
					},
				},
			},
		},
		400: {
			description: "Invalid request (missing campaignId/account parameter or invalid address)",
			content: {
				"application/json": {
					schema: ApiErrorSchema,
				},
			},
		},
		404: {
			description: "Campaign not found",
			content: {
				"application/json": {
					schema: ApiErrorSchema,
				},
			},
		},
		500: {
			description: "Internal server error",
			content: {
				"application/json": {
					schema: ApiErrorSchema,
				},
			},
		},
	},
})

// ============================================
// POST /points/balance
// ============================================
pointsRegistry.registerPath({
	method: "post",
	path: "/points/balance",
	summary: "Get point balances (bulk)",
	description: "Retrieves point balances for multiple Ethereum accounts (up to 100).",
	tags: ["Balance"],
	request: {
		body: {
			description: "Campaign ID and accounts to query",
			content: {
				"application/json": {
					schema: BalancePostBodySchema,
					example: {
						campaignId: 42,
						accounts: ["0x1234567890abcdef1234567890abcdef12345678", "0xabcdef1234567890abcdef1234567890abcdef12"],
					},
				},
			},
		},
	},
	responses: {
		200: {
			description: "Point balances retrieved successfully",
			content: {
				"application/json": {
					schema: PointBalancesResponseSchema,
					example: {
						balances: [
							{ account: "0x1234567890abcdef1234567890abcdef12345678", points: 1500, cappedPoints: 1500 },
							{ account: "0xabcdef1234567890abcdef1234567890abcdef12", points: 750, cappedPoints: 750 },
						],
					},
				},
			},
		},
		400: {
			description: "Invalid request (invalid campaignId, missing/empty accounts array, or invalid addresses)",
			content: {
				"application/json": {
					schema: ApiErrorSchema,
				},
			},
		},
		404: {
			description: "Campaign not found",
			content: {
				"application/json": {
					schema: ApiErrorSchema,
				},
			},
		},
		500: {
			description: "Internal server error",
			content: {
				"application/json": {
					schema: ApiErrorSchema,
				},
			},
		},
	},
})

// ============================================
// POST /points/balance-batch
// ============================================
pointsRegistry.registerPath({
	method: "post",
	path: "/points/balance-batch",
	summary: "Get point balances for multiple campaigns",
	description: `Retrieves point balances for a single account across multiple campaigns (up to 50).

**Missing Campaign Handling:**
Missing campaigns return 0 points and a warning entry. The request only fails on validation errors, never because a campaign is missing.`,
	tags: ["Balance"],
	request: {
		body: {
			description: "Campaign IDs and account to query",
			content: {
				"application/json": {
					schema: BalanceBatchBodySchema,
					example: {
						campaignIds: [1, 2, 3],
						account: "0x1234567890abcdef1234567890abcdef12345678",
					},
				},
			},
		},
	},
	responses: {
		200: {
			description: "Point balances retrieved successfully",
			content: {
				"application/json": {
					schema: BalanceBatchResponseSchema,
					example: {
						address: "0x1234567890abcdef1234567890abcdef12345678",
						campaignIds: [1, 2, 3],
						points: [100, 0, 300],
						cappedPoints: [100, 0, 300],
						warnings: [{ campaignId: 2, message: "Campaign not found" }],
					},
				},
			},
		},
		400: {
			description: "Invalid request (invalid address, campaign ID format, or exceeds 50 campaigns limit)",
			content: {
				"application/json": {
					schema: ApiErrorSchema,
				},
			},
		},
		500: {
			description: "Internal server error",
			content: {
				"application/json": {
					schema: ApiErrorSchema,
				},
			},
		},
	},
})

// ============================================
// GET /points/event-balance
// ============================================
pointsRegistry.registerPath({
	method: "get",
	path: "/points/event-balance",
	summary: "Get aggregated points for an event type",
	description: `Retrieves the total points for a specific event type within a campaign.

**With account filter:** Returns the sum of points for that account and event type.

**Without account filter:** Returns the sum of points across all accounts for that event type.

This endpoint queries the raw point events and aggregates them on demand, unlike \`/points/balance\`, which uses pre-aggregated balances.`,
	tags: ["Balance"],
	request: {
		query: EventBalanceQuerySchema,
	},
	responses: {
		200: {
			description: "Event balance retrieved successfully",
			content: {
				"application/json": {
					schema: EventBalanceResponseSchema,
					examples: {
						withAccount: {
							summary: "With account filter",
							value: {
								eventName: "swap",
								account: "0x1234567890abcdef1234567890abcdef12345678",
								points: 150,
							},
						},
						withoutAccount: {
							summary: "Without account filter (all accounts)",
							value: {
								eventName: "swap",
								points: 5000,
							},
						},
					},
				},
			},
		},
		400: {
			description: "Invalid request (missing campaignId/eventName or invalid address)",
			content: {
				"application/json": {
					schema: ApiErrorSchema,
				},
			},
		},
		404: {
			description: "Campaign not found",
			content: {
				"application/json": {
					schema: ApiErrorSchema,
				},
			},
		},
		500: {
			description: "Internal server error",
			content: {
				"application/json": {
					schema: ApiErrorSchema,
				},
			},
		},
	},
})

// ============================================
// GET /points/accounts
// ============================================
pointsRegistry.registerPath({
	method: "get",
	path: "/points/accounts",
	summary: "Get campaign accounts (leaderboard)",
	description:
		"Retrieves all accounts in a campaign with their point balances, event counts, and last event timestamps. Results are paginated and sortable. Use this endpoint to build leaderboard views.",
	tags: ["Balance"],
	request: {
		query: CampaignAccountsQuerySchema,
	},
	responses: {
		200: {
			description: "Campaign accounts retrieved successfully",
			content: {
				"application/json": {
					schema: CampaignAccountsResponseSchema,
					example: {
						accounts: [
							{
								account: "0x1234567890abcdef1234567890abcdef12345678",
								totalPoints: 1500,
								eventCount: 42,
								lastEventAt: "2026-01-15T12:00:00.000Z",
							},
							{
								account: "0xabcdef1234567890abcdef1234567890abcdef12",
								totalPoints: 750,
								eventCount: 18,
								lastEventAt: "2026-01-14T08:30:00.000Z",
							},
						],
						pagination: {
							page: 1,
							limit: 50,
							totalDocs: 150,
							totalPages: 3,
							hasNextPage: true,
							hasPrevPage: false,
						},
					},
				},
			},
		},
		400: {
			description: "Invalid request (missing/invalid campaignId, invalid orderBy, or invalid pagination)",
			content: {
				"application/json": {
					schema: ApiErrorSchema,
				},
			},
		},
		404: {
			description: "Campaign not found",
			content: {
				"application/json": {
					schema: ApiErrorSchema,
				},
			},
		},
		500: {
			description: "Internal server error",
			content: {
				"application/json": {
					schema: ApiErrorSchema,
				},
			},
		},
	},
})

// ============================================
// GET /points/signed-balance
// ============================================
pointsRegistry.registerPath({
	method: "get",
	path: "/points/signed-balance",
	summary: "Get signed point balance",
	description: `Returns a signed point balance for on-chain verification. The signature follows the same format as Stack's getSignedPoints API.

**Signature Structure:**
The message hash is computed as:
\`\`\`
keccak256(encodePacked(["address", "uint256", "uint256", "uint256"], [address, points, campaignId, timestamp]))
\`\`\`

This can be verified on-chain using ECDSA recovery.

On-chain claim functions that verify these signatures are typically permissionless, so the claim transaction can be submitted on behalf of the account. This is useful when you need a negative point adjustment to take effect on-chain (see the "Negative Points" section in the API overview).`,
	tags: ["Signed Balance"],
	request: {
		query: SignedBalanceQuerySchema,
	},
	responses: {
		200: {
			description: "Signed balance retrieved successfully",
			content: {
				"application/json": {
					schema: SignedBalanceResponseSchema,
					example: {
						address: "0x1234567890abcdef1234567890abcdef12345678",
						points: 1500,
						uncappedPoints: 1500,
						signatureTimestamp: 1767744000,
						signature:
							"0x8afc2c13c4ed315fcff3f93e4be66815ef259042c789f7e30be2a6160a5fc70f1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1c",
						signer: "0xBc2cfCd4c615Ff1d06f1d07b37E3652b15bd40A2",
					},
				},
			},
		},
		400: {
			description: "Invalid request (missing campaignId/account parameter or invalid address)",
			content: {
				"application/json": {
					schema: ApiErrorSchema,
				},
			},
		},
		404: {
			description: "Campaign not found",
			content: {
				"application/json": {
					schema: ApiErrorSchema,
				},
			},
		},
		500: {
			description: "Internal server error (signing not available or other error)",
			content: {
				"application/json": {
					schema: ApiErrorSchema,
				},
			},
		},
	},
})

// ============================================
// POST /points/signed-balance-batch
// ============================================
pointsRegistry.registerPath({
	method: "post",
	path: "/points/signed-balance-batch",
	summary: "Get batch signed point balances",
	description: `Returns a single signature covering multiple campaigns for the same account. Enables batch on-chain claims.

**Signature Structure:**
The message hash is computed as:
\`\`\`
keccak256(encodePacked(["address", "uint256[]", "uint256[]", "uint256"], [address, points, campaignIds, timestamp]))
\`\`\`

This produces a single signature that covers all campaigns, allowing batch verification on-chain.

On-chain claim functions that verify these signatures are typically permissionless, so the claim transaction can be submitted on behalf of the account. This is useful when you need a negative point adjustment to take effect on-chain (see the "Negative Points" section in the API overview).`,
	tags: ["Signed Balance"],
	request: {
		body: {
			description: "Campaign IDs and account to get signed balances for",
			content: {
				"application/json": {
					schema: SignedBalanceBatchBodySchema,
					example: {
						campaignIds: [1, 2, 3],
						account: "0x1234567890abcdef1234567890abcdef12345678",
					},
				},
			},
		},
	},
	responses: {
		200: {
			description: "Batch signed balances retrieved successfully",
			content: {
				"application/json": {
					schema: SignedBalanceBatchResponseSchema,
					example: {
						address: "0x1234567890abcdef1234567890abcdef12345678",
						campaignIds: [1, 2, 3],
						points: [100, 200, 300],
						uncappedPoints: [100, 200, 300],
						signatureTimestamp: 1767744000,
						signature:
							"0x8afc2c13c4ed315fcff3f93e4be66815ef259042c789f7e30be2a6160a5fc70f1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1c",
						signer: "0xBc2cfCd4c615Ff1d06f1d07b37E3652b15bd40A2",
					},
				},
			},
		},
		400: {
			description: "Invalid request (invalid address, campaign ID format, or exceeds 50 campaigns limit)",
			content: {
				"application/json": {
					schema: ApiErrorSchema,
				},
			},
		},
		404: {
			description: "One or more campaigns not found (the `missing` field lists the campaign IDs that were not found)",
			content: {
				"application/json": {
					schema: ApiErrorSchema,
					example: {
						message: "One or more campaigns not found",
						missing: [2],
					},
				},
			},
		},
		500: {
			description: "Internal server error (signing not available or other error)",
			content: {
				"application/json": {
					schema: ApiErrorSchema,
				},
			},
		},
	},
})

// ============================================
// GET /points/events
// ============================================
pointsRegistry.registerPath({
	method: "get",
	path: "/points/events",
	summary: "Get point events",
	description:
		"Retrieves point events with optional filtering by account, event name, and time range. Results are paginated and sorted by event time (newest first).",
	tags: ["Events"],
	request: {
		query: EventsQuerySchema,
	},
	responses: {
		200: {
			description: "Point events retrieved successfully",
			content: {
				"application/json": {
					schema: PointEventsResponseSchema,
				},
			},
		},
		400: {
			description: "Invalid request (missing/invalid campaignId, invalid pagination, address, or timestamp format)",
			content: {
				"application/json": {
					schema: ApiErrorSchema,
				},
			},
		},
		404: {
			description: "Campaign not found",
			content: {
				"application/json": {
					schema: ApiErrorSchema,
				},
			},
		},
		500: {
			description: "Internal server error",
			content: {
				"application/json": {
					schema: ApiErrorSchema,
				},
			},
		},
	},
})

// ============================================
// POST /points/push
// ============================================
pointsRegistry.registerPath({
	method: "post",
	path: "/points/push",
	summary: "Push point events",
	description: `Push one or more point events for processing. Events are processed asynchronously in the background.

**Server-side use only:** This endpoint authenticates with a secret API key. Call it from your backend. Never embed \`sfp_\` API keys in browser or mobile client code, where anyone can extract them.

**Campaign Validation (Strongly Recommended):**

Include the \`campaignId\` field to verify you're pushing to the correct campaign. If provided, it must match the API key's associated campaign or the request will be rejected with a 403 error. (The \`campaign\` field is a deprecated alias.)

**Request Formats:**

In all three formats, \`campaignId\` is optional but strongly recommended, and \`uniqueId\` is optional.

1. **Single Event**: a single event object.
\`\`\`json
{
  "campaignId": 42,
  "eventName": "swap",
  "account": "0x1234567890abcdef1234567890abcdef12345678",
  "points": 100,
  "uniqueId": "tx-0xabc"
}
\`\`\`

2. **Batch with Shared eventName**: all events share the root \`eventName\`, and a root \`uniqueId\` applies to every event.
\`\`\`json
{
  "campaignId": 42,
  "eventName": "swap",
  "uniqueId": "batch-123",
  "events": [
    { "account": "0x1234567890abcdef1234567890abcdef12345678", "points": 100 },
    { "account": "0xabcdef1234567890abcdef1234567890abcdef12", "points": 50 }
  ]
}
\`\`\`

3. **Batch with Per-Event eventNames**: each event has its own \`eventName\`.
\`\`\`json
{
  "campaignId": 42,
  "events": [
    { "eventName": "swap", "account": "0x1234567890abcdef1234567890abcdef12345678", "points": 100 },
    { "eventName": "stake", "account": "0xabcdef1234567890abcdef1234567890abcdef12", "points": 200 }
  ]
}
\`\`\`

**Deduplication:** If \`uniqueId\` is provided, duplicate events (same campaign + account + uniqueId) will be skipped.

**Negative Points:** Negative \`points\` values are accepted and deduct from the account's balance, which never goes below zero. Before using negative values for recurring adjustments such as daily point distributions, read the "Negative Points" section in the API overview. Users may skip re-claiming a reduced balance on-chain and keep their previous flow rate, so you may need to submit the claim transaction on their behalf.`,
	tags: ["Push"],
	security: [{ ApiKeyAuth: [] }],
	request: {
		body: {
			description: "Point event(s) to push",
			content: {
				"application/json": {
					schema: PushRequestBodySchema,
					examples: {
						single: {
							summary: "Single event",
							value: {
								campaignId: 42,
								eventName: "swap",
								account: "0x1234567890abcdef1234567890abcdef12345678",
								points: 100,
								uniqueId: "tx-0xabc123",
							},
						},
						batchWithDefaults: {
							summary: "Batch with shared eventName",
							value: {
								campaignId: 42,
								eventName: "daily_login",
								events: [
									{ account: "0x1234567890abcdef1234567890abcdef12345678", points: 10 },
									{ account: "0xabcdef1234567890abcdef1234567890abcdef12", points: 10 },
								],
							},
						},
						batchPerEvent: {
							summary: "Batch with per-event eventNames",
							value: {
								campaignId: 42,
								events: [
									{
										eventName: "swap",
										account: "0x1234567890abcdef1234567890abcdef12345678",
										points: 100,
									},
									{
										eventName: "stake",
										account: "0xabcdef1234567890abcdef1234567890abcdef12",
										points: 200,
									},
								],
							},
						},
					},
				},
			},
		},
	},
	responses: {
		202: {
			description: "Push request accepted for processing",
			content: {
				"application/json": {
					schema: PushResponseSchema,
				},
			},
		},
		400: {
			description: "Validation failed",
			content: {
				"application/json": {
					schema: ApiErrorSchema,
					example: {
						message: "Validation failed",
						details: [{ path: "eventName", message: "String must contain at least 1 character(s)" }],
					},
				},
			},
		},
		401: {
			description: "Unauthorized (missing or invalid API key)",
			content: {
				"application/json": {
					schema: ApiErrorSchema,
				},
			},
		},
		403: {
			description: "Campaign mismatch (provided campaign ID does not match API key's campaign)",
			content: {
				"application/json": {
					schema: ApiErrorSchema,
					example: {
						message: "Provided campaign ID (99) does not match API key's campaign (42)",
					},
				},
			},
		},
		500: {
			description: "Internal server error",
			content: {
				"application/json": {
					schema: ApiErrorSchema,
				},
			},
		},
	},
})

// Generate OpenAPI document
export function generatePointsOpenApiDocument() {
	const generator = new OpenApiGeneratorV31(pointsRegistry.definitions)

	return generator.generateDocument({
		openapi: "3.1.0",
		info: {
			title: "Superfluid Points API",
			version: "1.0.0",
			description: `API for managing point-based reward campaigns in the Superfluid ecosystem.

## Overview

The Superfluid Points API enables you to build point-based reward campaigns. Track user actions, query balances, and generate signed proofs for on-chain verification.

## API Basics

### Authentication

**Query Endpoints** (\`/points/balance\`, \`/points/signed-balance\`, \`/points/events\`, \`/points/accounts\`): Public access, no authentication required. Pass the numeric \`campaignId\` as a query parameter.

**Push Endpoint** (\`/points/push\`): Requires an API key in the \`X-API-Key\` header. API keys are scoped to a specific campaign. This endpoint is intended for server-side use only. Never embed API keys in browser or mobile client code.

\`\`\`
X-API-Key: sfp_<64 lowercase hex characters>
\`\`\`

### Request Limits

- Push endpoint: max 1000 events per request
- Query endpoints: max 100 results per page

### Deduplication

Events can include a \`uniqueId\` field for deduplication. If an event with the same \`uniqueId\` already exists for the same account and campaign, it will be skipped.

### Negative Points

Point amounts may be negative to deduct points. An account's stored balance never goes below zero.

> **Caution:** Claiming points on-chain is user-initiated. The user fetches a signed balance and submits it in an on-chain transaction, which typically updates their distribution-pool units and, through them, their flow rate. If you reduce a balance with negative points, nothing forces the user to re-claim. By not claiming again, they keep the flow rate based on their previously claimed, higher balance. For this reason, negative points are not recommended for recurring adjustments such as daily point distributions.

**Mitigation:** The on-chain claim function verifies the API's signature and is permissionless: any caller may submit it for any account. To make a negative adjustment take effect on-chain, fetch the account's signed balance and submit the claim transaction on the user's behalf.

### Points Cap

Accounts can be marked as **capped** on a per-campaign basis. When an account is capped:

- Balance endpoints return \`cappedPoints: 1\` (regardless of the actual balance)
- Signed balance endpoints return \`points: 1\` and \`uncappedPoints\` with the true balance
- The \`points\` field in unsigned balance responses is unaffected (always the true balance)

The cap is a boolean flag managed via the admin panel on individual point balance records. It is not applied automatically.

## TypeScript Clients

Generate a type-safe TypeScript client from this OpenAPI specification. Choose between two approaches:

| Approach | Best For | Semver | Output |
|----------|----------|--------|--------|
| **openapi-fetch** | Simple integrations, stability | Yes | Types + fetch wrapper |
| **hey-api** | Full SDK, React Query, plugins | No | Complete SDK |

### openapi-fetch

A lightweight fetch wrapper with full TypeScript inference. Recommended for most integrations.

- Follows [semver](https://semver.org/), safe for production
- Small bundle size (~5 kB)
- Uses native fetch, works in any runtime
- Maintained by [openapi-ts](https://openapi-ts.dev/)

**Installation**

\`\`\`bash
npm install openapi-fetch
\`\`\`

**Generate Types**

\`\`\`bash
npx openapi-typescript https://cms.superfluid.pro/points/openapi.json -o ./points-api.d.ts
\`\`\`

**Usage**

\`\`\`typescript
import createClient from 'openapi-fetch';
import type { paths } from './points-api';

const client = createClient<paths>({ baseUrl: 'https://cms.superfluid.pro' });

// Query balance (public endpoint)
const { data, error } = await client.GET('/points/balance', {
  params: { query: { campaignId: 42, account: '0x1234...' } }
});

if (error) {
  console.error('Failed to fetch balance:', error);
} else {
  console.log('Points:', data.points);
}

// Query balances for multiple accounts (POST)
const { data: bulkData } = await client.POST('/points/balance', {
  body: { campaignId: 42, accounts: ['0x1234...', '0x5678...'] }
});

// Push events (requires API key)
const { data: pushResult } = await client.POST('/points/push', {
  headers: { 'X-API-Key': 'sfp_...' },
  body: { campaignId: 42, eventName: 'swap', account: '0x1234...', points: 100 }
});
\`\`\`

**Links**

- [Documentation](https://openapi-ts.dev/openapi-fetch/)
- [openapi-fetch on npm](https://www.npmjs.com/package/openapi-fetch)
- [openapi-typescript on npm](https://www.npmjs.com/package/openapi-typescript)

### hey-api

A full SDK generator with optional plugins (React Query, Zod validation, and others).

- Generates a complete SDK with typed functions
- Plugin ecosystem (React Query, Zod, and others)
- No runtime dependency for basic usage

> **Warning:** hey-api does not follow semver. Pin exact versions in production (e.g., \`@hey-api/openapi-ts@0.61.2\`).

**Generate SDK**

No installation required - run directly with npx:

\`\`\`bash
npx @hey-api/openapi-ts \\
  -i https://cms.superfluid.pro/points/openapi.json \\
  -o ./src/points-client \\
  -c @hey-api/client-fetch
\`\`\`

**Usage**

\`\`\`typescript
import { getPointsBalance, postPointsBalance, postPointsPush } from './points-client';

// Query single balance
const { data, error } = await getPointsBalance({
  query: { campaignId: 42, account: '0x1234...' }
});

// Query multiple balances (bulk)
const { data: bulk } = await postPointsBalance({
  body: { campaignId: 42, accounts: ['0x1234...', '0x5678...'] }
});

// Push events
await postPointsPush({
  headers: { 'X-API-Key': 'sfp_...' },
  body: { campaignId: 42, eventName: 'swap', account: '0x1234...', points: 100 }
});
\`\`\`

**Plugins**

Add [plugins](https://heyapi.dev/openapi-ts/plugins) as needed:

\`\`\`bash
# With React Query
npx @hey-api/openapi-ts -i https://cms.superfluid.pro/points/openapi.json \\
  -o ./src/points-client -c @hey-api/client-fetch \\
  --plugins @tanstack/react-query

# With Zod validation
npx @hey-api/openapi-ts -i https://cms.superfluid.pro/points/openapi.json \\
  -o ./src/points-client -c @hey-api/client-fetch \\
  --plugins zod
\`\`\`

**Links**

- [Documentation](https://heyapi.dev/)
- [@hey-api/openapi-ts on npm](https://www.npmjs.com/package/@hey-api/openapi-ts)

## Migrating from Stack

If you're migrating from [Stack.so](https://stack.so), here's how Superfluid Points API maps to Stack's SDK.

### Initialization

**Stack.so:**
\`\`\`typescript
import { StackClient } from '@stackso/js-core';
const stack = new StackClient({ apiKey: 'your-key', pointSystemId: 123 });
\`\`\`

**Superfluid (using openapi-fetch):**
\`\`\`typescript
import createClient from 'openapi-fetch';
import type { paths } from './points-api';

const client = createClient<paths>({ baseUrl: 'https://cms.superfluid.pro' });
// API key passed per-request for push operations
\`\`\`

### Tracking Events

**Stack.so:**
\`\`\`typescript
await stack.track('swap', {
  points: 100,
  account: '0x1234...',
  uniqueId: 'tx-0xabc'
});
\`\`\`

**Superfluid:**
\`\`\`typescript
await client.POST('/points/push', {
  headers: { 'X-API-Key': 'sfp_...' },
  body: {
    campaignId: 42,  // recommended
    eventName: 'swap',
    account: '0x1234...',
    points: 100,
    uniqueId: 'tx-0xabc'
  }
});
\`\`\`

### Getting Points

**Stack.so:**
\`\`\`typescript
const points = await stack.getPoints('0x1234...');
// Multiple: await stack.getPoints(['0x1234...', '0x5678...'])
\`\`\`

**Superfluid:**
\`\`\`typescript
// Single account (GET)
const { data } = await client.GET('/points/balance', {
  params: { query: { campaignId: 42, account: '0x1234...' } }
});

// Multiple accounts (POST)
const { data: bulk } = await client.POST('/points/balance', {
  body: { campaignId: 42, accounts: ['0x1234...', '0x5678...'] }
});

// Multiple campaigns for single account (POST)
const { data: campaigns } = await client.POST('/points/balance-batch', {
  body: { campaignIds: [1, 2, 3], account: '0x1234...' }
});
// { address, campaignIds, points, warnings? }

// Leaderboard - all accounts ranked by points (GET)
const { data: leaderboard } = await client.GET('/points/accounts', {
  params: { query: { campaignId: 42, orderBy: 'totalPoints', order: 'desc' } }
});
// { accounts: [{ account, totalPoints, eventCount, lastEventAt }], pagination }
\`\`\`

> **Note:** Stack.so only offered \`getSignedPointsBatch()\` for querying multiple campaigns (signed).
> The unsigned \`/points/balance-batch\` endpoint is a new capability.
> The \`/points/accounts\` endpoint is a new leaderboard capability with no Stack.so equivalent.

### Signed Points (On-Chain Verification)

**Stack.so:**
\`\`\`typescript
const signed = await stack.getSignedPoints('0x1234...');
// { amount, signatureTimestamp, signature }

const batch = await stack.getSignedPointsBatch('0x1234...', [1, 2, 3]);
// { systemIds, points, signatureTimestamp, signature }
\`\`\`

**Superfluid:**
\`\`\`typescript
// Single campaign (GET)
const { data: signed } = await client.GET('/points/signed-balance', {
  params: { query: { campaignId: 42, account: '0x1234...' } }
});
// { address, points, signatureTimestamp, signature, signer }

// Multiple campaigns (POST)
const { data: batch } = await client.POST('/points/signed-balance-batch', {
  body: { campaignIds: [1, 2, 3], account: '0x1234...' }
});
// { address, campaignIds, points, signatureTimestamp, signature, signer }
\`\`\`

### Signature Compatibility

Both APIs use the same signature format for on-chain verification:
- **Single:** \`keccak256(encodePacked(["address", "uint256", "uint256", "uint256"], [address, points, campaignId, timestamp]))\`
- **Batch:** \`keccak256(encodePacked(["address", "uint256[]", "uint256[]", "uint256"], [address, points, campaignIds, timestamp]))\`

Existing on-chain contracts that verify Stack signatures will work with Superfluid signatures.

### Key Differences

| Aspect | Stack.so | Superfluid |
|--------|----------|------------|
| Campaign binding | At SDK init (\`pointSystemId\`) | Query param (\`campaignId\`) + API key |
| Bulk queries | Arrays in SDK | POST endpoints with typed arrays |
| Response field | \`amount\` | \`points\` |
| Terminology | \`programId\`, \`systemIds\` | \`campaignId\`, \`campaignIds\` |
| Signer info | Not returned | Returns \`signer\` address |
| Multi-campaign query | Signed only (\`getSignedPointsBatch\`) | Both signed and unsigned endpoints |

## Changelog

### 2026-07-09

- **Negative points documentation**: Documented negative point semantics (balances clamp at zero), the caveat that users may not re-claim a reduced balance on-chain, and the permissionless claim-on-behalf mitigation. See the "Negative Points" section under API Basics.
- **Documentation editing pass**: Reworded and reorganized the embedded documentation. API Basics now appears before the TypeScript client guide, the request-size limits section is named "Request Limits" instead of "Rate Limits", signature formats are shown with their exact type encoding, and JSON examples are valid JSON.
- **Events endpoint error format fix**: The timestamp-validation errors on \`GET /points/events\` now return \`message\` as the primary error field, matching the rest of the API. A deprecated \`error\` field with the same text is included temporarily for backward compatibility and will be removed in a future release.
- **Push request documentation**: The OpenAPI request body for \`POST /points/push\` now documents all three accepted formats (single event, batch with shared eventName, batch with per-event eventNames) instead of only the single-event shape.
- **Documentation fixes**: Response examples now include \`cappedPoints\`/\`uncappedPoints\`; examples prefer \`campaignId\` over the deprecated \`campaign\` field; the \`missing\` field on batch 404 responses is documented.

### 2026-03-26

- **Points cap refactor**: Replaced percentage-based cap (5% of total campaign points) with a per-account boolean \`capped\` flag. Capped accounts now receive exactly 1 point. The flag is managed via the admin panel on individual point balance records.

### 2026-03-25

- **Campaign metadata endpoint**: Added \`GET /points/campaign\` for querying campaign name, slug, and aggregate statistics.
- **CORS headers**: Added CORS headers to all public API endpoints.

### 2026-02-03

- **Event time field**: Added \`eventTime\` to point events for historical imports.
- **Informational events**: Events can be marked as \`informational\` (no balance impact).

### 2026-01-28

- **Campaign permissions**: Users can be scoped to specific campaigns.

### 2026-01-26

- **Error response format**: Changed from \`{ error: "..." }\` to \`{ message: "..." }\` to align with Next.js conventions. The \`message\` field is now the primary error field.
- **Leaderboard endpoint**: Added \`GET /points/accounts\` for querying campaign leaderboards.
- **Event balance endpoint**: Added \`GET /points/event-balance\` for querying aggregated points by event type.
- **Unsigned cap fields**: Added \`cappedPoints\` to balance endpoints and \`uncappedPoints\` to signed balance endpoints.
- **Batch balance endpoint**: Added \`POST /points/balance-batch\` for querying multiple campaigns at once.
- **Event deletion**: Deleting a point event now adjusts the account's balance accordingly.`,
			contact: {
				name: "Superfluid",
				url: "https://superfluid.finance",
			},
		},
		servers: [
			{
				url: "",
				description: "Same origin as this OpenAPI document",
			},
		],
		tags: [
			{
				name: "Campaign",
				description: "Query campaign metadata and statistics",
			},
			{
				name: "Balance",
				description: "Query point balances for accounts",
			},
			{
				name: "Signed Balance",
				description: "Get signed point balances for on-chain verification",
			},
			{
				name: "Events",
				description: "Query historical point events",
			},
			{
				name: "Push",
				description: "Push new point events",
			},
		],
		"x-tagGroups": [
			{
				name: "Points API",
				tags: ["Campaign", "Balance", "Signed Balance", "Events", "Push"],
			},
		],
	})
}
