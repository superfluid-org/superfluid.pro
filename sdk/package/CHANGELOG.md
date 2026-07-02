# @sfpro/sdk

## 0.2.3

### Patch Changes

- 852bbc6: Update `@superfluid-finance/ethereum-contracts` to 1.15.2 and regenerate ABIs, actions, and hooks.

  The SuperTokenFactory canonical ERC20 wrapper API was removed upstream, so the following exports are gone:
  - **Actions** (`@sfpro/sdk/action`): `readSuperTokenFactoryGetCanonicalErc20Wrapper`, `readSuperTokenFactoryComputeCanonicalErc20WrapperAddress`, `writeSuperTokenFactoryCreateCanonicalErc20Wrapper`, `writeSuperTokenFactoryInitializeCanonicalWrapperSuperTokens`, `simulateSuperTokenFactoryCreateCanonicalErc20Wrapper`, `simulateSuperTokenFactoryInitializeCanonicalWrapperSuperTokens`
  - **Hooks** (`@sfpro/sdk/hook`): the six `use*` equivalents of the above.

  `createERC20Wrapper` and all other SuperTokenFactory functions are unaffected. The regeneration also refreshes the OpenZeppelin SafeCast error signature (`SafeCastOverflowedIntToUint` → `SafeCastOverflowedIntDowncast`) inherited across several contracts, from the OZ v5.6.1 submodule bump.

- 98b8429: Harden package publishing. Add a `files` allowlist so the tarball ships only `dist` (plus `package.json` and `LICENSE`) and no longer includes `src`, tests, configs, `.turbo`, or `.env.example`; add a `LICENSE` file (MIT); declare `engines.node` `>=18`; and add an `attw` + `publint` validation gate (`check:package`) to CI/release to lock the package's export and type-resolution contract. No API or runtime changes — the package remains ESM-only.

## 0.2.2

### Patch Changes

- 890bba5: Add governance contract addresses for testnets. Previously the `governance` contract was only configured for mainnets, since `@superfluid-finance/metadata` does not list a governance address for testnets. The testnet `TestGovernance` instances (eth-sepolia, base-sepolia, optimism-sepolia, scroll-sepolia, avalanche-fuji) share the full functional interface with `SuperfluidGovernanceII`, so they are now exposed under the existing `governance` export with the `SuperfluidGovernanceII` ABI.

## 0.2.1

### Patch Changes

- 22af298: Add Blind Macro Forwarder (`blindMacroForwarder`, `BlindMacroForwarder`) ABI, address, hooks, and actions.
- 22af298: Add Clear Macro Forwarder (`clearMacroForwarder`, `ClearMacroForwarderV1WithPermit2`) ABI, address, hooks, and actions.

## 0.2.0

### Minor Changes

- 047db20: Update ABIs from @superfluid-finance/ethereum-contracts 1.15.0, adding yield backend support

## 0.1.11

### Patch Changes

- 9b04287: Update SUP contracts & allow wagmi v3 in package.json

## 0.1.9

### Patch Changes

- cbbda9a: Update Locker contract ABI

## 0.1.8

### Patch Changes

- 2144fd8: Update SupLocker contract

## 0.1.7

### Patch Changes

- 81135e7: Update deps

## 0.1.6

### Patch Changes

- 3676c5f: Update SUP token contract

## 0.1.5

### Patch Changes

- 26a4fe8: Update to newer testnet SUP contracts

## 0.1.4

### Patch Changes

- 7d5a797: Fix contract address & add more SUP contracts

## 0.1.3

### Patch Changes

- f09ebe8: Remove "Fluid" from LockerFactory's name

## 0.1.2

### Patch Changes

- 68d8ca1: Fix Locker and Fontaine being bound to concrete addresses

## 0.1.1

### Patch Changes

- 0891ed2: Add support of SUP contracts

## 0.1.0

### Minor Changes

- 00568c2: Initial release of Superfluid SDK with TypeScript bindings for Superfluid Protocol

## 0.1.0

### Major Changes

- Initial alpha release of @sfpro/sdk

  This is the first alpha release of the Superfluid SDK, providing:
  - TypeScript bindings for Superfluid Protocol contracts
  - React hooks for easy integration with wagmi
  - Actions for contract interactions
  - Support for both mainnet and testnet chains
  - Tree-shakeable exports for optimal bundle size

  Available exports:
  - `/abi` - Contract ABIs
  - `/hook` - React hooks for contract interactions
  - `/action` - Wagmi actions for contract calls
  - `/util` - Utility functions
  - `/config` - Chain and transport configurations
  - `/constant` - Protocol constants
    EOF < /dev/null
