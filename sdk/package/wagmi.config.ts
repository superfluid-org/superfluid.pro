import { type Config, defineConfig } from "@wagmi/cli";
import { erc20Abi, type Abi } from "viem";
import { react, actions } from "@wagmi/cli/plugins";
import { base, baseSepolia, mainnet } from "viem/chains";

// # Main contracts
import CFAv1Forwarder from "@superfluid-finance/ethereum-contracts/build/hardhat/contracts/utils/CFAv1Forwarder.sol/CFAv1Forwarder.json" with {
	type: "json",
};
import GDAv1Forwarder from "@superfluid-finance/ethereum-contracts/build/hardhat/contracts/utils/GDAv1Forwarder.sol/GDAv1Forwarder.json" with {
	type: "json",
};
import SuperToken from "@superfluid-finance/ethereum-contracts/build/hardhat/contracts/superfluid/SuperToken.sol/SuperToken.json" with {
	type: "json",
};
import NativeAssetSuperToken from "@superfluid-finance/ethereum-contracts/build/hardhat/contracts/interfaces/tokens/ISETH.sol/ISETHCustom.json" with {
	type: "json",
};

// # Protocol contracts
import Host from "@superfluid-finance/ethereum-contracts/build/hardhat/contracts/superfluid/Superfluid.sol/Superfluid.json" with {
	type: "json",
};
import ConstantFlowAgreementV1 from "@superfluid-finance/ethereum-contracts/build/hardhat/contracts/agreements/ConstantFlowAgreementV1.sol/ConstantFlowAgreementV1.json" with {
	type: "json",
};
import GeneralDistributionAgreementV1 from "@superfluid-finance/ethereum-contracts/build/hardhat/contracts/agreements/gdav1/GeneralDistributionAgreementV1.sol/GeneralDistributionAgreementV1.json" with {
	type: "json",
};
import SuperfluidPool from "@superfluid-finance/ethereum-contracts/build/hardhat/contracts/agreements/gdav1/SuperfluidPool.sol/SuperfluidPool.json" with {
	type: "json",
};
import InstantDistributionAgreementV1 from "@superfluid-finance/ethereum-contracts/build/hardhat/contracts/agreements/InstantDistributionAgreementV1.sol/InstantDistributionAgreementV1.json" with {
	type: "json",
};
import SuperTokenFactory from "@superfluid-finance/ethereum-contracts/build/hardhat/contracts/superfluid/SuperTokenFactory.sol/SuperTokenFactory.json" with {
	type: "json",
};
import SuperfluidGovernanceII from "@superfluid-finance/ethereum-contracts/build/hardhat/contracts/gov/SuperfluidGovernanceII.sol/SuperfluidGovernanceII.json" with {
	type: "json",
};
import TOGA from "@superfluid-finance/ethereum-contracts/build/hardhat/contracts/utils/TOGA.sol/TOGA.json" with {
	type: "json",
};
import BatchLiquidator from "@superfluid-finance/ethereum-contracts/build/hardhat/contracts/utils/BatchLiquidator.sol/BatchLiquidator.json" with {
	type: "json",
};
import ClearMacroForwarderV1WithPermit2 from "@superfluid-finance/ethereum-contracts/build/hardhat/contracts/utils/ClearMacroForwarderV1WithPermit2.sol/ClearMacroForwarderV1WithPermit2.json" with {
	type: "json",
};
import BlindMacroForwarder from "@superfluid-finance/ethereum-contracts/build/hardhat/contracts/utils/BlindMacroForwarder.sol/BlindMacroForwarder.json" with {
	type: "json",
};

// # SUP contracts
import Locker from "./abis/FluidLocker.json" with {
	type: "json",
};
import Fontaine from "./abis/Fontaine.json" with {
	type: "json",
};
import StakingRewardController from "./abis/StakingRewardController.json" with {
	type: "json"
}
import SupToken from "./abis/SupToken.json" with {
	type: "json"
}
import ProgramManager from "./abis/FluidEPProgramManager.json" with {
	type: "json"
}
import LockerFactory from "./abis/FluidLockerFactory.json" with {
	type: "json"
}
import VestingFactory from "./abis/SupVestingFactory.json" with {
	type: "json"
}
// ---

// # Automation contracts
import AutoWrapStrategy from "./abis/AutoWrapStrategy.json" with { type: "json" };
import AutoWrapManager from "./abis/AutoWrapManager.json" with { type: "json" };
import FlowScheduler from "./abis/FlowScheduler.json" with { type: "json" };
import VestingSchedulerV1 from "./abis/VestingScheduler.json" with { type: "json" };
import VestingSchedulerV2 from "./abis/VestingSchedulerV2.json" with { type: "json" };
import VestingSchedulerV3 from "./abis/VestingSchedulerV3.json" with { type: "json" };
// ---

import superfluidMetadata from "@superfluid-finance/metadata";

const type = process.env.TYPE?.toLowerCase();
const category = process.env.CATEGORY?.toLowerCase();

// Testnets run a `TestGovernance` contract that @superfluid-finance/metadata does not list under
// contractsV1.governance. It shares the full functional interface with SuperfluidGovernanceII
// (34 methods), so the SuperfluidGovernanceII ABI works against these instances for all SDK use.
// Sourced on-chain via host.getGovernance(); drop an entry if/when metadata starts publishing it.
const testnetGovernanceAddresses: Record<number, Address> = {
	43113: "0xD0b6A4A3bE43265BEe638E4840755a3D7cC8A962", // avalanche-fuji
	11155111: "0x9539B21cC67844417E80aE168bc28c831E7Ed271", // eth-sepolia
	11155420: "0x24fDCc8386f9949DCFF792fF3fbB3dD0526C11aD", // optimism-sepolia
	84532: "0x3BDd82FFbCcB9DBD0c233Ecd950642edbF60D667", // base-sepolia
	5042002: "0x5F001c3915084186B9109fB9dc1e978c98f854b0", // arc-testnet
};

// # Superfluid error codes
const tokenErrors = uniqErrors((erc20Abi as Abi).concat(SuperToken.abi as Abi).filter((x) => x.type === "error"));

const cfaErrors = uniqErrors(
	(ConstantFlowAgreementV1.abi as Abi).concat(tokenErrors).filter((x) => x.type === "error"),
);

const gdaErrors = uniqErrors(
	(GeneralDistributionAgreementV1.abi as Abi)
		.concat(SuperfluidPool.abi as Abi)
		.concat(tokenErrors)
		.filter((x) => x.type === "error"),
);

const allErrors = uniqErrors(
	tokenErrors
		.concat(cfaErrors)
		.concat(gdaErrors)
		.concat(Host.abi as Abi)
		.concat(InstantDistributionAgreementV1.abi as Abi)
		.filter((x) => x.type === "error"),
);
// ---

// # ABI manipulation

// The contracts themselves don't include all the error codes that could happen down the line.
// Adding the errors to the ABI will make wagmi/viem display the right error code.

const HostWithAllErrors = uniqErrors((Host.abi as Abi).concat(allErrors));

const CfaForwarderWithCfaErrors = uniqErrors((CFAv1Forwarder.abi as Abi).concat(cfaErrors));

const GdaForwarderWithGdaErrors = uniqErrors((GDAv1Forwarder.abi as Abi).concat(gdaErrors));

const ClearMacroForwarderWithAllErrors = uniqErrors((ClearMacroForwarderV1WithPermit2.abi as Abi).concat(allErrors));

const BlindMacroForwarderWithAllErrors = uniqErrors((BlindMacroForwarder.abi as Abi).concat(allErrors));

// Combine Native Asset Super Token with Wrapper Super Token to enable a simpler SDK API.
// The Pure Super Token is already included.

const SuperTokenCombined = SuperToken.abi.concat(NativeAssetSuperToken.abi);

// ---

// # CLI config
const out = (function (): string {
	switch (type) {
		case "abi":
			return `src/abi${category ? `/${category}` : ""}/generated.ts`;
		case "hook":
			return `src/hook${category ? `/${category}` : ""}/generated.ts`;
		case "action":
			return `src/action${category ? `/${category}` : ""}/generated.ts`;
		default:
			throw new Error(`Invalid type [${type}], use "abi", "hook" or "action".`);
	}
})();

const plugins = (function (): Plugins {
	const basePlugins = (() => {
		switch (type) {
			case "abi":
				return [];
			case "hook":
				return [
					react({
						getHookName: ({ contractName, type, itemName }) => {
							const actionName = getActionName({ contractName, type, itemName });
							return `use${capitalizeFirstLetter(actionName)}`;
						},
					}),
				];
			case "action":
				return [
					actions({
						overridePackageName: "@wagmi/core",
						getActionName: ({ contractName, type, itemName }) => getActionName({ contractName, type, itemName }),
					}),
				];
			default:
				throw new Error(`Invalid type [${type}], use "abi", "hook" or "action".`);
		}
	})();

	return basePlugins;
})();

export default defineConfig({
	out,
	plugins,
	contracts: [
		...(!category
			? [
				{
					abi: SuperTokenCombined as Abi,
					name: "superToken",
				},
				{
					abi: CfaForwarderWithCfaErrors,
					name: "cfaForwarder",
					address: getAddressesFromMetadata((network) => network.contractsV1.cfaV1Forwarder),
				},
				{
					abi: GdaForwarderWithGdaErrors,
					name: "gdaForwarder",
					address: getAddressesFromMetadata((network) => network.contractsV1.gdaV1Forwarder),
				},
				{
					// Public SDK name uses Superfluid "Clear" branding; this is ClearMacroForwarderV1WithPermit2.
					// Address comes from metadata `contractsV1.clearMacroForwarderV1WithPermit2`.
					abi: ClearMacroForwarderWithAllErrors,
					name: "clearMacroForwarder",
					address: getAddressesFromMetadata((network) => network.contractsV1.clearMacroForwarderV1WithPermit2),
				},
				{
					// The blind macro forwarder (renamed legacy MacroForwarder); caller is the operator, no clear signing.
					// Address comes from metadata `contractsV1.macroForwarder`.
					abi: BlindMacroForwarderWithAllErrors,
					name: "blindMacroForwarder",
					address: getAddressesFromMetadata((network) => network.contractsV1.macroForwarder),
				},
				{
					abi: SuperfluidPool.abi as Abi,
					name: "gdaPool",
				},
			]
			: []),
		...(category === "core"
			? [
				{
					abi: HostWithAllErrors,
					name: "host",
					address: getAddressesFromMetadata((network) => network.contractsV1.host),
				},
				{
					abi: ConstantFlowAgreementV1.abi as Abi,
					name: "cfa",
					address: getAddressesFromMetadata((network) => network.contractsV1.cfaV1),
				},
				{
					abi: GeneralDistributionAgreementV1.abi as Abi,
					name: "gda",
					address: getAddressesFromMetadata((network) => network.contractsV1.gdaV1),
				},
				{
					abi: InstantDistributionAgreementV1.abi as Abi,
					name: "ida",
					address: getAddressesFromMetadata((network) => network.contractsV1.idaV1),
				},
				{
					abi: SuperTokenFactory.abi as Abi,
					name: "superTokenFactory",
					address: getAddressesFromMetadata((network) => network.contractsV1.superTokenFactory),
				},
				{
					abi: TOGA.abi as Abi,
					name: "toga",
					address: getAddressesFromMetadata((network) => network.contractsV1.toga),
				},
				{
					abi: SuperfluidGovernanceII.abi as Abi,
					name: "governance",
					address: {
						...testnetGovernanceAddresses,
						...getAddressesFromMetadata((network) => network.contractsV1.governance),
					},
				},
				{
					abi: BatchLiquidator.abi as Abi,
					name: "batchLiquidator",
					address: getAddressesFromMetadata((network) => network.contractsV1.superfluidLoader),
				},
			]
			: []),
		...(category === "automation"
			? [
				{
					abi: AutoWrapStrategy as Abi,
					name: "autoWrapStrategy",
					address: getAddressesFromMetadata((network) => network.contractsV1.autowrap?.wrapStrategy),
				},
				{
					abi: AutoWrapManager as Abi,
					name: "autoWrapManager",
					address: getAddressesFromMetadata((network) => network.contractsV1.autowrap?.manager),
				},
				{
					abi: FlowScheduler as Abi,
					name: "flowScheduler",
					address: getAddressesFromMetadata((network) => network.contractsV1.flowScheduler),
				},
				{
					abi: VestingSchedulerV1 as Abi,
					name: "legacyVestingSchedulerV1",
					address: getAddressesFromMetadata((network) => network.contractsV1.vestingScheduler),
				},
				{
					abi: VestingSchedulerV2 as Abi,
					name: "legacyVestingSchedulerV2",
					address: getAddressesFromMetadata((network) => network.contractsV1.vestingSchedulerV2),
				},
				{
					// TODO: Should any errors be added here?
					abi: VestingSchedulerV3 as Abi,
					name: "vestingSchedulerV3",
					address: getAddressesFromMetadata((network) => network.contractsV1.vestingSchedulerV3),
				},
			]
			: []),
		...(category === "sup"
			? [
				{
					// TODO: Should add errors?
					// TODO: Combine with L1 and L2 ABI? The token is a little different on Mainnet vs Base.
					name: "supToken",
					abi: SupToken as Abi,
					address: {
						[mainnet.id]: "0xD05001Db979ff2f1a3B2105875d3454E90dd2961" as const,
						[base.id]: "0xa69f80524381275A7fFdb3AE01c54150644c8792" as const,
						[baseSepolia.id]: "0xFd62b398DD8a233ad37156690631fb9515059d6A" as const,
					},
				},
				{
					abi: Locker as Abi,
					name: "locker"
				},
				{
					abi: Fontaine as Abi,
					name: "fontaine"
				},
				{
					abi: StakingRewardController as Abi,
					name: "stakingRewardController",
					address: {
						[base.id]: "0xb19Ae25A98d352B36CED60F93db926247535048b" as const,
						[baseSepolia.id]: "0x9FC0Bb109F3e733Bd84B30F8D89685b0304fC018" as const,
					}
				},
				{
					abi: ProgramManager as Abi,
					name: "programManager",
					address: {
						[base.id]: "0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a" as const,
						[baseSepolia.id]: "0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706" as const,
					},
				},
				{
					abi: LockerFactory as Abi,
					name: "lockerFactory",
					address: {
						[base.id]: "0xA6694cAB43713287F7735dADc940b555db9d39D9" as const,
						[baseSepolia.id]: "0x897D343D24Ac5b84838B976Cf37036EDEfe3E967" as const,
					},
				},
				{
					abi: VestingFactory as Abi,
					name: "vestingFactory",
					address: {
						[base.id]: "0x3DF8A6558073e973f4c3979138Cca836C993E285" as const,
					},
				},
			]
			: []),
	],
});
// ---

// # Types
type Address = `0x${string}`;
type Addressish = Address | string;

type NetworkMetadata = (typeof superfluidMetadata.networks)[number];

type Plugins = Config["plugins"];
// ---

// # Utils
function getAddressesFromMetadata(selector: (network: NetworkMetadata) => Addressish | undefined) {
	return superfluidMetadata.networks.reduce(
		(obj, network) => {
			const address = selector(network);
			if (address) {
				obj[network.chainId] = address as Address;
			}
			return obj;
		},
		{} as Record<number, Address>,
	);
}

function uniqErrors(abi: Abi): Abi {
	return abi.filter((item, index, self) => {
		if (item.type !== "error") {
			return true;
		}
		return index === self.findIndex((e) => e.type === "error" && e.name === item.name);
	}) as Abi;
}

function getActionName({
	contractName,
	itemName,
	type,
}: {
	contractName: string;
	itemName?: string | undefined;
	type: "read" | "simulate" | "watch" | "write";
}) {
	let actionName = `${type}${contractName}${itemName ?? ""}`;

	if (type === "watch") actionName = `${actionName}Event`;

	actionName = actionName.replace("CfaCfa", "Cfa").replace("IdaIda", "Ida").replace("GdaGda", "Gda");

	return actionName;
}

function capitalizeFirstLetter(val: string) {
	return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}
// ---
