import superfluidMetadata from "@superfluid-finance/metadata"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import type { TokenResponse } from "../types"

interface TokenTableProps {
	tokens: TokenResponse[]
}

export function TokenTable({ tokens }: TokenTableProps) {
	const getTokenTypeDisplay = (type: string) => {
		switch (type) {
			case "pureSuperToken":
				return "Pure Super Token"
			case "nativeAssetSuperToken":
				return "Native Asset Super Token"
			case "wrapperSuperToken":
				return "Wrapper Super Token"
			case "underlyingToken":
				return "Underlying Token"
			default:
				return type
		}
	}

	const getChainName = (chainId: number) =>
		superfluidMetadata.getNetworkByChainId(chainId)?.humanReadableName ?? `Chain ${chainId}`

	return (
		<div className="rounded-md border">
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>Token</TableHead>
						<TableHead>Symbol</TableHead>
						<TableHead>Chain</TableHead>
						<TableHead>Type</TableHead>
						<TableHead>Listed</TableHead>
						<TableHead>Tags</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{tokens.map((token) => (
						<TableRow key={token.id}>
							<TableCell>
								<div className="flex items-center gap-2">
									{token.logoUri && (
										<img
											src={token.logoUri}
											alt={`${token.symbol} logo`}
											width={24}
											height={24}
											className="rounded-full"
										/>
									)}
									<div>
										<div className="font-medium">{token.name}</div>
										<div className="text-xs text-muted-foreground font-mono">
											{token.address.slice(0, 6)}...{token.address.slice(-4)}
										</div>
									</div>
								</div>
							</TableCell>
							<TableCell className="font-mono">{token.symbol}</TableCell>
							<TableCell>{getChainName(token.chainId)}</TableCell>
							<TableCell>
								<span className="text-xs px-2 py-1 bg-secondary rounded">{getTokenTypeDisplay(token.tokenType)}</span>
							</TableCell>
							<TableCell>
								{token.isListed ? (
									<span className="text-green-600 text-xs">✓ Listed</span>
								) : (
									<span className="text-muted-foreground text-xs">Not Listed</span>
								)}
							</TableCell>
							<TableCell>
								{token.tags && token.tags.length > 0 ? (
									<div className="flex flex-wrap gap-1">
										{token.tags.map((tag) => (
											<span key={tag} className="px-1.5 py-0.5 bg-secondary text-secondary-foreground rounded text-xs">
												{tag}
											</span>
										))}
									</div>
								) : (
									<span className="text-muted-foreground text-xs">-</span>
								)}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	)
}
