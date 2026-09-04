import { fallback, http, type Transport } from "viem"
import {
	arbitrum,
	arcTestnet,
	avalanche,
	avalancheFuji,
	base,
	baseSepolia,
	bsc,
	type Chain as Chain_,
	celo,
	gnosis,
	mainnet,
	optimism,
	optimismSepolia,
	polygon,
	scroll,
	sepolia,
} from "viem/chains"

type Chain = Omit<Chain_, "fees" | "formatters">

export const superfluidMainnets: readonly [
	Chain & { id: (typeof base)["id"] },
	Chain & { id: (typeof arbitrum)["id"] },
	Chain & { id: (typeof avalanche)["id"] },
	Chain & { id: (typeof bsc)["id"] },
	Chain & { id: (typeof celo)["id"] },
	Chain & { id: (typeof gnosis)["id"] },
	Chain & { id: (typeof mainnet)["id"] },
	Chain & { id: (typeof optimism)["id"] },
	Chain & { id: (typeof polygon)["id"] },
	Chain & { id: (typeof scroll)["id"] },
] = [base, arbitrum, avalanche, bsc, celo, gnosis, mainnet, optimism, polygon, scroll]

type MainnetChainId = (typeof superfluidMainnets)[number]["id"]

export const superfluidTestnets: readonly [
	Chain & { id: (typeof baseSepolia)["id"] },
	Chain & { id: (typeof avalancheFuji)["id"] },
	Chain & { id: (typeof optimismSepolia)["id"] },
	Chain & { id: (typeof sepolia)["id"] },
	Chain & { id: (typeof arcTestnet)["id"] },
] = [baseSepolia, avalancheFuji, optimismSepolia, sepolia, arcTestnet] as const

type TestnetChainId = (typeof superfluidTestnets)[number]["id"]

export const superfluidMainnetTransports = {
	[base.id]: fallback([http(), http("https://rpc-endpoints.superfluid.dev/base-mainnet")]),
	[arbitrum.id]: fallback([http(), http("https://rpc-endpoints.superfluid.dev/arbitrum-one")]),
	[avalanche.id]: fallback([http(), http("https://rpc-endpoints.superfluid.dev/avalanche-c")]),
	[bsc.id]: fallback([http(), http("https://rpc-endpoints.superfluid.dev/bsc-mainnet")]),
	[celo.id]: fallback([http(), http("https://rpc-endpoints.superfluid.dev/celo-mainnet")]),
	[gnosis.id]: fallback([http(), http("https://rpc-endpoints.superfluid.dev/xdai-mainnet")]),
	[mainnet.id]: fallback([http(), http("https://rpc-endpoints.superfluid.dev/eth-mainnet")]),
	[optimism.id]: fallback([http(), http("https://rpc-endpoints.superfluid.dev/optimism-mainnet")]),
	[polygon.id]: fallback([http(), http("https://rpc-endpoints.superfluid.dev/polygon-mainnet")]),
	[scroll.id]: fallback([http(), http("https://rpc-endpoints.superfluid.dev/scroll-mainnet")]),
} as const satisfies Record<MainnetChainId, Transport>

export const superfluidTestnetTransports = {
	[baseSepolia.id]: fallback([http(), http("https://rpc-endpoints.superfluid.dev/base-sepolia")]),
	[avalancheFuji.id]: fallback([http(), http("https://rpc-endpoints.superfluid.dev/avalanche-fuji")]),
	[optimismSepolia.id]: fallback([http(), http("https://rpc-endpoints.superfluid.dev/optimism-sepolia")]),
	[sepolia.id]: fallback([http(), http("https://rpc-endpoints.superfluid.dev/eth-sepolia")]),
	[arcTestnet.id]: fallback([http(), http("https://rpc-endpoints.superfluid.dev/arc-testnet")]),
} as const satisfies Record<TestnetChainId, Transport>
