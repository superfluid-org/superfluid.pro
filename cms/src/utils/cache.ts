import { Redis } from "@upstash/redis"

export const PRICE_CACHE_TTL = 300 // 5 minutes

export interface CacheProvider {
	get(key: string): Promise<string | null>
	set(key: string, value: string, ttlSeconds: number): Promise<void>
}

class RedisCacheProvider implements CacheProvider {
	private client: Redis

	constructor(url: string, token: string) {
		this.client = new Redis({ url, token })
	}

	async get(key: string): Promise<string | null> {
		try {
			return await this.client.get<string>(key)
		} catch (error) {
			console.error(`Redis cache get failed for key ${key}:`, error)
			return null
		}
	}

	async set(key: string, value: string, ttlSeconds: number): Promise<void> {
		try {
			await this.client.set(key, value, { ex: ttlSeconds })
		} catch (error) {
			console.error(`Redis cache set failed for key ${key}:`, error)
		}
	}
}

class MemoryCacheProvider implements CacheProvider {
	private store = new Map<string, { value: string; expiresAt: number }>()

	async get(key: string): Promise<string | null> {
		const entry = this.store.get(key)
		if (!entry) return null
		if (Date.now() > entry.expiresAt) {
			this.store.delete(key)
			return null
		}
		return entry.value
	}

	async set(key: string, value: string, ttlSeconds: number): Promise<void> {
		this.store.set(key, { value, expiresAt: Date.now() + ttlSeconds * 1000 })
	}
}

let cacheProvider: CacheProvider | null = null

export function getCacheProvider(): CacheProvider {
	if (!cacheProvider) {
		// REST credentials injected by the Vercel Upstash integration. Its REDIS_URL is a
		// rediss:// TCP URL, which the REST client cannot use.
		const restUrl = process.env.KV_REST_API_URL
		const restToken = process.env.KV_REST_API_TOKEN
		if (restUrl && restToken) {
			cacheProvider = new RedisCacheProvider(restUrl, restToken)
		} else {
			if (process.env.VERCEL_ENV === "production") {
				console.warn("KV_REST_API_URL/KV_REST_API_TOKEN not set; price cache is per-instance memory")
			}
			cacheProvider = new MemoryCacheProvider()
		}
	}
	return cacheProvider
}

export function priceCacheKey(chainId: number, address: string): string {
	return `price:current:${chainId}:${address.toLowerCase()}`
}
