---
"@sfpro/sdk": minor
---

Update `@superfluid-finance/ethereum-contracts` to 1.15.2 and regenerate ABIs, actions, and hooks.

**Breaking:** the SuperTokenFactory canonical ERC20 wrapper API was removed upstream, so the following exports are gone:

- **Actions** (`@sfpro/sdk/action`): `readSuperTokenFactoryGetCanonicalErc20Wrapper`, `readSuperTokenFactoryComputeCanonicalErc20WrapperAddress`, `writeSuperTokenFactoryCreateCanonicalErc20Wrapper`, `writeSuperTokenFactoryInitializeCanonicalWrapperSuperTokens`, `simulateSuperTokenFactoryCreateCanonicalErc20Wrapper`, `simulateSuperTokenFactoryInitializeCanonicalWrapperSuperTokens`
- **Hooks** (`@sfpro/sdk/hook`): the six `use*` equivalents of the above.

`createERC20Wrapper` and all other SuperTokenFactory functions are unaffected. The regeneration also refreshes the OpenZeppelin SafeCast error signature (`SafeCastOverflowedIntToUint` → `SafeCastOverflowedIntDowncast`) inherited across several contracts, from the OZ v5.6.1 submodule bump.
