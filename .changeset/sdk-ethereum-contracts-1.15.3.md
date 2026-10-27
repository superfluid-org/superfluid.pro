---
"@sfpro/sdk": patch
---

Update `@superfluid-finance/ethereum-contracts` to v1.15.3 and regenerate ABIs, actions, and hooks.

**New exports**

- **Actions** (`@sfpro/sdk/action`): `readIdaNewActivityFrozen`, `writeTogaBond`, `simulateTogaBond`
- **Hooks** (`@sfpro/sdk/hook`): `useReadIdaNewActivityFrozen`, `useWriteTogaBond`, `useSimulateTogaBond`

**ABI changes** (`@sfpro/sdk/abi`)

- `hostAbi`: `callAppBeforeCallback` and `callAppAfterCallback` take a fifth `callbackGasLimit` argument (`uint256`), and `callAppBeforeCallback` additionally returns `remainingCallbackGas`. The previous four-argument forms no longer exist in the ABI.
- `hostAbi`, `idaAbi`, `blindMacroForwarderAbi`, `clearMacroForwarderAbi`: new errors `HOST_CALLBACK_CONTEXT_TOO_LARGE`, `IDA_NEW_ACTIVITY_FROZEN`, `IDA_TOO_MANY_SUBSCRIPTIONS`, `IDA_INVALID_MAX_NUM_SUBSCRIPTIONS`. `idaAbi` also gains `NEW_ACTIVITY_FROZEN()` and two new constructor arguments (`newActivityFrozen`, `maxNumSubscriptions`).
- `togaAbi`: new `bond(token, amount, exitRate)`, and the `getCurrentPICInfo` output `bond` is renamed `bondAmount` (names only, no selector change). `bond` is in the v1.15.3 source but not its changelog, and most currently deployed TOGA instances do not have it yet (only arc-mainnet does, of the mainnets checked), so `writeTogaBond` reverts there.

The regenerated ABIs come from the pinned dev build `1.15.4-dev.0567de2.0` of `@superfluid-finance/ethereum-contracts`, published from the same commit (`0567de2`) as the `ethereum-contracts@v1.15.3` tag; it will move to `1.15.3` once that release is on npm. It is a devDependency used only at generation time, so SDK consumers never install it.
