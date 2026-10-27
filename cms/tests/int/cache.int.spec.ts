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
})
