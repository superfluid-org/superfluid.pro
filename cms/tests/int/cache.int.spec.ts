// @vitest-environment node
import { afterEach, describe, expect, it, vi } from "vitest"

async function loadProvider() {
	vi.resetModules()
	const { getCacheProvider } = await import("@/utils/cache")
	return getCacheProvider()
}

describe("getCacheProvider", () => {
	afterEach(() => {
		vi.unstubAllEnvs()
		vi.unstubAllGlobals()
	})

	it("uses Redis when the Vercel Upstash integration's REST credentials are set", async () => {
		vi.stubEnv("KV_REST_API_URL", "https://example.upstash.io")
		vi.stubEnv("KV_REST_API_TOKEN", "token")
		vi.stubEnv("REDIS_URL", "rediss://default:secret@example.upstash.io:6379")

		const provider = await loadProvider()

		expect(provider.constructor.name).toBe("RedisCacheProvider")
	})

	it("falls back to memory when only the TCP REDIS_URL is set", async () => {
		vi.stubEnv("KV_REST_API_URL", "")
		vi.stubEnv("KV_REST_API_TOKEN", "")
		vi.stubEnv("REDIS_URL", "rediss://default:secret@example.upstash.io:6379")

		const provider = await loadProvider()

		expect(provider.constructor.name).toBe("MemoryCacheProvider")
	})

	it("returns cached values from Redis as the stored JSON string", async () => {
		vi.stubEnv("KV_REST_API_URL", "https://example.upstash.io")
		vi.stubEnv("KV_REST_API_TOKEN", "token")
		const stored = JSON.stringify({ priceUsd: "1.0" })
		// Upstash REST returns base64-encoded results; the client may auto-pipeline commands
		const result = { result: Buffer.from(stored).toString("base64") }
		vi.stubGlobal(
			"fetch",
			vi.fn(async (url: string | URL) => Response.json(String(url).includes("pipeline") ? [result] : result)),
		)

		const provider = await loadProvider()
		const cached = await provider.get("price:current:8453:0xabc")

		expect(cached).toBe(stored)
		expect(JSON.parse(cached as string)).toEqual({ priceUsd: "1.0" })
	})
})
