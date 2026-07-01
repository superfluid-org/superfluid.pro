import {
  createReadContract,
  createWriteContract,
  createSimulateContract,
  createWatchContractEvent,
} from '@wagmi/core/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// blindMacroForwarder
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 */
export const blindMacroForwarderAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'host', internalType: 'contract ISuperfluid', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'signer',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'macroContract',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'MacroExecuted',
  },
  {
    type: 'function',
    inputs: [
      { name: 'm', internalType: 'contract IMacro', type: 'address' },
      { name: 'params', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'buildBatchOperations',
    outputs: [
      {
        name: 'operations',
        internalType: 'struct ISuperfluid.Operation[]',
        type: 'tuple[]',
        components: [
          { name: 'operationType', internalType: 'uint32', type: 'uint32' },
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'data', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'm', internalType: 'contract IMacro', type: 'address' },
      { name: 'params', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'runMacro',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'payable',
  },
  { type: 'error', inputs: [], name: 'ECDSAInvalidSignature' },
  {
    type: 'error',
    inputs: [{ name: 'length', internalType: 'uint256', type: 'uint256' }],
    name: 'ECDSAInvalidSignatureLength',
  },
  {
    type: 'error',
    inputs: [{ name: 's', internalType: 'bytes32', type: 'bytes32' }],
    name: 'ECDSAInvalidSignatureS',
  },
  { type: 'error', inputs: [], name: 'SF_TOKEN_AGREEMENT_ALREADY_EXISTS' },
  { type: 'error', inputs: [], name: 'SF_TOKEN_AGREEMENT_DOES_NOT_EXIST' },
  { type: 'error', inputs: [], name: 'SF_TOKEN_BURN_INSUFFICIENT_BALANCE' },
  { type: 'error', inputs: [], name: 'SF_TOKEN_MOVE_INSUFFICIENT_BALANCE' },
  { type: 'error', inputs: [], name: 'SF_TOKEN_ONLY_HOST' },
  { type: 'error', inputs: [], name: 'SF_TOKEN_ONLY_LISTED_AGREEMENT' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_APPROVE_FROM_ZERO_ADDRESS' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_APPROVE_TO_ZERO_ADDRESS' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_BURN_FROM_ZERO_ADDRESS' },
  {
    type: 'error',
    inputs: [],
    name: 'SUPER_TOKEN_CALLER_IS_NOT_OPERATOR_FOR_HOLDER',
  },
  {
    type: 'error',
    inputs: [],
    name: 'SUPER_TOKEN_INFLATIONARY_DEFLATIONARY_NOT_SUPPORTED',
  },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_MINT_TO_ZERO_ADDRESS' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_NFT_PROXY_ADDRESS_CHANGED' },
  {
    type: 'error',
    inputs: [],
    name: 'SUPER_TOKEN_NOT_ERC777_TOKENS_RECIPIENT',
  },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_NO_UNDERLYING_TOKEN' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_ONLY_ADMIN' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_ONLY_GOV_OWNER' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_ONLY_SELF' },
  {
    type: 'error',
    inputs: [{ name: 'deadline', internalType: 'uint256', type: 'uint256' }],
    name: 'SUPER_TOKEN_PERMIT_EXPIRED_SIGNATURE',
  },
  {
    type: 'error',
    inputs: [
      { name: 'signer', internalType: 'address', type: 'address' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'SUPER_TOKEN_PERMIT_INVALID_SIGNER',
  },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_TRANSFER_FROM_ZERO_ADDRESS' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_TRANSFER_TO_ZERO_ADDRESS' },
  {
    type: 'error',
    inputs: [{ name: 'value', internalType: 'int256', type: 'int256' }],
    name: 'SafeCastOverflowedIntToUint',
  },
  {
    type: 'error',
    inputs: [{ name: 'value', internalType: 'uint256', type: 'uint256' }],
    name: 'SafeCastOverflowedUintToInt',
  },
  {
    type: 'error',
    inputs: [{ name: 'token', internalType: 'address', type: 'address' }],
    name: 'SafeERC20FailedOperation',
  },
  { type: 'error', inputs: [], name: 'AGREEMENT_BASE_ONLY_HOST' },
  {
    type: 'error',
    inputs: [{ name: '_code', internalType: 'uint256', type: 'uint256' }],
    name: 'APP_RULE',
  },
  { type: 'error', inputs: [], name: 'CFA_ACL_FLOW_RATE_ALLOWANCE_EXCEEDED' },
  { type: 'error', inputs: [], name: 'CFA_ACL_NO_NEGATIVE_ALLOWANCE' },
  { type: 'error', inputs: [], name: 'CFA_ACL_NO_SENDER_CREATE' },
  { type: 'error', inputs: [], name: 'CFA_ACL_NO_SENDER_FLOW_OPERATOR' },
  { type: 'error', inputs: [], name: 'CFA_ACL_NO_SENDER_UPDATE' },
  { type: 'error', inputs: [], name: 'CFA_ACL_OPERATOR_NO_CREATE_PERMISSIONS' },
  { type: 'error', inputs: [], name: 'CFA_ACL_OPERATOR_NO_DELETE_PERMISSIONS' },
  { type: 'error', inputs: [], name: 'CFA_ACL_OPERATOR_NO_UPDATE_PERMISSIONS' },
  { type: 'error', inputs: [], name: 'CFA_ACL_UNCLEAN_PERMISSIONS' },
  { type: 'error', inputs: [], name: 'CFA_DEPOSIT_TOO_BIG' },
  { type: 'error', inputs: [], name: 'CFA_FLOW_ALREADY_EXISTS' },
  { type: 'error', inputs: [], name: 'CFA_FLOW_DOES_NOT_EXIST' },
  { type: 'error', inputs: [], name: 'CFA_FLOW_RATE_TOO_BIG' },
  { type: 'error', inputs: [], name: 'CFA_HOOK_OUT_OF_GAS' },
  { type: 'error', inputs: [], name: 'CFA_INSUFFICIENT_BALANCE' },
  { type: 'error', inputs: [], name: 'CFA_INVALID_FLOW_RATE' },
  { type: 'error', inputs: [], name: 'CFA_NON_CRITICAL_SENDER' },
  { type: 'error', inputs: [], name: 'CFA_NO_SELF_FLOW' },
  { type: 'error', inputs: [], name: 'CFA_ZERO_ADDRESS_RECEIVER' },
  { type: 'error', inputs: [], name: 'CFA_ZERO_ADDRESS_SENDER' },
  { type: 'error', inputs: [], name: 'GDA_ADMIN_CANNOT_BE_POOL' },
  { type: 'error', inputs: [], name: 'GDA_CANNOT_CONNECT_POOL' },
  { type: 'error', inputs: [], name: 'GDA_DISTRIBUTE_FOR_OTHERS_NOT_ALLOWED' },
  {
    type: 'error',
    inputs: [],
    name: 'GDA_DISTRIBUTE_FROM_ANY_ADDRESS_NOT_ALLOWED',
  },
  { type: 'error', inputs: [], name: 'GDA_FLOW_DOES_NOT_EXIST' },
  { type: 'error', inputs: [], name: 'GDA_INSUFFICIENT_BALANCE' },
  { type: 'error', inputs: [], name: 'GDA_NON_CRITICAL_SENDER' },
  { type: 'error', inputs: [], name: 'GDA_NOT_POOL_ADMIN' },
  { type: 'error', inputs: [], name: 'GDA_NO_NEGATIVE_FLOW_RATE' },
  { type: 'error', inputs: [], name: 'GDA_NO_ZERO_ADDRESS_ADMIN' },
  { type: 'error', inputs: [], name: 'GDA_ONLY_SUPER_TOKEN_POOL' },
  {
    type: 'error',
    inputs: [
      { name: 'bits', internalType: 'uint8', type: 'uint8' },
      { name: 'value', internalType: 'int256', type: 'int256' },
    ],
    name: 'SafeCastOverflowedIntDowncast',
  },
  {
    type: 'error',
    inputs: [
      { name: 'bits', internalType: 'uint8', type: 'uint8' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'SafeCastOverflowedUintDowncast',
  },
  { type: 'error', inputs: [], name: 'SUPERFLUID_POOL_INVALID_TIME' },
  { type: 'error', inputs: [], name: 'SUPERFLUID_POOL_NOT_GDA' },
  { type: 'error', inputs: [], name: 'SUPERFLUID_POOL_NOT_POOL_ADMIN_OR_GDA' },
  { type: 'error', inputs: [], name: 'SUPERFLUID_POOL_NO_POOL_MEMBERS' },
  { type: 'error', inputs: [], name: 'SUPERFLUID_POOL_NO_ZERO_ADDRESS' },
  {
    type: 'error',
    inputs: [],
    name: 'SUPERFLUID_POOL_SELF_TRANSFER_NOT_ALLOWED',
  },
  {
    type: 'error',
    inputs: [],
    name: 'SUPERFLUID_POOL_TRANSFER_UNITS_NOT_ALLOWED',
  },
  { type: 'error', inputs: [], name: 'HOST_AGREEMENT_ALREADY_REGISTERED' },
  { type: 'error', inputs: [], name: 'HOST_AGREEMENT_CALLBACK_IS_NOT_ACTION' },
  { type: 'error', inputs: [], name: 'HOST_AGREEMENT_IS_NOT_REGISTERED' },
  {
    type: 'error',
    inputs: [],
    name: 'HOST_CALL_AGREEMENT_WITH_CTX_FROM_WRONG_ADDRESS',
  },
  {
    type: 'error',
    inputs: [],
    name: 'HOST_CALL_APP_ACTION_WITH_CTX_FROM_WRONG_ADDRESS',
  },
  {
    type: 'error',
    inputs: [],
    name: 'HOST_CANNOT_DOWNGRADE_TO_NON_UPGRADEABLE',
  },
  { type: 'error', inputs: [], name: 'HOST_INVALID_CONFIG_WORD' },
  { type: 'error', inputs: [], name: 'HOST_MAX_256_AGREEMENTS' },
  { type: 'error', inputs: [], name: 'HOST_MUST_BE_CONTRACT' },
  { type: 'error', inputs: [], name: 'HOST_NEED_MORE_GAS' },
  { type: 'error', inputs: [], name: 'HOST_NON_UPGRADEABLE' },
  { type: 'error', inputs: [], name: 'HOST_NON_ZERO_LENGTH_PLACEHOLDER_CTX' },
  { type: 'error', inputs: [], name: 'HOST_NOT_A_SUPER_APP' },
  { type: 'error', inputs: [], name: 'HOST_NO_APP_REGISTRATION_PERMISSION' },
  { type: 'error', inputs: [], name: 'HOST_ONLY_GOVERNANCE' },
  { type: 'error', inputs: [], name: 'HOST_ONLY_LISTED_AGREEMENT' },
  { type: 'error', inputs: [], name: 'HOST_RECEIVER_IS_NOT_SUPER_APP' },
  { type: 'error', inputs: [], name: 'HOST_SENDER_IS_NOT_SUPER_APP' },
  { type: 'error', inputs: [], name: 'HOST_SOURCE_APP_NEEDS_HIGHER_APP_LEVEL' },
  { type: 'error', inputs: [], name: 'HOST_SUPER_APP_ALREADY_REGISTERED' },
  { type: 'error', inputs: [], name: 'HOST_SUPER_APP_IS_JAILED' },
  { type: 'error', inputs: [], name: 'HOST_UNKNOWN_BATCH_CALL_OPERATION_TYPE' },
  { type: 'error', inputs: [], name: 'IDA_INDEX_ALREADY_EXISTS' },
  { type: 'error', inputs: [], name: 'IDA_INDEX_DOES_NOT_EXIST' },
  { type: 'error', inputs: [], name: 'IDA_INDEX_SHOULD_GROW' },
  { type: 'error', inputs: [], name: 'IDA_INSUFFICIENT_BALANCE' },
  { type: 'error', inputs: [], name: 'IDA_OPERATION_NOT_ALLOWED' },
  { type: 'error', inputs: [], name: 'IDA_SUBSCRIPTION_ALREADY_APPROVED' },
  { type: 'error', inputs: [], name: 'IDA_SUBSCRIPTION_DOES_NOT_EXIST' },
  { type: 'error', inputs: [], name: 'IDA_SUBSCRIPTION_IS_NOT_APPROVED' },
  { type: 'error', inputs: [], name: 'IDA_ZERO_ADDRESS_SUBSCRIBER' },
] as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 */
export const blindMacroForwarderAddress = {
  1: '0xFD0268E33111565dE546af2675351A4b1587F89F',
  10: '0xFD0268E33111565dE546af2675351A4b1587F89F',
  56: '0xFD0268E33111565dE546af2675351A4b1587F89F',
  100: '0xFD0268E33111565dE546af2675351A4b1587F89F',
  137: '0xFD0268E33111565dE546af2675351A4b1587F89F',
  8453: '0xFD0268E33111565dE546af2675351A4b1587F89F',
  42161: '0xFD0268E33111565dE546af2675351A4b1587F89F',
  42220: '0xFD0268E33111565dE546af2675351A4b1587F89F',
  43113: '0xFD0268E33111565dE546af2675351A4b1587F89F',
  43114: '0xFD0268E33111565dE546af2675351A4b1587F89F',
  84532: '0xFD0268E33111565dE546af2675351A4b1587F89F',
  534351: '0xFD0268E33111565dE546af2675351A4b1587F89F',
  534352: '0xFD0268E33111565dE546af2675351A4b1587F89F',
  11155111: '0xFD0268E33111565dE546af2675351A4b1587F89F',
  11155420: '0xFD0268E33111565dE546af2675351A4b1587F89F',
  666666666: '0xFD0268E33111565dE546af2675351A4b1587F89F',
} as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 */
export const blindMacroForwarderConfig = {
  address: blindMacroForwarderAddress,
  abi: blindMacroForwarderAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// cfaForwarder
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x2CDd45c5182602a36d391F7F16DD9f8386C3bD8D)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 */
export const cfaForwarderAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'host', internalType: 'contract ISuperfluid', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  { type: 'error', inputs: [], name: 'CFA_FWD_INVALID_FLOW_RATE' },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract ISuperToken', type: 'address' },
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'flowrate', internalType: 'int96', type: 'int96' },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'createFlow',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract ISuperToken', type: 'address' },
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'deleteFlow',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract ISuperToken', type: 'address' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'getAccountFlowInfo',
    outputs: [
      { name: 'lastUpdated', internalType: 'uint256', type: 'uint256' },
      { name: 'flowrate', internalType: 'int96', type: 'int96' },
      { name: 'deposit', internalType: 'uint256', type: 'uint256' },
      { name: 'owedDeposit', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract ISuperToken', type: 'address' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'getAccountFlowrate',
    outputs: [{ name: 'flowrate', internalType: 'int96', type: 'int96' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract ISuperToken', type: 'address' },
      { name: 'flowrate', internalType: 'int96', type: 'int96' },
    ],
    name: 'getBufferAmountByFlowrate',
    outputs: [
      { name: 'bufferAmount', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract ISuperToken', type: 'address' },
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'receiver', internalType: 'address', type: 'address' },
    ],
    name: 'getFlowInfo',
    outputs: [
      { name: 'lastUpdated', internalType: 'uint256', type: 'uint256' },
      { name: 'flowrate', internalType: 'int96', type: 'int96' },
      { name: 'deposit', internalType: 'uint256', type: 'uint256' },
      { name: 'owedDeposit', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract ISuperToken', type: 'address' },
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'flowOperator', internalType: 'address', type: 'address' },
    ],
    name: 'getFlowOperatorPermissions',
    outputs: [
      { name: 'permissions', internalType: 'uint8', type: 'uint8' },
      { name: 'flowrateAllowance', internalType: 'int96', type: 'int96' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract ISuperToken', type: 'address' },
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'receiver', internalType: 'address', type: 'address' },
    ],
    name: 'getFlowrate',
    outputs: [{ name: 'flowrate', internalType: 'int96', type: 'int96' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract ISuperToken', type: 'address' },
      { name: 'flowOperator', internalType: 'address', type: 'address' },
    ],
    name: 'grantPermissions',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract ISuperToken', type: 'address' },
      { name: 'flowOperator', internalType: 'address', type: 'address' },
    ],
    name: 'revokePermissions',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract ISuperToken', type: 'address' },
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'flowrate', internalType: 'int96', type: 'int96' },
    ],
    name: 'setFlowrate',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract ISuperToken', type: 'address' },
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'flowrate', internalType: 'int96', type: 'int96' },
    ],
    name: 'setFlowrateFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract ISuperToken', type: 'address' },
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'flowrate', internalType: 'int96', type: 'int96' },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'updateFlow',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract ISuperToken', type: 'address' },
      { name: 'flowOperator', internalType: 'address', type: 'address' },
      { name: 'permissions', internalType: 'uint8', type: 'uint8' },
      { name: 'flowrateAllowance', internalType: 'int96', type: 'int96' },
    ],
    name: 'updateFlowOperatorPermissions',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  { type: 'error', inputs: [], name: 'AGREEMENT_BASE_ONLY_HOST' },
  {
    type: 'error',
    inputs: [{ name: '_code', internalType: 'uint256', type: 'uint256' }],
    name: 'APP_RULE',
  },
  { type: 'error', inputs: [], name: 'CFA_ACL_FLOW_RATE_ALLOWANCE_EXCEEDED' },
  { type: 'error', inputs: [], name: 'CFA_ACL_NO_NEGATIVE_ALLOWANCE' },
  { type: 'error', inputs: [], name: 'CFA_ACL_NO_SENDER_CREATE' },
  { type: 'error', inputs: [], name: 'CFA_ACL_NO_SENDER_FLOW_OPERATOR' },
  { type: 'error', inputs: [], name: 'CFA_ACL_NO_SENDER_UPDATE' },
  { type: 'error', inputs: [], name: 'CFA_ACL_OPERATOR_NO_CREATE_PERMISSIONS' },
  { type: 'error', inputs: [], name: 'CFA_ACL_OPERATOR_NO_DELETE_PERMISSIONS' },
  { type: 'error', inputs: [], name: 'CFA_ACL_OPERATOR_NO_UPDATE_PERMISSIONS' },
  { type: 'error', inputs: [], name: 'CFA_ACL_UNCLEAN_PERMISSIONS' },
  { type: 'error', inputs: [], name: 'CFA_DEPOSIT_TOO_BIG' },
  { type: 'error', inputs: [], name: 'CFA_FLOW_ALREADY_EXISTS' },
  { type: 'error', inputs: [], name: 'CFA_FLOW_DOES_NOT_EXIST' },
  { type: 'error', inputs: [], name: 'CFA_FLOW_RATE_TOO_BIG' },
  { type: 'error', inputs: [], name: 'CFA_HOOK_OUT_OF_GAS' },
  { type: 'error', inputs: [], name: 'CFA_INSUFFICIENT_BALANCE' },
  { type: 'error', inputs: [], name: 'CFA_INVALID_FLOW_RATE' },
  { type: 'error', inputs: [], name: 'CFA_NON_CRITICAL_SENDER' },
  { type: 'error', inputs: [], name: 'CFA_NO_SELF_FLOW' },
  { type: 'error', inputs: [], name: 'CFA_ZERO_ADDRESS_RECEIVER' },
  { type: 'error', inputs: [], name: 'CFA_ZERO_ADDRESS_SENDER' },
  {
    type: 'error',
    inputs: [{ name: 'value', internalType: 'int256', type: 'int256' }],
    name: 'SafeCastOverflowedIntToUint',
  },
  {
    type: 'error',
    inputs: [{ name: 'value', internalType: 'uint256', type: 'uint256' }],
    name: 'SafeCastOverflowedUintToInt',
  },
  { type: 'error', inputs: [], name: 'ECDSAInvalidSignature' },
  {
    type: 'error',
    inputs: [{ name: 'length', internalType: 'uint256', type: 'uint256' }],
    name: 'ECDSAInvalidSignatureLength',
  },
  {
    type: 'error',
    inputs: [{ name: 's', internalType: 'bytes32', type: 'bytes32' }],
    name: 'ECDSAInvalidSignatureS',
  },
  { type: 'error', inputs: [], name: 'SF_TOKEN_AGREEMENT_ALREADY_EXISTS' },
  { type: 'error', inputs: [], name: 'SF_TOKEN_AGREEMENT_DOES_NOT_EXIST' },
  { type: 'error', inputs: [], name: 'SF_TOKEN_BURN_INSUFFICIENT_BALANCE' },
  { type: 'error', inputs: [], name: 'SF_TOKEN_MOVE_INSUFFICIENT_BALANCE' },
  { type: 'error', inputs: [], name: 'SF_TOKEN_ONLY_HOST' },
  { type: 'error', inputs: [], name: 'SF_TOKEN_ONLY_LISTED_AGREEMENT' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_APPROVE_FROM_ZERO_ADDRESS' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_APPROVE_TO_ZERO_ADDRESS' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_BURN_FROM_ZERO_ADDRESS' },
  {
    type: 'error',
    inputs: [],
    name: 'SUPER_TOKEN_CALLER_IS_NOT_OPERATOR_FOR_HOLDER',
  },
  {
    type: 'error',
    inputs: [],
    name: 'SUPER_TOKEN_INFLATIONARY_DEFLATIONARY_NOT_SUPPORTED',
  },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_MINT_TO_ZERO_ADDRESS' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_NFT_PROXY_ADDRESS_CHANGED' },
  {
    type: 'error',
    inputs: [],
    name: 'SUPER_TOKEN_NOT_ERC777_TOKENS_RECIPIENT',
  },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_NO_UNDERLYING_TOKEN' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_ONLY_ADMIN' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_ONLY_GOV_OWNER' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_ONLY_SELF' },
  {
    type: 'error',
    inputs: [{ name: 'deadline', internalType: 'uint256', type: 'uint256' }],
    name: 'SUPER_TOKEN_PERMIT_EXPIRED_SIGNATURE',
  },
  {
    type: 'error',
    inputs: [
      { name: 'signer', internalType: 'address', type: 'address' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'SUPER_TOKEN_PERMIT_INVALID_SIGNER',
  },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_TRANSFER_FROM_ZERO_ADDRESS' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_TRANSFER_TO_ZERO_ADDRESS' },
  {
    type: 'error',
    inputs: [{ name: 'token', internalType: 'address', type: 'address' }],
    name: 'SafeERC20FailedOperation',
  },
] as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x2CDd45c5182602a36d391F7F16DD9f8386C3bD8D)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 */
export const cfaForwarderAddress = {
  1: '0xcfA132E353cB4E398080B9700609bb008eceB125',
  10: '0xcfA132E353cB4E398080B9700609bb008eceB125',
  56: '0xcfA132E353cB4E398080B9700609bb008eceB125',
  100: '0xcfA132E353cB4E398080B9700609bb008eceB125',
  137: '0xcfA132E353cB4E398080B9700609bb008eceB125',
  8453: '0xcfA132E353cB4E398080B9700609bb008eceB125',
  42161: '0xcfA132E353cB4E398080B9700609bb008eceB125',
  42220: '0xcfA132E353cB4E398080B9700609bb008eceB125',
  43113: '0x2CDd45c5182602a36d391F7F16DD9f8386C3bD8D',
  43114: '0xcfA132E353cB4E398080B9700609bb008eceB125',
  84532: '0xcfA132E353cB4E398080B9700609bb008eceB125',
  534351: '0xcfA132E353cB4E398080B9700609bb008eceB125',
  534352: '0xcfA132E353cB4E398080B9700609bb008eceB125',
  11155111: '0xcfA132E353cB4E398080B9700609bb008eceB125',
  11155420: '0xcfA132E353cB4E398080B9700609bb008eceB125',
  666666666: '0xcfA132E353cB4E398080B9700609bb008eceB125',
} as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x2CDd45c5182602a36d391F7F16DD9f8386C3bD8D)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 */
export const cfaForwarderConfig = {
  address: cfaForwarderAddress,
  abi: cfaForwarderAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// clearMacroForwarder
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 */
export const clearMacroForwarderAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'host', internalType: 'contract ISuperfluid', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'nonce', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'InvalidNonce',
  },
  {
    type: 'error',
    inputs: [{ name: 'message', internalType: 'string', type: 'string' }],
    name: 'InvalidPayload',
  },
  { type: 'error', inputs: [], name: 'InvalidShortString' },
  { type: 'error', inputs: [], name: 'InvalidSignature' },
  {
    type: 'error',
    inputs: [
      { name: 'signedMacro', internalType: 'address', type: 'address' },
      { name: 'executionMacro', internalType: 'address', type: 'address' },
    ],
    name: 'MacroContractMismatch',
  },
  {
    type: 'error',
    inputs: [
      { name: 'blockTimestamp', internalType: 'uint256', type: 'uint256' },
      { name: 'validAfter', internalType: 'uint256', type: 'uint256' },
      { name: 'validBefore', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'OutsideValidityWindow',
  },
  {
    type: 'error',
    inputs: [
      { name: 'provider', internalType: 'string', type: 'string' },
      { name: 'msgSender', internalType: 'address', type: 'address' },
    ],
    name: 'ProviderNotAuthorized',
  },
  {
    type: 'error',
    inputs: [{ name: 'token', internalType: 'address', type: 'address' }],
    name: 'SafeERC20FailedOperation',
  },
  {
    type: 'error',
    inputs: [{ name: 'str', internalType: 'string', type: 'string' }],
    name: 'StringTooLong',
  },
  { type: 'event', anonymous: false, inputs: [], name: 'EIP712DomainChanged' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'signer',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'macroContract',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'providerRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'MacroExecuted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'signer',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'underlying',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'superToken',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'underlyingAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'superTokenAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Permit2UpgradeExecuted',
  },
  {
    type: 'function',
    inputs: [],
    name: 'PERMIT2',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'SELF_PROVIDER',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'eip712Domain',
    outputs: [
      { name: 'fields', internalType: 'bytes1', type: 'bytes1' },
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'version', internalType: 'string', type: 'string' },
      { name: 'chainId', internalType: 'uint256', type: 'uint256' },
      { name: 'verifyingContract', internalType: 'address', type: 'address' },
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'extensions', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'actionParams', internalType: 'bytes', type: 'bytes' },
      {
        name: 'security',
        internalType: 'struct IClearMacroForwarderV1.Security',
        type: 'tuple',
        components: [
          { name: 'domain', internalType: 'string', type: 'string' },
          { name: 'macroContract', internalType: 'address', type: 'address' },
          { name: 'provider', internalType: 'string', type: 'string' },
          { name: 'validAfter', internalType: 'uint256', type: 'uint256' },
          { name: 'validBefore', internalType: 'uint256', type: 'uint256' },
          { name: 'nonce', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    name: 'encodeParams',
    outputs: [{ name: 'encodedPayload', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'm', internalType: 'contract IClearMacro', type: 'address' },
      { name: 'encodedPayload', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'getDigest',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'key', internalType: 'uint192', type: 'uint192' },
    ],
    name: 'getNonce',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'm', internalType: 'contract IClearMacro', type: 'address' },
      { name: 'encodedPayload', internalType: 'bytes', type: 'bytes' },
      { name: 'upgradeSuperToken', internalType: 'address', type: 'address' },
    ],
    name: 'getPermit2WitnessStructHash',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'm', internalType: 'contract IClearMacro', type: 'address' },
      { name: 'encodedPayload', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'getPermit2WitnessTypeString',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'm', internalType: 'contract IClearMacro', type: 'address' },
      { name: 'encodedPayload', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'getStructHash',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'm', internalType: 'contract IClearMacro', type: 'address' },
      { name: 'encodedPayload', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'getTypeDefinition',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'm', internalType: 'contract IClearMacro', type: 'address' },
      { name: 'encodedPayload', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'getTypeHash',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'm', internalType: 'contract IClearMacro', type: 'address' },
      { name: 'encodedPayload', internalType: 'bytes', type: 'bytes' },
      { name: 'signer', internalType: 'address', type: 'address' },
      { name: 'signature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'runMacro',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'permit2Context',
        internalType: 'struct IClearMacroPermit2Extension.Permit2Context',
        type: 'tuple',
        components: [
          {
            name: 'permit',
            internalType: 'struct IPermit2.PermitTransferFrom',
            type: 'tuple',
            components: [
              {
                name: 'permitted',
                internalType: 'struct IPermit2.TokenPermissions',
                type: 'tuple',
                components: [
                  { name: 'token', internalType: 'address', type: 'address' },
                  { name: 'amount', internalType: 'uint256', type: 'uint256' },
                ],
              },
              { name: 'nonce', internalType: 'uint256', type: 'uint256' },
              { name: 'deadline', internalType: 'uint256', type: 'uint256' },
            ],
          },
          { name: 'owner', internalType: 'address', type: 'address' },
          { name: 'witness', internalType: 'bytes32', type: 'bytes32' },
          { name: 'witnessTypeString', internalType: 'string', type: 'string' },
          { name: 'signature', internalType: 'bytes', type: 'bytes' },
          { name: 'spender', internalType: 'address', type: 'address' },
          {
            name: 'upgradeSuperToken',
            internalType: 'address',
            type: 'address',
          },
        ],
      },
      { name: 'm', internalType: 'contract IClearMacro', type: 'address' },
      { name: 'encodedPayload', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'runPermit2AndMacro',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'payable',
  },
  { type: 'error', inputs: [], name: 'ECDSAInvalidSignature' },
  {
    type: 'error',
    inputs: [{ name: 'length', internalType: 'uint256', type: 'uint256' }],
    name: 'ECDSAInvalidSignatureLength',
  },
  {
    type: 'error',
    inputs: [{ name: 's', internalType: 'bytes32', type: 'bytes32' }],
    name: 'ECDSAInvalidSignatureS',
  },
  { type: 'error', inputs: [], name: 'SF_TOKEN_AGREEMENT_ALREADY_EXISTS' },
  { type: 'error', inputs: [], name: 'SF_TOKEN_AGREEMENT_DOES_NOT_EXIST' },
  { type: 'error', inputs: [], name: 'SF_TOKEN_BURN_INSUFFICIENT_BALANCE' },
  { type: 'error', inputs: [], name: 'SF_TOKEN_MOVE_INSUFFICIENT_BALANCE' },
  { type: 'error', inputs: [], name: 'SF_TOKEN_ONLY_HOST' },
  { type: 'error', inputs: [], name: 'SF_TOKEN_ONLY_LISTED_AGREEMENT' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_APPROVE_FROM_ZERO_ADDRESS' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_APPROVE_TO_ZERO_ADDRESS' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_BURN_FROM_ZERO_ADDRESS' },
  {
    type: 'error',
    inputs: [],
    name: 'SUPER_TOKEN_CALLER_IS_NOT_OPERATOR_FOR_HOLDER',
  },
  {
    type: 'error',
    inputs: [],
    name: 'SUPER_TOKEN_INFLATIONARY_DEFLATIONARY_NOT_SUPPORTED',
  },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_MINT_TO_ZERO_ADDRESS' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_NFT_PROXY_ADDRESS_CHANGED' },
  {
    type: 'error',
    inputs: [],
    name: 'SUPER_TOKEN_NOT_ERC777_TOKENS_RECIPIENT',
  },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_NO_UNDERLYING_TOKEN' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_ONLY_ADMIN' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_ONLY_GOV_OWNER' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_ONLY_SELF' },
  {
    type: 'error',
    inputs: [{ name: 'deadline', internalType: 'uint256', type: 'uint256' }],
    name: 'SUPER_TOKEN_PERMIT_EXPIRED_SIGNATURE',
  },
  {
    type: 'error',
    inputs: [
      { name: 'signer', internalType: 'address', type: 'address' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'SUPER_TOKEN_PERMIT_INVALID_SIGNER',
  },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_TRANSFER_FROM_ZERO_ADDRESS' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_TRANSFER_TO_ZERO_ADDRESS' },
  {
    type: 'error',
    inputs: [{ name: 'value', internalType: 'int256', type: 'int256' }],
    name: 'SafeCastOverflowedIntToUint',
  },
  {
    type: 'error',
    inputs: [{ name: 'value', internalType: 'uint256', type: 'uint256' }],
    name: 'SafeCastOverflowedUintToInt',
  },
  { type: 'error', inputs: [], name: 'AGREEMENT_BASE_ONLY_HOST' },
  {
    type: 'error',
    inputs: [{ name: '_code', internalType: 'uint256', type: 'uint256' }],
    name: 'APP_RULE',
  },
  { type: 'error', inputs: [], name: 'CFA_ACL_FLOW_RATE_ALLOWANCE_EXCEEDED' },
  { type: 'error', inputs: [], name: 'CFA_ACL_NO_NEGATIVE_ALLOWANCE' },
  { type: 'error', inputs: [], name: 'CFA_ACL_NO_SENDER_CREATE' },
  { type: 'error', inputs: [], name: 'CFA_ACL_NO_SENDER_FLOW_OPERATOR' },
  { type: 'error', inputs: [], name: 'CFA_ACL_NO_SENDER_UPDATE' },
  { type: 'error', inputs: [], name: 'CFA_ACL_OPERATOR_NO_CREATE_PERMISSIONS' },
  { type: 'error', inputs: [], name: 'CFA_ACL_OPERATOR_NO_DELETE_PERMISSIONS' },
  { type: 'error', inputs: [], name: 'CFA_ACL_OPERATOR_NO_UPDATE_PERMISSIONS' },
  { type: 'error', inputs: [], name: 'CFA_ACL_UNCLEAN_PERMISSIONS' },
  { type: 'error', inputs: [], name: 'CFA_DEPOSIT_TOO_BIG' },
  { type: 'error', inputs: [], name: 'CFA_FLOW_ALREADY_EXISTS' },
  { type: 'error', inputs: [], name: 'CFA_FLOW_DOES_NOT_EXIST' },
  { type: 'error', inputs: [], name: 'CFA_FLOW_RATE_TOO_BIG' },
  { type: 'error', inputs: [], name: 'CFA_HOOK_OUT_OF_GAS' },
  { type: 'error', inputs: [], name: 'CFA_INSUFFICIENT_BALANCE' },
  { type: 'error', inputs: [], name: 'CFA_INVALID_FLOW_RATE' },
  { type: 'error', inputs: [], name: 'CFA_NON_CRITICAL_SENDER' },
  { type: 'error', inputs: [], name: 'CFA_NO_SELF_FLOW' },
  { type: 'error', inputs: [], name: 'CFA_ZERO_ADDRESS_RECEIVER' },
  { type: 'error', inputs: [], name: 'CFA_ZERO_ADDRESS_SENDER' },
  { type: 'error', inputs: [], name: 'GDA_ADMIN_CANNOT_BE_POOL' },
  { type: 'error', inputs: [], name: 'GDA_CANNOT_CONNECT_POOL' },
  { type: 'error', inputs: [], name: 'GDA_DISTRIBUTE_FOR_OTHERS_NOT_ALLOWED' },
  {
    type: 'error',
    inputs: [],
    name: 'GDA_DISTRIBUTE_FROM_ANY_ADDRESS_NOT_ALLOWED',
  },
  { type: 'error', inputs: [], name: 'GDA_FLOW_DOES_NOT_EXIST' },
  { type: 'error', inputs: [], name: 'GDA_INSUFFICIENT_BALANCE' },
  { type: 'error', inputs: [], name: 'GDA_NON_CRITICAL_SENDER' },
  { type: 'error', inputs: [], name: 'GDA_NOT_POOL_ADMIN' },
  { type: 'error', inputs: [], name: 'GDA_NO_NEGATIVE_FLOW_RATE' },
  { type: 'error', inputs: [], name: 'GDA_NO_ZERO_ADDRESS_ADMIN' },
  { type: 'error', inputs: [], name: 'GDA_ONLY_SUPER_TOKEN_POOL' },
  {
    type: 'error',
    inputs: [
      { name: 'bits', internalType: 'uint8', type: 'uint8' },
      { name: 'value', internalType: 'int256', type: 'int256' },
    ],
    name: 'SafeCastOverflowedIntDowncast',
  },
  {
    type: 'error',
    inputs: [
      { name: 'bits', internalType: 'uint8', type: 'uint8' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'SafeCastOverflowedUintDowncast',
  },
  { type: 'error', inputs: [], name: 'SUPERFLUID_POOL_INVALID_TIME' },
  { type: 'error', inputs: [], name: 'SUPERFLUID_POOL_NOT_GDA' },
  { type: 'error', inputs: [], name: 'SUPERFLUID_POOL_NOT_POOL_ADMIN_OR_GDA' },
  { type: 'error', inputs: [], name: 'SUPERFLUID_POOL_NO_POOL_MEMBERS' },
  { type: 'error', inputs: [], name: 'SUPERFLUID_POOL_NO_ZERO_ADDRESS' },
  {
    type: 'error',
    inputs: [],
    name: 'SUPERFLUID_POOL_SELF_TRANSFER_NOT_ALLOWED',
  },
  {
    type: 'error',
    inputs: [],
    name: 'SUPERFLUID_POOL_TRANSFER_UNITS_NOT_ALLOWED',
  },
  { type: 'error', inputs: [], name: 'HOST_AGREEMENT_ALREADY_REGISTERED' },
  { type: 'error', inputs: [], name: 'HOST_AGREEMENT_CALLBACK_IS_NOT_ACTION' },
  { type: 'error', inputs: [], name: 'HOST_AGREEMENT_IS_NOT_REGISTERED' },
  {
    type: 'error',
    inputs: [],
    name: 'HOST_CALL_AGREEMENT_WITH_CTX_FROM_WRONG_ADDRESS',
  },
  {
    type: 'error',
    inputs: [],
    name: 'HOST_CALL_APP_ACTION_WITH_CTX_FROM_WRONG_ADDRESS',
  },
  {
    type: 'error',
    inputs: [],
    name: 'HOST_CANNOT_DOWNGRADE_TO_NON_UPGRADEABLE',
  },
  { type: 'error', inputs: [], name: 'HOST_INVALID_CONFIG_WORD' },
  { type: 'error', inputs: [], name: 'HOST_MAX_256_AGREEMENTS' },
  { type: 'error', inputs: [], name: 'HOST_MUST_BE_CONTRACT' },
  { type: 'error', inputs: [], name: 'HOST_NEED_MORE_GAS' },
  { type: 'error', inputs: [], name: 'HOST_NON_UPGRADEABLE' },
  { type: 'error', inputs: [], name: 'HOST_NON_ZERO_LENGTH_PLACEHOLDER_CTX' },
  { type: 'error', inputs: [], name: 'HOST_NOT_A_SUPER_APP' },
  { type: 'error', inputs: [], name: 'HOST_NO_APP_REGISTRATION_PERMISSION' },
  { type: 'error', inputs: [], name: 'HOST_ONLY_GOVERNANCE' },
  { type: 'error', inputs: [], name: 'HOST_ONLY_LISTED_AGREEMENT' },
  { type: 'error', inputs: [], name: 'HOST_RECEIVER_IS_NOT_SUPER_APP' },
  { type: 'error', inputs: [], name: 'HOST_SENDER_IS_NOT_SUPER_APP' },
  { type: 'error', inputs: [], name: 'HOST_SOURCE_APP_NEEDS_HIGHER_APP_LEVEL' },
  { type: 'error', inputs: [], name: 'HOST_SUPER_APP_ALREADY_REGISTERED' },
  { type: 'error', inputs: [], name: 'HOST_SUPER_APP_IS_JAILED' },
  { type: 'error', inputs: [], name: 'HOST_UNKNOWN_BATCH_CALL_OPERATION_TYPE' },
  { type: 'error', inputs: [], name: 'IDA_INDEX_ALREADY_EXISTS' },
  { type: 'error', inputs: [], name: 'IDA_INDEX_DOES_NOT_EXIST' },
  { type: 'error', inputs: [], name: 'IDA_INDEX_SHOULD_GROW' },
  { type: 'error', inputs: [], name: 'IDA_INSUFFICIENT_BALANCE' },
  { type: 'error', inputs: [], name: 'IDA_OPERATION_NOT_ALLOWED' },
  { type: 'error', inputs: [], name: 'IDA_SUBSCRIPTION_ALREADY_APPROVED' },
  { type: 'error', inputs: [], name: 'IDA_SUBSCRIPTION_DOES_NOT_EXIST' },
  { type: 'error', inputs: [], name: 'IDA_SUBSCRIPTION_IS_NOT_APPROVED' },
  { type: 'error', inputs: [], name: 'IDA_ZERO_ADDRESS_SUBSCRIBER' },
] as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 */
export const clearMacroForwarderAddress = {
  1: '0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e',
  10: '0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e',
  56: '0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e',
  100: '0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e',
  137: '0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e',
  8453: '0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e',
  42161: '0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e',
  42220: '0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e',
  43113: '0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e',
  43114: '0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e',
  84532: '0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e',
  534351: '0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e',
  534352: '0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e',
  11155111: '0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e',
  11155420: '0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e',
  666666666: '0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e',
} as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 */
export const clearMacroForwarderConfig = {
  address: clearMacroForwarderAddress,
  abi: clearMacroForwarderAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// gdaForwarder
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 */
export const gdaForwarderAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'host', internalType: 'contract ISuperfluid', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract ISuperfluidPool',
        type: 'address',
      },
      { name: 'memberAddress', internalType: 'address', type: 'address' },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'claimAll',
    outputs: [{ name: 'success', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract ISuperfluidPool',
        type: 'address',
      },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'connectPool',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'admin', internalType: 'address', type: 'address' },
      {
        name: 'config',
        internalType: 'struct PoolConfig',
        type: 'tuple',
        components: [
          {
            name: 'transferabilityForUnitsOwner',
            internalType: 'bool',
            type: 'bool',
          },
          {
            name: 'distributionFromAnyAddress',
            internalType: 'bool',
            type: 'bool',
          },
        ],
      },
    ],
    name: 'createPool',
    outputs: [
      { name: 'success', internalType: 'bool', type: 'bool' },
      {
        name: 'pool',
        internalType: 'contract ISuperfluidPool',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract ISuperfluidPool',
        type: 'address',
      },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'disconnectPool',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'from', internalType: 'address', type: 'address' },
      {
        name: 'pool',
        internalType: 'contract ISuperfluidPool',
        type: 'address',
      },
      { name: 'requestedAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'distribute',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'from', internalType: 'address', type: 'address' },
      {
        name: 'pool',
        internalType: 'contract ISuperfluidPool',
        type: 'address',
      },
      { name: 'requestedFlowRate', internalType: 'int96', type: 'int96' },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'distributeFlow',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'contract ISuperfluidPool', type: 'address' },
      { name: 'requestedAmount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'estimateDistributionActualAmount',
    outputs: [
      { name: 'actualAmount', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'contract ISuperfluidPool', type: 'address' },
      { name: 'requestedFlowRate', internalType: 'int96', type: 'int96' },
    ],
    name: 'estimateFlowDistributionActualFlowRate',
    outputs: [
      { name: 'actualFlowRate', internalType: 'int96', type: 'int96' },
      {
        name: 'totalDistributionFlowRate',
        internalType: 'int96',
        type: 'int96',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'contract ISuperfluidPool', type: 'address' },
    ],
    name: 'getFlowDistributionFlowRate',
    outputs: [{ name: '', internalType: 'int96', type: 'int96' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'getNetFlow',
    outputs: [{ name: '', internalType: 'int96', type: 'int96' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract ISuperfluidPool',
        type: 'address',
      },
    ],
    name: 'getPoolAdjustmentFlowInfo',
    outputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'bytes32', type: 'bytes32' },
      { name: '', internalType: 'int96', type: 'int96' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'pool', internalType: 'address', type: 'address' }],
    name: 'getPoolAdjustmentFlowRate',
    outputs: [{ name: '', internalType: 'int96', type: 'int96' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract ISuperfluidPool',
        type: 'address',
      },
      { name: 'member', internalType: 'address', type: 'address' },
    ],
    name: 'isMemberConnected',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'isPool',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract ISuperfluidPool',
        type: 'address',
      },
      { name: 'memberAddress', internalType: 'address', type: 'address' },
      { name: 'newUnits', internalType: 'uint128', type: 'uint128' },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'updateMemberUnits',
    outputs: [{ name: 'success', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  { type: 'error', inputs: [], name: 'AGREEMENT_BASE_ONLY_HOST' },
  { type: 'error', inputs: [], name: 'GDA_ADMIN_CANNOT_BE_POOL' },
  { type: 'error', inputs: [], name: 'GDA_CANNOT_CONNECT_POOL' },
  { type: 'error', inputs: [], name: 'GDA_DISTRIBUTE_FOR_OTHERS_NOT_ALLOWED' },
  {
    type: 'error',
    inputs: [],
    name: 'GDA_DISTRIBUTE_FROM_ANY_ADDRESS_NOT_ALLOWED',
  },
  { type: 'error', inputs: [], name: 'GDA_FLOW_DOES_NOT_EXIST' },
  { type: 'error', inputs: [], name: 'GDA_INSUFFICIENT_BALANCE' },
  { type: 'error', inputs: [], name: 'GDA_NON_CRITICAL_SENDER' },
  { type: 'error', inputs: [], name: 'GDA_NOT_POOL_ADMIN' },
  { type: 'error', inputs: [], name: 'GDA_NO_NEGATIVE_FLOW_RATE' },
  { type: 'error', inputs: [], name: 'GDA_NO_ZERO_ADDRESS_ADMIN' },
  { type: 'error', inputs: [], name: 'GDA_ONLY_SUPER_TOKEN_POOL' },
  {
    type: 'error',
    inputs: [
      { name: 'bits', internalType: 'uint8', type: 'uint8' },
      { name: 'value', internalType: 'int256', type: 'int256' },
    ],
    name: 'SafeCastOverflowedIntDowncast',
  },
  {
    type: 'error',
    inputs: [{ name: 'value', internalType: 'int256', type: 'int256' }],
    name: 'SafeCastOverflowedIntToUint',
  },
  {
    type: 'error',
    inputs: [
      { name: 'bits', internalType: 'uint8', type: 'uint8' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'SafeCastOverflowedUintDowncast',
  },
  {
    type: 'error',
    inputs: [{ name: 'value', internalType: 'uint256', type: 'uint256' }],
    name: 'SafeCastOverflowedUintToInt',
  },
  { type: 'error', inputs: [], name: 'SUPERFLUID_POOL_INVALID_TIME' },
  { type: 'error', inputs: [], name: 'SUPERFLUID_POOL_NOT_GDA' },
  { type: 'error', inputs: [], name: 'SUPERFLUID_POOL_NOT_POOL_ADMIN_OR_GDA' },
  { type: 'error', inputs: [], name: 'SUPERFLUID_POOL_NO_POOL_MEMBERS' },
  { type: 'error', inputs: [], name: 'SUPERFLUID_POOL_NO_ZERO_ADDRESS' },
  {
    type: 'error',
    inputs: [],
    name: 'SUPERFLUID_POOL_SELF_TRANSFER_NOT_ALLOWED',
  },
  {
    type: 'error',
    inputs: [],
    name: 'SUPERFLUID_POOL_TRANSFER_UNITS_NOT_ALLOWED',
  },
  { type: 'error', inputs: [], name: 'ECDSAInvalidSignature' },
  {
    type: 'error',
    inputs: [{ name: 'length', internalType: 'uint256', type: 'uint256' }],
    name: 'ECDSAInvalidSignatureLength',
  },
  {
    type: 'error',
    inputs: [{ name: 's', internalType: 'bytes32', type: 'bytes32' }],
    name: 'ECDSAInvalidSignatureS',
  },
  { type: 'error', inputs: [], name: 'SF_TOKEN_AGREEMENT_ALREADY_EXISTS' },
  { type: 'error', inputs: [], name: 'SF_TOKEN_AGREEMENT_DOES_NOT_EXIST' },
  { type: 'error', inputs: [], name: 'SF_TOKEN_BURN_INSUFFICIENT_BALANCE' },
  { type: 'error', inputs: [], name: 'SF_TOKEN_MOVE_INSUFFICIENT_BALANCE' },
  { type: 'error', inputs: [], name: 'SF_TOKEN_ONLY_HOST' },
  { type: 'error', inputs: [], name: 'SF_TOKEN_ONLY_LISTED_AGREEMENT' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_APPROVE_FROM_ZERO_ADDRESS' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_APPROVE_TO_ZERO_ADDRESS' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_BURN_FROM_ZERO_ADDRESS' },
  {
    type: 'error',
    inputs: [],
    name: 'SUPER_TOKEN_CALLER_IS_NOT_OPERATOR_FOR_HOLDER',
  },
  {
    type: 'error',
    inputs: [],
    name: 'SUPER_TOKEN_INFLATIONARY_DEFLATIONARY_NOT_SUPPORTED',
  },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_MINT_TO_ZERO_ADDRESS' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_NFT_PROXY_ADDRESS_CHANGED' },
  {
    type: 'error',
    inputs: [],
    name: 'SUPER_TOKEN_NOT_ERC777_TOKENS_RECIPIENT',
  },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_NO_UNDERLYING_TOKEN' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_ONLY_ADMIN' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_ONLY_GOV_OWNER' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_ONLY_SELF' },
  {
    type: 'error',
    inputs: [{ name: 'deadline', internalType: 'uint256', type: 'uint256' }],
    name: 'SUPER_TOKEN_PERMIT_EXPIRED_SIGNATURE',
  },
  {
    type: 'error',
    inputs: [
      { name: 'signer', internalType: 'address', type: 'address' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'SUPER_TOKEN_PERMIT_INVALID_SIGNER',
  },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_TRANSFER_FROM_ZERO_ADDRESS' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_TRANSFER_TO_ZERO_ADDRESS' },
  {
    type: 'error',
    inputs: [{ name: 'token', internalType: 'address', type: 'address' }],
    name: 'SafeERC20FailedOperation',
  },
] as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 */
export const gdaForwarderAddress = {
  1: '0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08',
  10: '0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08',
  56: '0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08',
  100: '0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08',
  137: '0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08',
  8453: '0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08',
  42161: '0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08',
  42220: '0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08',
  43113: '0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08',
  43114: '0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08',
  84532: '0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08',
  534351: '0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08',
  534352: '0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08',
  11155111: '0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08',
  11155420: '0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08',
  666666666: '0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08',
} as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 */
export const gdaForwarderConfig = {
  address: gdaForwarderAddress,
  abi: gdaForwarderAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// gdaPool
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const gdaPoolAbi = [
  {
    type: 'constructor',
    inputs: [
      {
        name: 'gda',
        internalType: 'contract GeneralDistributionAgreementV1',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
  },
  { type: 'error', inputs: [], name: 'SUPERFLUID_POOL_INVALID_TIME' },
  { type: 'error', inputs: [], name: 'SUPERFLUID_POOL_NOT_GDA' },
  { type: 'error', inputs: [], name: 'SUPERFLUID_POOL_NOT_POOL_ADMIN_OR_GDA' },
  { type: 'error', inputs: [], name: 'SUPERFLUID_POOL_NO_POOL_MEMBERS' },
  { type: 'error', inputs: [], name: 'SUPERFLUID_POOL_NO_ZERO_ADDRESS' },
  {
    type: 'error',
    inputs: [],
    name: 'SUPERFLUID_POOL_SELF_TRANSFER_NOT_ALLOWED',
  },
  {
    type: 'error',
    inputs: [],
    name: 'SUPERFLUID_POOL_TRANSFER_UNITS_NOT_ALLOWED',
  },
  {
    type: 'error',
    inputs: [
      { name: 'bits', internalType: 'uint8', type: 'uint8' },
      { name: 'value', internalType: 'int256', type: 'int256' },
    ],
    name: 'SafeCastOverflowedIntDowncast',
  },
  {
    type: 'error',
    inputs: [{ name: 'value', internalType: 'int256', type: 'int256' }],
    name: 'SafeCastOverflowedIntToUint',
  },
  {
    type: 'error',
    inputs: [
      { name: 'bits', internalType: 'uint8', type: 'uint8' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'SafeCastOverflowedUintDowncast',
  },
  {
    type: 'error',
    inputs: [{ name: 'value', internalType: 'uint256', type: 'uint256' }],
    name: 'SafeCastOverflowedUintToInt',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
        indexed: true,
      },
      {
        name: 'member',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'claimedAmount',
        internalType: 'int256',
        type: 'int256',
        indexed: false,
      },
      {
        name: 'totalClaimed',
        internalType: 'int256',
        type: 'int256',
        indexed: false,
      },
    ],
    name: 'DistributionClaimed',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'version', internalType: 'uint8', type: 'uint8', indexed: false },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
        indexed: true,
      },
      {
        name: 'member',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'oldUnits',
        internalType: 'uint128',
        type: 'uint128',
        indexed: false,
      },
      {
        name: 'newUnits',
        internalType: 'uint128',
        type: 'uint128',
        indexed: false,
      },
    ],
    name: 'MemberUnitsUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [],
    name: 'GDA',
    outputs: [
      {
        name: '',
        internalType: 'contract GeneralDistributionAgreementV1',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'admin',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'castrate',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'memberAddr', internalType: 'address', type: 'address' }],
    name: 'claimAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'claimAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'subtractedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'decreaseAllowance',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'memberAddr', internalType: 'address', type: 'address' },
      { name: 'subtractedUnits', internalType: 'uint128', type: 'uint128' },
    ],
    name: 'decreaseMemberUnits',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'distributionFromAnyAddress',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'memberAddr', internalType: 'address', type: 'address' },
      { name: 'time', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'getClaimable',
    outputs: [{ name: '', internalType: 'int256', type: 'int256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'memberAddr', internalType: 'address', type: 'address' }],
    name: 'getClaimableNow',
    outputs: [
      { name: 'claimableBalance', internalType: 'int256', type: 'int256' },
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'time', internalType: 'uint32', type: 'uint32' }],
    name: 'getDisconnectedBalance',
    outputs: [{ name: 'balance', internalType: 'int256', type: 'int256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'memberAddr', internalType: 'address', type: 'address' }],
    name: 'getMemberFlowRate',
    outputs: [{ name: '', internalType: 'int96', type: 'int96' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'memberAddr', internalType: 'address', type: 'address' }],
    name: 'getTotalAmountReceivedByMember',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getTotalConnectedFlowRate',
    outputs: [{ name: '', internalType: 'int96', type: 'int96' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getTotalConnectedUnits',
    outputs: [{ name: '', internalType: 'uint128', type: 'uint128' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getTotalDisconnectedFlowRate',
    outputs: [{ name: 'flowRate', internalType: 'int96', type: 'int96' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getTotalDisconnectedUnits',
    outputs: [{ name: '', internalType: 'uint128', type: 'uint128' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getTotalFlowRate',
    outputs: [{ name: '', internalType: 'int96', type: 'int96' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getTotalUnits',
    outputs: [{ name: '', internalType: 'uint128', type: 'uint128' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'memberAddr', internalType: 'address', type: 'address' }],
    name: 'getUnits',
    outputs: [{ name: '', internalType: 'uint128', type: 'uint128' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'memberAddr', internalType: 'address', type: 'address' },
      { name: 'time', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'getUnsettledValue',
    outputs: [{ name: '', internalType: 'int256', type: 'int256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'addedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'increaseAllowance',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'memberAddr', internalType: 'address', type: 'address' },
      { name: 'addedUnits', internalType: 'uint128', type: 'uint128' },
    ],
    name: 'increaseMemberUnits',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'admin_', internalType: 'address', type: 'address' },
      {
        name: 'superToken_',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      {
        name: 'transferabilityForUnitsOwner_',
        internalType: 'bool',
        type: 'bool',
      },
      {
        name: 'distributionFromAnyAddress_',
        internalType: 'bool',
        type: 'bool',
      },
      { name: 'erc20Name_', internalType: 'string', type: 'string' },
      { name: 'erc20Symbol_', internalType: 'string', type: 'string' },
      { name: 'erc20Decimals_', internalType: 'uint8', type: 'uint8' },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'memberAddr', internalType: 'address', type: 'address' },
      { name: 'doConnect', internalType: 'bool', type: 'bool' },
      { name: 'time', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'operatorConnectMember',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'index',
        internalType: 'struct PDPoolIndex',
        type: 'tuple',
        components: [
          { name: 'total_units', internalType: 'Unit', type: 'int128' },
          {
            name: '_wrapped_particle',
            internalType: 'struct BasicParticle',
            type: 'tuple',
            components: [
              { name: '_settled_at', internalType: 'Time', type: 'uint32' },
              { name: '_flow_rate', internalType: 'FlowRate', type: 'int128' },
              { name: '_settled_value', internalType: 'Value', type: 'int256' },
            ],
          },
        ],
      },
    ],
    name: 'operatorSetIndex',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'poolOperatorGetIndex',
    outputs: [
      {
        name: '',
        internalType: 'struct SuperfluidPool.PoolIndexData',
        type: 'tuple',
        components: [
          { name: 'totalUnits', internalType: 'uint128', type: 'uint128' },
          { name: 'wrappedSettledAt', internalType: 'uint32', type: 'uint32' },
          { name: 'wrappedFlowRate', internalType: 'int96', type: 'int96' },
          {
            name: 'wrappedSettledValue',
            internalType: 'int256',
            type: 'int256',
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'proxiableUUID',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'superToken',
    outputs: [
      { name: '', internalType: 'contract ISuperfluidToken', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'transferabilityForUnitsOwner',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'memberAddr', internalType: 'address', type: 'address' },
      { name: 'newUnits', internalType: 'uint128', type: 'uint128' },
    ],
    name: 'updateMemberUnits',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// superToken
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const superTokenAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'host', internalType: 'contract ISuperfluid', type: 'address' },
      {
        name: 'poolAdminNFT',
        internalType: 'contract IPoolAdminNFT',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
  },
  { type: 'error', inputs: [], name: 'ECDSAInvalidSignature' },
  {
    type: 'error',
    inputs: [{ name: 'length', internalType: 'uint256', type: 'uint256' }],
    name: 'ECDSAInvalidSignatureLength',
  },
  {
    type: 'error',
    inputs: [{ name: 's', internalType: 'bytes32', type: 'bytes32' }],
    name: 'ECDSAInvalidSignatureS',
  },
  { type: 'error', inputs: [], name: 'SF_TOKEN_AGREEMENT_ALREADY_EXISTS' },
  { type: 'error', inputs: [], name: 'SF_TOKEN_AGREEMENT_DOES_NOT_EXIST' },
  { type: 'error', inputs: [], name: 'SF_TOKEN_BURN_INSUFFICIENT_BALANCE' },
  { type: 'error', inputs: [], name: 'SF_TOKEN_MOVE_INSUFFICIENT_BALANCE' },
  { type: 'error', inputs: [], name: 'SF_TOKEN_ONLY_HOST' },
  { type: 'error', inputs: [], name: 'SF_TOKEN_ONLY_LISTED_AGREEMENT' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_APPROVE_FROM_ZERO_ADDRESS' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_APPROVE_TO_ZERO_ADDRESS' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_BURN_FROM_ZERO_ADDRESS' },
  {
    type: 'error',
    inputs: [],
    name: 'SUPER_TOKEN_CALLER_IS_NOT_OPERATOR_FOR_HOLDER',
  },
  {
    type: 'error',
    inputs: [],
    name: 'SUPER_TOKEN_INFLATIONARY_DEFLATIONARY_NOT_SUPPORTED',
  },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_MINT_TO_ZERO_ADDRESS' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_NFT_PROXY_ADDRESS_CHANGED' },
  {
    type: 'error',
    inputs: [],
    name: 'SUPER_TOKEN_NOT_ERC777_TOKENS_RECIPIENT',
  },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_NO_UNDERLYING_TOKEN' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_ONLY_ADMIN' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_ONLY_GOV_OWNER' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_ONLY_SELF' },
  {
    type: 'error',
    inputs: [{ name: 'deadline', internalType: 'uint256', type: 'uint256' }],
    name: 'SUPER_TOKEN_PERMIT_EXPIRED_SIGNATURE',
  },
  {
    type: 'error',
    inputs: [
      { name: 'signer', internalType: 'address', type: 'address' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'SUPER_TOKEN_PERMIT_INVALID_SIGNER',
  },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_TRANSFER_FROM_ZERO_ADDRESS' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_TRANSFER_TO_ZERO_ADDRESS' },
  {
    type: 'error',
    inputs: [{ name: 'value', internalType: 'int256', type: 'int256' }],
    name: 'SafeCastOverflowedIntToUint',
  },
  {
    type: 'error',
    inputs: [{ name: 'value', internalType: 'uint256', type: 'uint256' }],
    name: 'SafeCastOverflowedUintToInt',
  },
  {
    type: 'error',
    inputs: [{ name: 'token', internalType: 'address', type: 'address' }],
    name: 'SafeERC20FailedOperation',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldAdmin',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newAdmin',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'AdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'agreementClass',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'id', internalType: 'bytes32', type: 'bytes32', indexed: false },
      {
        name: 'data',
        internalType: 'bytes32[]',
        type: 'bytes32[]',
        indexed: false,
      },
    ],
    name: 'AgreementCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'agreementClass',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'id', internalType: 'bytes32', type: 'bytes32', indexed: false },
      {
        name: 'penaltyAccount',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'rewardAccount',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'rewardAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'AgreementLiquidated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'liquidatorAccount',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'agreementClass',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'id', internalType: 'bytes32', type: 'bytes32', indexed: false },
      {
        name: 'penaltyAccount',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'bondAccount',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'rewardAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'bailoutAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'AgreementLiquidatedBy',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'agreementClass',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'id', internalType: 'bytes32', type: 'bytes32', indexed: false },
      {
        name: 'liquidatorAccount',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'targetAccount',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'rewardAmountReceiver',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'rewardAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'targetAccountBalanceDelta',
        internalType: 'int256',
        type: 'int256',
        indexed: false,
      },
      {
        name: 'liquidationTypeData',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
    ],
    name: 'AgreementLiquidatedV2',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'agreementClass',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'slotId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'AgreementStateUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'agreementClass',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'id', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'AgreementTerminated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'agreementClass',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'id', internalType: 'bytes32', type: 'bytes32', indexed: false },
      {
        name: 'data',
        internalType: 'bytes32[]',
        type: 'bytes32[]',
        indexed: false,
      },
    ],
    name: 'AgreementUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenHolder',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'AuthorizedOperator',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'bailoutAccount',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'bailoutAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Bailout',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'data', internalType: 'bytes', type: 'bytes', indexed: false },
      {
        name: 'operatorData',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
    ],
    name: 'Burned',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'uuid',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'codeAddress',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'CodeUpdated',
  },
  { type: 'event', anonymous: false, inputs: [], name: 'EIP712DomainChanged' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'version', internalType: 'uint8', type: 'uint8', indexed: false },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'data', internalType: 'bytes', type: 'bytes', indexed: false },
      {
        name: 'operatorData',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
    ],
    name: 'Minted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'poolAdminNFT',
        internalType: 'contract IPoolAdminNFT',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'PoolAdminNFTCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenHolder',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RevokedOperator',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'data', internalType: 'bytes', type: 'bytes', indexed: false },
      {
        name: 'operatorData',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
    ],
    name: 'Sent',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'TokenDowngraded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'TokenUpgraded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'yieldBackend',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'YieldBackendDisabled',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'yieldBackend',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'depositAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'YieldBackendEnabled',
  },
  {
    type: 'function',
    inputs: [],
    name: 'DOMAIN_SEPARATOR',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'POOL_ADMIN_NFT',
    outputs: [
      { name: '', internalType: 'contract IPoolAdminNFT', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'POOL_MEMBER_NFT',
    outputs: [
      { name: '', internalType: 'contract IPoolMemberNFT', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'VERSION',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'authorizeOperator',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'burn',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'castrate',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newAdmin', internalType: 'address', type: 'address' }],
    name: 'changeAdmin',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'id', internalType: 'bytes32', type: 'bytes32' },
      { name: 'data', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    name: 'createAgreement',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'subtractedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'decreaseAllowance',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'defaultOperators',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'disableYieldBackend',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    name: 'downgrade',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'downgradeTo',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'eip712Domain',
    outputs: [
      { name: 'fields', internalType: 'bytes1', type: 'bytes1' },
      { name: '', internalType: 'string', type: 'string' },
      { name: 'version', internalType: 'string', type: 'string' },
      { name: 'chainId', internalType: 'uint256', type: 'uint256' },
      { name: 'verifyingContract', internalType: 'address', type: 'address' },
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'extensions', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'newYieldBackend',
        internalType: 'contract IYieldBackend',
        type: 'address',
      },
    ],
    name: 'enableYieldBackend',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'getAccountActiveAgreements',
    outputs: [
      {
        name: '',
        internalType: 'contract ISuperAgreement[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getAdmin',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'agreementClass', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'bytes32', type: 'bytes32' },
      { name: 'dataLength', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getAgreementData',
    outputs: [{ name: 'data', internalType: 'bytes32[]', type: 'bytes32[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'agreementClass', internalType: 'address', type: 'address' },
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'slotId', internalType: 'uint256', type: 'uint256' },
      { name: 'dataLength', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getAgreementStateSlot',
    outputs: [
      { name: 'slotData', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCodeAddress',
    outputs: [
      { name: 'codeAddress', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getHost',
    outputs: [{ name: 'host', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getUnderlyingDecimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getUnderlyingToken',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getYieldBackend',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'granularity',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'addedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'increaseAllowance',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'underlyingToken',
        internalType: 'contract IERC20',
        type: 'address',
      },
      { name: 'underlyingDecimals', internalType: 'uint8', type: 'uint8' },
      { name: 'n', internalType: 'string', type: 'string' },
      { name: 's', internalType: 'string', type: 'string' },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'underlyingToken',
        internalType: 'contract IERC20',
        type: 'address',
      },
      { name: 'underlyingDecimals', internalType: 'uint8', type: 'uint8' },
      { name: 'n', internalType: 'string', type: 'string' },
      { name: 's', internalType: 'string', type: 'string' },
      { name: 'admin', internalType: 'address', type: 'address' },
    ],
    name: 'initializeWithAdmin',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'isAccountCritical',
    outputs: [{ name: 'isCritical', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'isAccountCriticalNow',
    outputs: [{ name: 'isCritical', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'isAccountSolvent',
    outputs: [{ name: 'isSolvent', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'isAccountSolventNow',
    outputs: [{ name: 'isSolvent', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenHolder', internalType: 'address', type: 'address' },
    ],
    name: 'isOperatorFor',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'id', internalType: 'bytes32', type: 'bytes32' },
      { name: 'liquidationTypeData', internalType: 'bytes', type: 'bytes' },
      { name: 'liquidatorAccount', internalType: 'address', type: 'address' },
      { name: 'useDefaultRewardAccount', internalType: 'bool', type: 'bool' },
      { name: 'targetAccount', internalType: 'address', type: 'address' },
      { name: 'rewardAmount', internalType: 'uint256', type: 'uint256' },
      {
        name: 'targetAccountBalanceDelta',
        internalType: 'int256',
        type: 'int256',
      },
    ],
    name: 'makeLiquidationPayoutsV2',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'nonces',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'operationApprove',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'subtractedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'operationDecreaseAllowance',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'operationDowngrade',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'operationDowngradeTo',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'addedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'operationIncreaseAllowance',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'operationSend',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'operationTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'operationUpgrade',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'operationUpgradeTo',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
      { name: 'operatorData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'operatorBurn',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
      { name: 'operatorData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'operatorSend',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'permit',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'proxiableUUID',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'realtimeBalanceOf',
    outputs: [
      { name: 'availableBalance', internalType: 'int256', type: 'int256' },
      { name: 'deposit', internalType: 'uint256', type: 'uint256' },
      { name: 'owedDeposit', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'realtimeBalanceOfNow',
    outputs: [
      { name: 'availableBalance', internalType: 'int256', type: 'int256' },
      { name: 'deposit', internalType: 'uint256', type: 'uint256' },
      { name: 'owedDeposit', internalType: 'uint256', type: 'uint256' },
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'revokeOperator',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'selfApproveFor',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'selfBurn',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'selfMint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'holder', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'selfTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'send',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'delta', internalType: 'int256', type: 'int256' },
    ],
    name: 'settleBalance',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'id', internalType: 'bytes32', type: 'bytes32' },
      { name: 'dataLength', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'terminateAgreement',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    name: 'toUnderlyingAmount',
    outputs: [
      { name: 'underlyingAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'adjustedAmount', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'recipient', internalType: 'address', type: 'address' }],
    name: 'transferAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'holder', internalType: 'address', type: 'address' },
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'id', internalType: 'bytes32', type: 'bytes32' },
      { name: 'data', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    name: 'updateAgreementData',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'slotId', internalType: 'uint256', type: 'uint256' },
      { name: 'slotData', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    name: 'updateAgreementStateSlot',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newAddress', internalType: 'address', type: 'address' }],
    name: 'updateCode',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    name: 'upgrade',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'upgradeTo',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'withdrawSurplusFromYieldBackend',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'wad', internalType: 'uint256', type: 'uint256' }],
    name: 'downgradeToETH',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'upgradeByETH',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: 'to', internalType: 'address', type: 'address' }],
    name: 'upgradeByETHTo',
    outputs: [],
    stateMutability: 'payable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Action
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link blindMacroForwarderAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 */
export const readBlindMacroForwarder = /*#__PURE__*/ createReadContract({
  abi: blindMacroForwarderAbi,
  address: blindMacroForwarderAddress,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link blindMacroForwarderAbi}__ and `functionName` set to `"buildBatchOperations"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 */
export const readBlindMacroForwarderBuildBatchOperations =
  /*#__PURE__*/ createReadContract({
    abi: blindMacroForwarderAbi,
    address: blindMacroForwarderAddress,
    functionName: 'buildBatchOperations',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link blindMacroForwarderAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 */
export const writeBlindMacroForwarder = /*#__PURE__*/ createWriteContract({
  abi: blindMacroForwarderAbi,
  address: blindMacroForwarderAddress,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link blindMacroForwarderAbi}__ and `functionName` set to `"runMacro"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 */
export const writeBlindMacroForwarderRunMacro =
  /*#__PURE__*/ createWriteContract({
    abi: blindMacroForwarderAbi,
    address: blindMacroForwarderAddress,
    functionName: 'runMacro',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link blindMacroForwarderAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 */
export const simulateBlindMacroForwarder = /*#__PURE__*/ createSimulateContract(
  { abi: blindMacroForwarderAbi, address: blindMacroForwarderAddress },
)

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link blindMacroForwarderAbi}__ and `functionName` set to `"runMacro"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 */
export const simulateBlindMacroForwarderRunMacro =
  /*#__PURE__*/ createSimulateContract({
    abi: blindMacroForwarderAbi,
    address: blindMacroForwarderAddress,
    functionName: 'runMacro',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link blindMacroForwarderAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 */
export const watchBlindMacroForwarderEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: blindMacroForwarderAbi,
    address: blindMacroForwarderAddress,
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link blindMacroForwarderAbi}__ and `eventName` set to `"MacroExecuted"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xFD0268E33111565dE546af2675351A4b1587F89F)
 */
export const watchBlindMacroForwarderMacroExecutedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: blindMacroForwarderAbi,
    address: blindMacroForwarderAddress,
    eventName: 'MacroExecuted',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link cfaForwarderAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x2CDd45c5182602a36d391F7F16DD9f8386C3bD8D)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 */
export const readCfaForwarder = /*#__PURE__*/ createReadContract({
  abi: cfaForwarderAbi,
  address: cfaForwarderAddress,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link cfaForwarderAbi}__ and `functionName` set to `"getAccountFlowInfo"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x2CDd45c5182602a36d391F7F16DD9f8386C3bD8D)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 */
export const readCfaForwarderGetAccountFlowInfo =
  /*#__PURE__*/ createReadContract({
    abi: cfaForwarderAbi,
    address: cfaForwarderAddress,
    functionName: 'getAccountFlowInfo',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link cfaForwarderAbi}__ and `functionName` set to `"getAccountFlowrate"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x2CDd45c5182602a36d391F7F16DD9f8386C3bD8D)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 */
export const readCfaForwarderGetAccountFlowrate =
  /*#__PURE__*/ createReadContract({
    abi: cfaForwarderAbi,
    address: cfaForwarderAddress,
    functionName: 'getAccountFlowrate',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link cfaForwarderAbi}__ and `functionName` set to `"getBufferAmountByFlowrate"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x2CDd45c5182602a36d391F7F16DD9f8386C3bD8D)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 */
export const readCfaForwarderGetBufferAmountByFlowrate =
  /*#__PURE__*/ createReadContract({
    abi: cfaForwarderAbi,
    address: cfaForwarderAddress,
    functionName: 'getBufferAmountByFlowrate',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link cfaForwarderAbi}__ and `functionName` set to `"getFlowInfo"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x2CDd45c5182602a36d391F7F16DD9f8386C3bD8D)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 */
export const readCfaForwarderGetFlowInfo = /*#__PURE__*/ createReadContract({
  abi: cfaForwarderAbi,
  address: cfaForwarderAddress,
  functionName: 'getFlowInfo',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link cfaForwarderAbi}__ and `functionName` set to `"getFlowOperatorPermissions"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x2CDd45c5182602a36d391F7F16DD9f8386C3bD8D)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 */
export const readCfaForwarderGetFlowOperatorPermissions =
  /*#__PURE__*/ createReadContract({
    abi: cfaForwarderAbi,
    address: cfaForwarderAddress,
    functionName: 'getFlowOperatorPermissions',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link cfaForwarderAbi}__ and `functionName` set to `"getFlowrate"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x2CDd45c5182602a36d391F7F16DD9f8386C3bD8D)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 */
export const readCfaForwarderGetFlowrate = /*#__PURE__*/ createReadContract({
  abi: cfaForwarderAbi,
  address: cfaForwarderAddress,
  functionName: 'getFlowrate',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link cfaForwarderAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x2CDd45c5182602a36d391F7F16DD9f8386C3bD8D)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 */
export const writeCfaForwarder = /*#__PURE__*/ createWriteContract({
  abi: cfaForwarderAbi,
  address: cfaForwarderAddress,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link cfaForwarderAbi}__ and `functionName` set to `"createFlow"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x2CDd45c5182602a36d391F7F16DD9f8386C3bD8D)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 */
export const writeCfaForwarderCreateFlow = /*#__PURE__*/ createWriteContract({
  abi: cfaForwarderAbi,
  address: cfaForwarderAddress,
  functionName: 'createFlow',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link cfaForwarderAbi}__ and `functionName` set to `"deleteFlow"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x2CDd45c5182602a36d391F7F16DD9f8386C3bD8D)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 */
export const writeCfaForwarderDeleteFlow = /*#__PURE__*/ createWriteContract({
  abi: cfaForwarderAbi,
  address: cfaForwarderAddress,
  functionName: 'deleteFlow',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link cfaForwarderAbi}__ and `functionName` set to `"grantPermissions"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x2CDd45c5182602a36d391F7F16DD9f8386C3bD8D)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 */
export const writeCfaForwarderGrantPermissions =
  /*#__PURE__*/ createWriteContract({
    abi: cfaForwarderAbi,
    address: cfaForwarderAddress,
    functionName: 'grantPermissions',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link cfaForwarderAbi}__ and `functionName` set to `"revokePermissions"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x2CDd45c5182602a36d391F7F16DD9f8386C3bD8D)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 */
export const writeCfaForwarderRevokePermissions =
  /*#__PURE__*/ createWriteContract({
    abi: cfaForwarderAbi,
    address: cfaForwarderAddress,
    functionName: 'revokePermissions',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link cfaForwarderAbi}__ and `functionName` set to `"setFlowrate"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x2CDd45c5182602a36d391F7F16DD9f8386C3bD8D)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 */
export const writeCfaForwarderSetFlowrate = /*#__PURE__*/ createWriteContract({
  abi: cfaForwarderAbi,
  address: cfaForwarderAddress,
  functionName: 'setFlowrate',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link cfaForwarderAbi}__ and `functionName` set to `"setFlowrateFrom"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x2CDd45c5182602a36d391F7F16DD9f8386C3bD8D)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 */
export const writeCfaForwarderSetFlowrateFrom =
  /*#__PURE__*/ createWriteContract({
    abi: cfaForwarderAbi,
    address: cfaForwarderAddress,
    functionName: 'setFlowrateFrom',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link cfaForwarderAbi}__ and `functionName` set to `"updateFlow"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x2CDd45c5182602a36d391F7F16DD9f8386C3bD8D)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 */
export const writeCfaForwarderUpdateFlow = /*#__PURE__*/ createWriteContract({
  abi: cfaForwarderAbi,
  address: cfaForwarderAddress,
  functionName: 'updateFlow',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link cfaForwarderAbi}__ and `functionName` set to `"updateFlowOperatorPermissions"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x2CDd45c5182602a36d391F7F16DD9f8386C3bD8D)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 */
export const writeCfaForwarderUpdateFlowOperatorPermissions =
  /*#__PURE__*/ createWriteContract({
    abi: cfaForwarderAbi,
    address: cfaForwarderAddress,
    functionName: 'updateFlowOperatorPermissions',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link cfaForwarderAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x2CDd45c5182602a36d391F7F16DD9f8386C3bD8D)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 */
export const simulateCfaForwarder = /*#__PURE__*/ createSimulateContract({
  abi: cfaForwarderAbi,
  address: cfaForwarderAddress,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link cfaForwarderAbi}__ and `functionName` set to `"createFlow"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x2CDd45c5182602a36d391F7F16DD9f8386C3bD8D)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 */
export const simulateCfaForwarderCreateFlow =
  /*#__PURE__*/ createSimulateContract({
    abi: cfaForwarderAbi,
    address: cfaForwarderAddress,
    functionName: 'createFlow',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link cfaForwarderAbi}__ and `functionName` set to `"deleteFlow"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x2CDd45c5182602a36d391F7F16DD9f8386C3bD8D)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 */
export const simulateCfaForwarderDeleteFlow =
  /*#__PURE__*/ createSimulateContract({
    abi: cfaForwarderAbi,
    address: cfaForwarderAddress,
    functionName: 'deleteFlow',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link cfaForwarderAbi}__ and `functionName` set to `"grantPermissions"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x2CDd45c5182602a36d391F7F16DD9f8386C3bD8D)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 */
export const simulateCfaForwarderGrantPermissions =
  /*#__PURE__*/ createSimulateContract({
    abi: cfaForwarderAbi,
    address: cfaForwarderAddress,
    functionName: 'grantPermissions',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link cfaForwarderAbi}__ and `functionName` set to `"revokePermissions"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x2CDd45c5182602a36d391F7F16DD9f8386C3bD8D)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 */
export const simulateCfaForwarderRevokePermissions =
  /*#__PURE__*/ createSimulateContract({
    abi: cfaForwarderAbi,
    address: cfaForwarderAddress,
    functionName: 'revokePermissions',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link cfaForwarderAbi}__ and `functionName` set to `"setFlowrate"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x2CDd45c5182602a36d391F7F16DD9f8386C3bD8D)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 */
export const simulateCfaForwarderSetFlowrate =
  /*#__PURE__*/ createSimulateContract({
    abi: cfaForwarderAbi,
    address: cfaForwarderAddress,
    functionName: 'setFlowrate',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link cfaForwarderAbi}__ and `functionName` set to `"setFlowrateFrom"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x2CDd45c5182602a36d391F7F16DD9f8386C3bD8D)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 */
export const simulateCfaForwarderSetFlowrateFrom =
  /*#__PURE__*/ createSimulateContract({
    abi: cfaForwarderAbi,
    address: cfaForwarderAddress,
    functionName: 'setFlowrateFrom',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link cfaForwarderAbi}__ and `functionName` set to `"updateFlow"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x2CDd45c5182602a36d391F7F16DD9f8386C3bD8D)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 */
export const simulateCfaForwarderUpdateFlow =
  /*#__PURE__*/ createSimulateContract({
    abi: cfaForwarderAbi,
    address: cfaForwarderAddress,
    functionName: 'updateFlow',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link cfaForwarderAbi}__ and `functionName` set to `"updateFlowOperatorPermissions"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x2CDd45c5182602a36d391F7F16DD9f8386C3bD8D)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 */
export const simulateCfaForwarderUpdateFlowOperatorPermissions =
  /*#__PURE__*/ createSimulateContract({
    abi: cfaForwarderAbi,
    address: cfaForwarderAddress,
    functionName: 'updateFlowOperatorPermissions',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link clearMacroForwarderAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 */
export const readClearMacroForwarder = /*#__PURE__*/ createReadContract({
  abi: clearMacroForwarderAbi,
  address: clearMacroForwarderAddress,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link clearMacroForwarderAbi}__ and `functionName` set to `"PERMIT2"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 */
export const readClearMacroForwarderPermit2 = /*#__PURE__*/ createReadContract({
  abi: clearMacroForwarderAbi,
  address: clearMacroForwarderAddress,
  functionName: 'PERMIT2',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link clearMacroForwarderAbi}__ and `functionName` set to `"SELF_PROVIDER"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 */
export const readClearMacroForwarderSelfProvider =
  /*#__PURE__*/ createReadContract({
    abi: clearMacroForwarderAbi,
    address: clearMacroForwarderAddress,
    functionName: 'SELF_PROVIDER',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link clearMacroForwarderAbi}__ and `functionName` set to `"eip712Domain"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 */
export const readClearMacroForwarderEip712Domain =
  /*#__PURE__*/ createReadContract({
    abi: clearMacroForwarderAbi,
    address: clearMacroForwarderAddress,
    functionName: 'eip712Domain',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link clearMacroForwarderAbi}__ and `functionName` set to `"encodeParams"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 */
export const readClearMacroForwarderEncodeParams =
  /*#__PURE__*/ createReadContract({
    abi: clearMacroForwarderAbi,
    address: clearMacroForwarderAddress,
    functionName: 'encodeParams',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link clearMacroForwarderAbi}__ and `functionName` set to `"getDigest"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 */
export const readClearMacroForwarderGetDigest =
  /*#__PURE__*/ createReadContract({
    abi: clearMacroForwarderAbi,
    address: clearMacroForwarderAddress,
    functionName: 'getDigest',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link clearMacroForwarderAbi}__ and `functionName` set to `"getNonce"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 */
export const readClearMacroForwarderGetNonce = /*#__PURE__*/ createReadContract(
  {
    abi: clearMacroForwarderAbi,
    address: clearMacroForwarderAddress,
    functionName: 'getNonce',
  },
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link clearMacroForwarderAbi}__ and `functionName` set to `"getPermit2WitnessStructHash"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 */
export const readClearMacroForwarderGetPermit2WitnessStructHash =
  /*#__PURE__*/ createReadContract({
    abi: clearMacroForwarderAbi,
    address: clearMacroForwarderAddress,
    functionName: 'getPermit2WitnessStructHash',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link clearMacroForwarderAbi}__ and `functionName` set to `"getPermit2WitnessTypeString"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 */
export const readClearMacroForwarderGetPermit2WitnessTypeString =
  /*#__PURE__*/ createReadContract({
    abi: clearMacroForwarderAbi,
    address: clearMacroForwarderAddress,
    functionName: 'getPermit2WitnessTypeString',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link clearMacroForwarderAbi}__ and `functionName` set to `"getStructHash"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 */
export const readClearMacroForwarderGetStructHash =
  /*#__PURE__*/ createReadContract({
    abi: clearMacroForwarderAbi,
    address: clearMacroForwarderAddress,
    functionName: 'getStructHash',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link clearMacroForwarderAbi}__ and `functionName` set to `"getTypeDefinition"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 */
export const readClearMacroForwarderGetTypeDefinition =
  /*#__PURE__*/ createReadContract({
    abi: clearMacroForwarderAbi,
    address: clearMacroForwarderAddress,
    functionName: 'getTypeDefinition',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link clearMacroForwarderAbi}__ and `functionName` set to `"getTypeHash"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 */
export const readClearMacroForwarderGetTypeHash =
  /*#__PURE__*/ createReadContract({
    abi: clearMacroForwarderAbi,
    address: clearMacroForwarderAddress,
    functionName: 'getTypeHash',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link clearMacroForwarderAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 */
export const writeClearMacroForwarder = /*#__PURE__*/ createWriteContract({
  abi: clearMacroForwarderAbi,
  address: clearMacroForwarderAddress,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link clearMacroForwarderAbi}__ and `functionName` set to `"runMacro"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 */
export const writeClearMacroForwarderRunMacro =
  /*#__PURE__*/ createWriteContract({
    abi: clearMacroForwarderAbi,
    address: clearMacroForwarderAddress,
    functionName: 'runMacro',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link clearMacroForwarderAbi}__ and `functionName` set to `"runPermit2AndMacro"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 */
export const writeClearMacroForwarderRunPermit2AndMacro =
  /*#__PURE__*/ createWriteContract({
    abi: clearMacroForwarderAbi,
    address: clearMacroForwarderAddress,
    functionName: 'runPermit2AndMacro',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link clearMacroForwarderAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 */
export const simulateClearMacroForwarder = /*#__PURE__*/ createSimulateContract(
  { abi: clearMacroForwarderAbi, address: clearMacroForwarderAddress },
)

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link clearMacroForwarderAbi}__ and `functionName` set to `"runMacro"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 */
export const simulateClearMacroForwarderRunMacro =
  /*#__PURE__*/ createSimulateContract({
    abi: clearMacroForwarderAbi,
    address: clearMacroForwarderAddress,
    functionName: 'runMacro',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link clearMacroForwarderAbi}__ and `functionName` set to `"runPermit2AndMacro"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 */
export const simulateClearMacroForwarderRunPermit2AndMacro =
  /*#__PURE__*/ createSimulateContract({
    abi: clearMacroForwarderAbi,
    address: clearMacroForwarderAddress,
    functionName: 'runPermit2AndMacro',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link clearMacroForwarderAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 */
export const watchClearMacroForwarderEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: clearMacroForwarderAbi,
    address: clearMacroForwarderAddress,
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link clearMacroForwarderAbi}__ and `eventName` set to `"EIP712DomainChanged"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 */
export const watchClearMacroForwarderEip712DomainChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: clearMacroForwarderAbi,
    address: clearMacroForwarderAddress,
    eventName: 'EIP712DomainChanged',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link clearMacroForwarderAbi}__ and `eventName` set to `"MacroExecuted"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 */
export const watchClearMacroForwarderMacroExecutedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: clearMacroForwarderAbi,
    address: clearMacroForwarderAddress,
    eventName: 'MacroExecuted',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link clearMacroForwarderAbi}__ and `eventName` set to `"Permit2UpgradeExecuted"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e)
 */
export const watchClearMacroForwarderPermit2UpgradeExecutedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: clearMacroForwarderAbi,
    address: clearMacroForwarderAddress,
    eventName: 'Permit2UpgradeExecuted',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gdaForwarderAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 */
export const readGdaForwarder = /*#__PURE__*/ createReadContract({
  abi: gdaForwarderAbi,
  address: gdaForwarderAddress,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gdaForwarderAbi}__ and `functionName` set to `"estimateDistributionActualAmount"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 */
export const readGdaForwarderEstimateDistributionActualAmount =
  /*#__PURE__*/ createReadContract({
    abi: gdaForwarderAbi,
    address: gdaForwarderAddress,
    functionName: 'estimateDistributionActualAmount',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gdaForwarderAbi}__ and `functionName` set to `"estimateFlowDistributionActualFlowRate"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 */
export const readGdaForwarderEstimateFlowDistributionActualFlowRate =
  /*#__PURE__*/ createReadContract({
    abi: gdaForwarderAbi,
    address: gdaForwarderAddress,
    functionName: 'estimateFlowDistributionActualFlowRate',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gdaForwarderAbi}__ and `functionName` set to `"getFlowDistributionFlowRate"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 */
export const readGdaForwarderGetFlowDistributionFlowRate =
  /*#__PURE__*/ createReadContract({
    abi: gdaForwarderAbi,
    address: gdaForwarderAddress,
    functionName: 'getFlowDistributionFlowRate',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gdaForwarderAbi}__ and `functionName` set to `"getNetFlow"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 */
export const readGdaForwarderGetNetFlow = /*#__PURE__*/ createReadContract({
  abi: gdaForwarderAbi,
  address: gdaForwarderAddress,
  functionName: 'getNetFlow',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gdaForwarderAbi}__ and `functionName` set to `"getPoolAdjustmentFlowInfo"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 */
export const readGdaForwarderGetPoolAdjustmentFlowInfo =
  /*#__PURE__*/ createReadContract({
    abi: gdaForwarderAbi,
    address: gdaForwarderAddress,
    functionName: 'getPoolAdjustmentFlowInfo',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gdaForwarderAbi}__ and `functionName` set to `"getPoolAdjustmentFlowRate"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 */
export const readGdaForwarderGetPoolAdjustmentFlowRate =
  /*#__PURE__*/ createReadContract({
    abi: gdaForwarderAbi,
    address: gdaForwarderAddress,
    functionName: 'getPoolAdjustmentFlowRate',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gdaForwarderAbi}__ and `functionName` set to `"isMemberConnected"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 */
export const readGdaForwarderIsMemberConnected =
  /*#__PURE__*/ createReadContract({
    abi: gdaForwarderAbi,
    address: gdaForwarderAddress,
    functionName: 'isMemberConnected',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gdaForwarderAbi}__ and `functionName` set to `"isPool"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 */
export const readGdaForwarderIsPool = /*#__PURE__*/ createReadContract({
  abi: gdaForwarderAbi,
  address: gdaForwarderAddress,
  functionName: 'isPool',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link gdaForwarderAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 */
export const writeGdaForwarder = /*#__PURE__*/ createWriteContract({
  abi: gdaForwarderAbi,
  address: gdaForwarderAddress,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link gdaForwarderAbi}__ and `functionName` set to `"claimAll"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 */
export const writeGdaForwarderClaimAll = /*#__PURE__*/ createWriteContract({
  abi: gdaForwarderAbi,
  address: gdaForwarderAddress,
  functionName: 'claimAll',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link gdaForwarderAbi}__ and `functionName` set to `"connectPool"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 */
export const writeGdaForwarderConnectPool = /*#__PURE__*/ createWriteContract({
  abi: gdaForwarderAbi,
  address: gdaForwarderAddress,
  functionName: 'connectPool',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link gdaForwarderAbi}__ and `functionName` set to `"createPool"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 */
export const writeGdaForwarderCreatePool = /*#__PURE__*/ createWriteContract({
  abi: gdaForwarderAbi,
  address: gdaForwarderAddress,
  functionName: 'createPool',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link gdaForwarderAbi}__ and `functionName` set to `"disconnectPool"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 */
export const writeGdaForwarderDisconnectPool =
  /*#__PURE__*/ createWriteContract({
    abi: gdaForwarderAbi,
    address: gdaForwarderAddress,
    functionName: 'disconnectPool',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link gdaForwarderAbi}__ and `functionName` set to `"distribute"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 */
export const writeGdaForwarderDistribute = /*#__PURE__*/ createWriteContract({
  abi: gdaForwarderAbi,
  address: gdaForwarderAddress,
  functionName: 'distribute',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link gdaForwarderAbi}__ and `functionName` set to `"distributeFlow"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 */
export const writeGdaForwarderDistributeFlow =
  /*#__PURE__*/ createWriteContract({
    abi: gdaForwarderAbi,
    address: gdaForwarderAddress,
    functionName: 'distributeFlow',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link gdaForwarderAbi}__ and `functionName` set to `"updateMemberUnits"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 */
export const writeGdaForwarderUpdateMemberUnits =
  /*#__PURE__*/ createWriteContract({
    abi: gdaForwarderAbi,
    address: gdaForwarderAddress,
    functionName: 'updateMemberUnits',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link gdaForwarderAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 */
export const simulateGdaForwarder = /*#__PURE__*/ createSimulateContract({
  abi: gdaForwarderAbi,
  address: gdaForwarderAddress,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link gdaForwarderAbi}__ and `functionName` set to `"claimAll"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 */
export const simulateGdaForwarderClaimAll =
  /*#__PURE__*/ createSimulateContract({
    abi: gdaForwarderAbi,
    address: gdaForwarderAddress,
    functionName: 'claimAll',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link gdaForwarderAbi}__ and `functionName` set to `"connectPool"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 */
export const simulateGdaForwarderConnectPool =
  /*#__PURE__*/ createSimulateContract({
    abi: gdaForwarderAbi,
    address: gdaForwarderAddress,
    functionName: 'connectPool',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link gdaForwarderAbi}__ and `functionName` set to `"createPool"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 */
export const simulateGdaForwarderCreatePool =
  /*#__PURE__*/ createSimulateContract({
    abi: gdaForwarderAbi,
    address: gdaForwarderAddress,
    functionName: 'createPool',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link gdaForwarderAbi}__ and `functionName` set to `"disconnectPool"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 */
export const simulateGdaForwarderDisconnectPool =
  /*#__PURE__*/ createSimulateContract({
    abi: gdaForwarderAbi,
    address: gdaForwarderAddress,
    functionName: 'disconnectPool',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link gdaForwarderAbi}__ and `functionName` set to `"distribute"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 */
export const simulateGdaForwarderDistribute =
  /*#__PURE__*/ createSimulateContract({
    abi: gdaForwarderAbi,
    address: gdaForwarderAddress,
    functionName: 'distribute',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link gdaForwarderAbi}__ and `functionName` set to `"distributeFlow"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 */
export const simulateGdaForwarderDistributeFlow =
  /*#__PURE__*/ createSimulateContract({
    abi: gdaForwarderAbi,
    address: gdaForwarderAddress,
    functionName: 'distributeFlow',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link gdaForwarderAbi}__ and `functionName` set to `"updateMemberUnits"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 */
export const simulateGdaForwarderUpdateMemberUnits =
  /*#__PURE__*/ createSimulateContract({
    abi: gdaForwarderAbi,
    address: gdaForwarderAddress,
    functionName: 'updateMemberUnits',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gdaPoolAbi}__
 */
export const readGdaPool = /*#__PURE__*/ createReadContract({ abi: gdaPoolAbi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gdaPoolAbi}__ and `functionName` set to `"GDA"`
 */
export const readGdaPoolGda = /*#__PURE__*/ createReadContract({
  abi: gdaPoolAbi,
  functionName: 'GDA',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gdaPoolAbi}__ and `functionName` set to `"admin"`
 */
export const readGdaPoolAdmin = /*#__PURE__*/ createReadContract({
  abi: gdaPoolAbi,
  functionName: 'admin',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gdaPoolAbi}__ and `functionName` set to `"allowance"`
 */
export const readGdaPoolAllowance = /*#__PURE__*/ createReadContract({
  abi: gdaPoolAbi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gdaPoolAbi}__ and `functionName` set to `"balanceOf"`
 */
export const readGdaPoolBalanceOf = /*#__PURE__*/ createReadContract({
  abi: gdaPoolAbi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gdaPoolAbi}__ and `functionName` set to `"decimals"`
 */
export const readGdaPoolDecimals = /*#__PURE__*/ createReadContract({
  abi: gdaPoolAbi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gdaPoolAbi}__ and `functionName` set to `"distributionFromAnyAddress"`
 */
export const readGdaPoolDistributionFromAnyAddress =
  /*#__PURE__*/ createReadContract({
    abi: gdaPoolAbi,
    functionName: 'distributionFromAnyAddress',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gdaPoolAbi}__ and `functionName` set to `"getClaimable"`
 */
export const readGdaPoolGetClaimable = /*#__PURE__*/ createReadContract({
  abi: gdaPoolAbi,
  functionName: 'getClaimable',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gdaPoolAbi}__ and `functionName` set to `"getClaimableNow"`
 */
export const readGdaPoolGetClaimableNow = /*#__PURE__*/ createReadContract({
  abi: gdaPoolAbi,
  functionName: 'getClaimableNow',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gdaPoolAbi}__ and `functionName` set to `"getDisconnectedBalance"`
 */
export const readGdaPoolGetDisconnectedBalance =
  /*#__PURE__*/ createReadContract({
    abi: gdaPoolAbi,
    functionName: 'getDisconnectedBalance',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gdaPoolAbi}__ and `functionName` set to `"getMemberFlowRate"`
 */
export const readGdaPoolGetMemberFlowRate = /*#__PURE__*/ createReadContract({
  abi: gdaPoolAbi,
  functionName: 'getMemberFlowRate',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gdaPoolAbi}__ and `functionName` set to `"getTotalAmountReceivedByMember"`
 */
export const readGdaPoolGetTotalAmountReceivedByMember =
  /*#__PURE__*/ createReadContract({
    abi: gdaPoolAbi,
    functionName: 'getTotalAmountReceivedByMember',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gdaPoolAbi}__ and `functionName` set to `"getTotalConnectedFlowRate"`
 */
export const readGdaPoolGetTotalConnectedFlowRate =
  /*#__PURE__*/ createReadContract({
    abi: gdaPoolAbi,
    functionName: 'getTotalConnectedFlowRate',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gdaPoolAbi}__ and `functionName` set to `"getTotalConnectedUnits"`
 */
export const readGdaPoolGetTotalConnectedUnits =
  /*#__PURE__*/ createReadContract({
    abi: gdaPoolAbi,
    functionName: 'getTotalConnectedUnits',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gdaPoolAbi}__ and `functionName` set to `"getTotalDisconnectedFlowRate"`
 */
export const readGdaPoolGetTotalDisconnectedFlowRate =
  /*#__PURE__*/ createReadContract({
    abi: gdaPoolAbi,
    functionName: 'getTotalDisconnectedFlowRate',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gdaPoolAbi}__ and `functionName` set to `"getTotalDisconnectedUnits"`
 */
export const readGdaPoolGetTotalDisconnectedUnits =
  /*#__PURE__*/ createReadContract({
    abi: gdaPoolAbi,
    functionName: 'getTotalDisconnectedUnits',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gdaPoolAbi}__ and `functionName` set to `"getTotalFlowRate"`
 */
export const readGdaPoolGetTotalFlowRate = /*#__PURE__*/ createReadContract({
  abi: gdaPoolAbi,
  functionName: 'getTotalFlowRate',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gdaPoolAbi}__ and `functionName` set to `"getTotalUnits"`
 */
export const readGdaPoolGetTotalUnits = /*#__PURE__*/ createReadContract({
  abi: gdaPoolAbi,
  functionName: 'getTotalUnits',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gdaPoolAbi}__ and `functionName` set to `"getUnits"`
 */
export const readGdaPoolGetUnits = /*#__PURE__*/ createReadContract({
  abi: gdaPoolAbi,
  functionName: 'getUnits',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gdaPoolAbi}__ and `functionName` set to `"getUnsettledValue"`
 */
export const readGdaPoolGetUnsettledValue = /*#__PURE__*/ createReadContract({
  abi: gdaPoolAbi,
  functionName: 'getUnsettledValue',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gdaPoolAbi}__ and `functionName` set to `"name"`
 */
export const readGdaPoolName = /*#__PURE__*/ createReadContract({
  abi: gdaPoolAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gdaPoolAbi}__ and `functionName` set to `"poolOperatorGetIndex"`
 */
export const readGdaPoolPoolOperatorGetIndex = /*#__PURE__*/ createReadContract(
  { abi: gdaPoolAbi, functionName: 'poolOperatorGetIndex' },
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gdaPoolAbi}__ and `functionName` set to `"proxiableUUID"`
 */
export const readGdaPoolProxiableUuid = /*#__PURE__*/ createReadContract({
  abi: gdaPoolAbi,
  functionName: 'proxiableUUID',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gdaPoolAbi}__ and `functionName` set to `"superToken"`
 */
export const readGdaPoolSuperToken = /*#__PURE__*/ createReadContract({
  abi: gdaPoolAbi,
  functionName: 'superToken',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gdaPoolAbi}__ and `functionName` set to `"symbol"`
 */
export const readGdaPoolSymbol = /*#__PURE__*/ createReadContract({
  abi: gdaPoolAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gdaPoolAbi}__ and `functionName` set to `"totalSupply"`
 */
export const readGdaPoolTotalSupply = /*#__PURE__*/ createReadContract({
  abi: gdaPoolAbi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gdaPoolAbi}__ and `functionName` set to `"transferabilityForUnitsOwner"`
 */
export const readGdaPoolTransferabilityForUnitsOwner =
  /*#__PURE__*/ createReadContract({
    abi: gdaPoolAbi,
    functionName: 'transferabilityForUnitsOwner',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link gdaPoolAbi}__
 */
export const writeGdaPool = /*#__PURE__*/ createWriteContract({
  abi: gdaPoolAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link gdaPoolAbi}__ and `functionName` set to `"approve"`
 */
export const writeGdaPoolApprove = /*#__PURE__*/ createWriteContract({
  abi: gdaPoolAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link gdaPoolAbi}__ and `functionName` set to `"castrate"`
 */
export const writeGdaPoolCastrate = /*#__PURE__*/ createWriteContract({
  abi: gdaPoolAbi,
  functionName: 'castrate',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link gdaPoolAbi}__ and `functionName` set to `"claimAll"`
 */
export const writeGdaPoolClaimAll = /*#__PURE__*/ createWriteContract({
  abi: gdaPoolAbi,
  functionName: 'claimAll',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link gdaPoolAbi}__ and `functionName` set to `"decreaseAllowance"`
 */
export const writeGdaPoolDecreaseAllowance = /*#__PURE__*/ createWriteContract({
  abi: gdaPoolAbi,
  functionName: 'decreaseAllowance',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link gdaPoolAbi}__ and `functionName` set to `"decreaseMemberUnits"`
 */
export const writeGdaPoolDecreaseMemberUnits =
  /*#__PURE__*/ createWriteContract({
    abi: gdaPoolAbi,
    functionName: 'decreaseMemberUnits',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link gdaPoolAbi}__ and `functionName` set to `"increaseAllowance"`
 */
export const writeGdaPoolIncreaseAllowance = /*#__PURE__*/ createWriteContract({
  abi: gdaPoolAbi,
  functionName: 'increaseAllowance',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link gdaPoolAbi}__ and `functionName` set to `"increaseMemberUnits"`
 */
export const writeGdaPoolIncreaseMemberUnits =
  /*#__PURE__*/ createWriteContract({
    abi: gdaPoolAbi,
    functionName: 'increaseMemberUnits',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link gdaPoolAbi}__ and `functionName` set to `"initialize"`
 */
export const writeGdaPoolInitialize = /*#__PURE__*/ createWriteContract({
  abi: gdaPoolAbi,
  functionName: 'initialize',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link gdaPoolAbi}__ and `functionName` set to `"operatorConnectMember"`
 */
export const writeGdaPoolOperatorConnectMember =
  /*#__PURE__*/ createWriteContract({
    abi: gdaPoolAbi,
    functionName: 'operatorConnectMember',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link gdaPoolAbi}__ and `functionName` set to `"operatorSetIndex"`
 */
export const writeGdaPoolOperatorSetIndex = /*#__PURE__*/ createWriteContract({
  abi: gdaPoolAbi,
  functionName: 'operatorSetIndex',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link gdaPoolAbi}__ and `functionName` set to `"transfer"`
 */
export const writeGdaPoolTransfer = /*#__PURE__*/ createWriteContract({
  abi: gdaPoolAbi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link gdaPoolAbi}__ and `functionName` set to `"transferFrom"`
 */
export const writeGdaPoolTransferFrom = /*#__PURE__*/ createWriteContract({
  abi: gdaPoolAbi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link gdaPoolAbi}__ and `functionName` set to `"updateMemberUnits"`
 */
export const writeGdaPoolUpdateMemberUnits = /*#__PURE__*/ createWriteContract({
  abi: gdaPoolAbi,
  functionName: 'updateMemberUnits',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link gdaPoolAbi}__
 */
export const simulateGdaPool = /*#__PURE__*/ createSimulateContract({
  abi: gdaPoolAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link gdaPoolAbi}__ and `functionName` set to `"approve"`
 */
export const simulateGdaPoolApprove = /*#__PURE__*/ createSimulateContract({
  abi: gdaPoolAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link gdaPoolAbi}__ and `functionName` set to `"castrate"`
 */
export const simulateGdaPoolCastrate = /*#__PURE__*/ createSimulateContract({
  abi: gdaPoolAbi,
  functionName: 'castrate',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link gdaPoolAbi}__ and `functionName` set to `"claimAll"`
 */
export const simulateGdaPoolClaimAll = /*#__PURE__*/ createSimulateContract({
  abi: gdaPoolAbi,
  functionName: 'claimAll',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link gdaPoolAbi}__ and `functionName` set to `"decreaseAllowance"`
 */
export const simulateGdaPoolDecreaseAllowance =
  /*#__PURE__*/ createSimulateContract({
    abi: gdaPoolAbi,
    functionName: 'decreaseAllowance',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link gdaPoolAbi}__ and `functionName` set to `"decreaseMemberUnits"`
 */
export const simulateGdaPoolDecreaseMemberUnits =
  /*#__PURE__*/ createSimulateContract({
    abi: gdaPoolAbi,
    functionName: 'decreaseMemberUnits',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link gdaPoolAbi}__ and `functionName` set to `"increaseAllowance"`
 */
export const simulateGdaPoolIncreaseAllowance =
  /*#__PURE__*/ createSimulateContract({
    abi: gdaPoolAbi,
    functionName: 'increaseAllowance',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link gdaPoolAbi}__ and `functionName` set to `"increaseMemberUnits"`
 */
export const simulateGdaPoolIncreaseMemberUnits =
  /*#__PURE__*/ createSimulateContract({
    abi: gdaPoolAbi,
    functionName: 'increaseMemberUnits',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link gdaPoolAbi}__ and `functionName` set to `"initialize"`
 */
export const simulateGdaPoolInitialize = /*#__PURE__*/ createSimulateContract({
  abi: gdaPoolAbi,
  functionName: 'initialize',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link gdaPoolAbi}__ and `functionName` set to `"operatorConnectMember"`
 */
export const simulateGdaPoolOperatorConnectMember =
  /*#__PURE__*/ createSimulateContract({
    abi: gdaPoolAbi,
    functionName: 'operatorConnectMember',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link gdaPoolAbi}__ and `functionName` set to `"operatorSetIndex"`
 */
export const simulateGdaPoolOperatorSetIndex =
  /*#__PURE__*/ createSimulateContract({
    abi: gdaPoolAbi,
    functionName: 'operatorSetIndex',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link gdaPoolAbi}__ and `functionName` set to `"transfer"`
 */
export const simulateGdaPoolTransfer = /*#__PURE__*/ createSimulateContract({
  abi: gdaPoolAbi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link gdaPoolAbi}__ and `functionName` set to `"transferFrom"`
 */
export const simulateGdaPoolTransferFrom = /*#__PURE__*/ createSimulateContract(
  { abi: gdaPoolAbi, functionName: 'transferFrom' },
)

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link gdaPoolAbi}__ and `functionName` set to `"updateMemberUnits"`
 */
export const simulateGdaPoolUpdateMemberUnits =
  /*#__PURE__*/ createSimulateContract({
    abi: gdaPoolAbi,
    functionName: 'updateMemberUnits',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link gdaPoolAbi}__
 */
export const watchGdaPoolEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: gdaPoolAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link gdaPoolAbi}__ and `eventName` set to `"Approval"`
 */
export const watchGdaPoolApprovalEvent = /*#__PURE__*/ createWatchContractEvent(
  { abi: gdaPoolAbi, eventName: 'Approval' },
)

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link gdaPoolAbi}__ and `eventName` set to `"DistributionClaimed"`
 */
export const watchGdaPoolDistributionClaimedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: gdaPoolAbi,
    eventName: 'DistributionClaimed',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link gdaPoolAbi}__ and `eventName` set to `"Initialized"`
 */
export const watchGdaPoolInitializedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: gdaPoolAbi,
    eventName: 'Initialized',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link gdaPoolAbi}__ and `eventName` set to `"MemberUnitsUpdated"`
 */
export const watchGdaPoolMemberUnitsUpdatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: gdaPoolAbi,
    eventName: 'MemberUnitsUpdated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link gdaPoolAbi}__ and `eventName` set to `"Transfer"`
 */
export const watchGdaPoolTransferEvent = /*#__PURE__*/ createWatchContractEvent(
  { abi: gdaPoolAbi, eventName: 'Transfer' },
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link superTokenAbi}__
 */
export const readSuperToken = /*#__PURE__*/ createReadContract({
  abi: superTokenAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"DOMAIN_SEPARATOR"`
 */
export const readSuperTokenDomainSeparator = /*#__PURE__*/ createReadContract({
  abi: superTokenAbi,
  functionName: 'DOMAIN_SEPARATOR',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"POOL_ADMIN_NFT"`
 */
export const readSuperTokenPoolAdminNft = /*#__PURE__*/ createReadContract({
  abi: superTokenAbi,
  functionName: 'POOL_ADMIN_NFT',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"POOL_MEMBER_NFT"`
 */
export const readSuperTokenPoolMemberNft = /*#__PURE__*/ createReadContract({
  abi: superTokenAbi,
  functionName: 'POOL_MEMBER_NFT',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"VERSION"`
 */
export const readSuperTokenVersion = /*#__PURE__*/ createReadContract({
  abi: superTokenAbi,
  functionName: 'VERSION',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"allowance"`
 */
export const readSuperTokenAllowance = /*#__PURE__*/ createReadContract({
  abi: superTokenAbi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"balanceOf"`
 */
export const readSuperTokenBalanceOf = /*#__PURE__*/ createReadContract({
  abi: superTokenAbi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"decimals"`
 */
export const readSuperTokenDecimals = /*#__PURE__*/ createReadContract({
  abi: superTokenAbi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"defaultOperators"`
 */
export const readSuperTokenDefaultOperators = /*#__PURE__*/ createReadContract({
  abi: superTokenAbi,
  functionName: 'defaultOperators',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"eip712Domain"`
 */
export const readSuperTokenEip712Domain = /*#__PURE__*/ createReadContract({
  abi: superTokenAbi,
  functionName: 'eip712Domain',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"getAccountActiveAgreements"`
 */
export const readSuperTokenGetAccountActiveAgreements =
  /*#__PURE__*/ createReadContract({
    abi: superTokenAbi,
    functionName: 'getAccountActiveAgreements',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"getAdmin"`
 */
export const readSuperTokenGetAdmin = /*#__PURE__*/ createReadContract({
  abi: superTokenAbi,
  functionName: 'getAdmin',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"getAgreementData"`
 */
export const readSuperTokenGetAgreementData = /*#__PURE__*/ createReadContract({
  abi: superTokenAbi,
  functionName: 'getAgreementData',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"getAgreementStateSlot"`
 */
export const readSuperTokenGetAgreementStateSlot =
  /*#__PURE__*/ createReadContract({
    abi: superTokenAbi,
    functionName: 'getAgreementStateSlot',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"getCodeAddress"`
 */
export const readSuperTokenGetCodeAddress = /*#__PURE__*/ createReadContract({
  abi: superTokenAbi,
  functionName: 'getCodeAddress',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"getHost"`
 */
export const readSuperTokenGetHost = /*#__PURE__*/ createReadContract({
  abi: superTokenAbi,
  functionName: 'getHost',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"getUnderlyingDecimals"`
 */
export const readSuperTokenGetUnderlyingDecimals =
  /*#__PURE__*/ createReadContract({
    abi: superTokenAbi,
    functionName: 'getUnderlyingDecimals',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"getUnderlyingToken"`
 */
export const readSuperTokenGetUnderlyingToken =
  /*#__PURE__*/ createReadContract({
    abi: superTokenAbi,
    functionName: 'getUnderlyingToken',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"getYieldBackend"`
 */
export const readSuperTokenGetYieldBackend = /*#__PURE__*/ createReadContract({
  abi: superTokenAbi,
  functionName: 'getYieldBackend',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"granularity"`
 */
export const readSuperTokenGranularity = /*#__PURE__*/ createReadContract({
  abi: superTokenAbi,
  functionName: 'granularity',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"isAccountCritical"`
 */
export const readSuperTokenIsAccountCritical = /*#__PURE__*/ createReadContract(
  { abi: superTokenAbi, functionName: 'isAccountCritical' },
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"isAccountCriticalNow"`
 */
export const readSuperTokenIsAccountCriticalNow =
  /*#__PURE__*/ createReadContract({
    abi: superTokenAbi,
    functionName: 'isAccountCriticalNow',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"isAccountSolvent"`
 */
export const readSuperTokenIsAccountSolvent = /*#__PURE__*/ createReadContract({
  abi: superTokenAbi,
  functionName: 'isAccountSolvent',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"isAccountSolventNow"`
 */
export const readSuperTokenIsAccountSolventNow =
  /*#__PURE__*/ createReadContract({
    abi: superTokenAbi,
    functionName: 'isAccountSolventNow',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"isOperatorFor"`
 */
export const readSuperTokenIsOperatorFor = /*#__PURE__*/ createReadContract({
  abi: superTokenAbi,
  functionName: 'isOperatorFor',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"name"`
 */
export const readSuperTokenName = /*#__PURE__*/ createReadContract({
  abi: superTokenAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"nonces"`
 */
export const readSuperTokenNonces = /*#__PURE__*/ createReadContract({
  abi: superTokenAbi,
  functionName: 'nonces',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"proxiableUUID"`
 */
export const readSuperTokenProxiableUuid = /*#__PURE__*/ createReadContract({
  abi: superTokenAbi,
  functionName: 'proxiableUUID',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"realtimeBalanceOf"`
 */
export const readSuperTokenRealtimeBalanceOf = /*#__PURE__*/ createReadContract(
  { abi: superTokenAbi, functionName: 'realtimeBalanceOf' },
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"realtimeBalanceOfNow"`
 */
export const readSuperTokenRealtimeBalanceOfNow =
  /*#__PURE__*/ createReadContract({
    abi: superTokenAbi,
    functionName: 'realtimeBalanceOfNow',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"symbol"`
 */
export const readSuperTokenSymbol = /*#__PURE__*/ createReadContract({
  abi: superTokenAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"toUnderlyingAmount"`
 */
export const readSuperTokenToUnderlyingAmount =
  /*#__PURE__*/ createReadContract({
    abi: superTokenAbi,
    functionName: 'toUnderlyingAmount',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"totalSupply"`
 */
export const readSuperTokenTotalSupply = /*#__PURE__*/ createReadContract({
  abi: superTokenAbi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link superTokenAbi}__
 */
export const writeSuperToken = /*#__PURE__*/ createWriteContract({
  abi: superTokenAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"approve"`
 */
export const writeSuperTokenApprove = /*#__PURE__*/ createWriteContract({
  abi: superTokenAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"authorizeOperator"`
 */
export const writeSuperTokenAuthorizeOperator =
  /*#__PURE__*/ createWriteContract({
    abi: superTokenAbi,
    functionName: 'authorizeOperator',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"burn"`
 */
export const writeSuperTokenBurn = /*#__PURE__*/ createWriteContract({
  abi: superTokenAbi,
  functionName: 'burn',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"castrate"`
 */
export const writeSuperTokenCastrate = /*#__PURE__*/ createWriteContract({
  abi: superTokenAbi,
  functionName: 'castrate',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"changeAdmin"`
 */
export const writeSuperTokenChangeAdmin = /*#__PURE__*/ createWriteContract({
  abi: superTokenAbi,
  functionName: 'changeAdmin',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"createAgreement"`
 */
export const writeSuperTokenCreateAgreement = /*#__PURE__*/ createWriteContract(
  { abi: superTokenAbi, functionName: 'createAgreement' },
)

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"decreaseAllowance"`
 */
export const writeSuperTokenDecreaseAllowance =
  /*#__PURE__*/ createWriteContract({
    abi: superTokenAbi,
    functionName: 'decreaseAllowance',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"disableYieldBackend"`
 */
export const writeSuperTokenDisableYieldBackend =
  /*#__PURE__*/ createWriteContract({
    abi: superTokenAbi,
    functionName: 'disableYieldBackend',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"downgrade"`
 */
export const writeSuperTokenDowngrade = /*#__PURE__*/ createWriteContract({
  abi: superTokenAbi,
  functionName: 'downgrade',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"downgradeTo"`
 */
export const writeSuperTokenDowngradeTo = /*#__PURE__*/ createWriteContract({
  abi: superTokenAbi,
  functionName: 'downgradeTo',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"enableYieldBackend"`
 */
export const writeSuperTokenEnableYieldBackend =
  /*#__PURE__*/ createWriteContract({
    abi: superTokenAbi,
    functionName: 'enableYieldBackend',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"increaseAllowance"`
 */
export const writeSuperTokenIncreaseAllowance =
  /*#__PURE__*/ createWriteContract({
    abi: superTokenAbi,
    functionName: 'increaseAllowance',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"initialize"`
 */
export const writeSuperTokenInitialize = /*#__PURE__*/ createWriteContract({
  abi: superTokenAbi,
  functionName: 'initialize',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"initializeWithAdmin"`
 */
export const writeSuperTokenInitializeWithAdmin =
  /*#__PURE__*/ createWriteContract({
    abi: superTokenAbi,
    functionName: 'initializeWithAdmin',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"makeLiquidationPayoutsV2"`
 */
export const writeSuperTokenMakeLiquidationPayoutsV2 =
  /*#__PURE__*/ createWriteContract({
    abi: superTokenAbi,
    functionName: 'makeLiquidationPayoutsV2',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"operationApprove"`
 */
export const writeSuperTokenOperationApprove =
  /*#__PURE__*/ createWriteContract({
    abi: superTokenAbi,
    functionName: 'operationApprove',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"operationDecreaseAllowance"`
 */
export const writeSuperTokenOperationDecreaseAllowance =
  /*#__PURE__*/ createWriteContract({
    abi: superTokenAbi,
    functionName: 'operationDecreaseAllowance',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"operationDowngrade"`
 */
export const writeSuperTokenOperationDowngrade =
  /*#__PURE__*/ createWriteContract({
    abi: superTokenAbi,
    functionName: 'operationDowngrade',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"operationDowngradeTo"`
 */
export const writeSuperTokenOperationDowngradeTo =
  /*#__PURE__*/ createWriteContract({
    abi: superTokenAbi,
    functionName: 'operationDowngradeTo',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"operationIncreaseAllowance"`
 */
export const writeSuperTokenOperationIncreaseAllowance =
  /*#__PURE__*/ createWriteContract({
    abi: superTokenAbi,
    functionName: 'operationIncreaseAllowance',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"operationSend"`
 */
export const writeSuperTokenOperationSend = /*#__PURE__*/ createWriteContract({
  abi: superTokenAbi,
  functionName: 'operationSend',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"operationTransferFrom"`
 */
export const writeSuperTokenOperationTransferFrom =
  /*#__PURE__*/ createWriteContract({
    abi: superTokenAbi,
    functionName: 'operationTransferFrom',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"operationUpgrade"`
 */
export const writeSuperTokenOperationUpgrade =
  /*#__PURE__*/ createWriteContract({
    abi: superTokenAbi,
    functionName: 'operationUpgrade',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"operationUpgradeTo"`
 */
export const writeSuperTokenOperationUpgradeTo =
  /*#__PURE__*/ createWriteContract({
    abi: superTokenAbi,
    functionName: 'operationUpgradeTo',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"operatorBurn"`
 */
export const writeSuperTokenOperatorBurn = /*#__PURE__*/ createWriteContract({
  abi: superTokenAbi,
  functionName: 'operatorBurn',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"operatorSend"`
 */
export const writeSuperTokenOperatorSend = /*#__PURE__*/ createWriteContract({
  abi: superTokenAbi,
  functionName: 'operatorSend',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"permit"`
 */
export const writeSuperTokenPermit = /*#__PURE__*/ createWriteContract({
  abi: superTokenAbi,
  functionName: 'permit',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"revokeOperator"`
 */
export const writeSuperTokenRevokeOperator = /*#__PURE__*/ createWriteContract({
  abi: superTokenAbi,
  functionName: 'revokeOperator',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"selfApproveFor"`
 */
export const writeSuperTokenSelfApproveFor = /*#__PURE__*/ createWriteContract({
  abi: superTokenAbi,
  functionName: 'selfApproveFor',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"selfBurn"`
 */
export const writeSuperTokenSelfBurn = /*#__PURE__*/ createWriteContract({
  abi: superTokenAbi,
  functionName: 'selfBurn',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"selfMint"`
 */
export const writeSuperTokenSelfMint = /*#__PURE__*/ createWriteContract({
  abi: superTokenAbi,
  functionName: 'selfMint',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"selfTransferFrom"`
 */
export const writeSuperTokenSelfTransferFrom =
  /*#__PURE__*/ createWriteContract({
    abi: superTokenAbi,
    functionName: 'selfTransferFrom',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"send"`
 */
export const writeSuperTokenSend = /*#__PURE__*/ createWriteContract({
  abi: superTokenAbi,
  functionName: 'send',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"settleBalance"`
 */
export const writeSuperTokenSettleBalance = /*#__PURE__*/ createWriteContract({
  abi: superTokenAbi,
  functionName: 'settleBalance',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"terminateAgreement"`
 */
export const writeSuperTokenTerminateAgreement =
  /*#__PURE__*/ createWriteContract({
    abi: superTokenAbi,
    functionName: 'terminateAgreement',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"transfer"`
 */
export const writeSuperTokenTransfer = /*#__PURE__*/ createWriteContract({
  abi: superTokenAbi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"transferAll"`
 */
export const writeSuperTokenTransferAll = /*#__PURE__*/ createWriteContract({
  abi: superTokenAbi,
  functionName: 'transferAll',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"transferFrom"`
 */
export const writeSuperTokenTransferFrom = /*#__PURE__*/ createWriteContract({
  abi: superTokenAbi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"updateAgreementData"`
 */
export const writeSuperTokenUpdateAgreementData =
  /*#__PURE__*/ createWriteContract({
    abi: superTokenAbi,
    functionName: 'updateAgreementData',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"updateAgreementStateSlot"`
 */
export const writeSuperTokenUpdateAgreementStateSlot =
  /*#__PURE__*/ createWriteContract({
    abi: superTokenAbi,
    functionName: 'updateAgreementStateSlot',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"updateCode"`
 */
export const writeSuperTokenUpdateCode = /*#__PURE__*/ createWriteContract({
  abi: superTokenAbi,
  functionName: 'updateCode',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"upgrade"`
 */
export const writeSuperTokenUpgrade = /*#__PURE__*/ createWriteContract({
  abi: superTokenAbi,
  functionName: 'upgrade',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"upgradeTo"`
 */
export const writeSuperTokenUpgradeTo = /*#__PURE__*/ createWriteContract({
  abi: superTokenAbi,
  functionName: 'upgradeTo',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"withdrawSurplusFromYieldBackend"`
 */
export const writeSuperTokenWithdrawSurplusFromYieldBackend =
  /*#__PURE__*/ createWriteContract({
    abi: superTokenAbi,
    functionName: 'withdrawSurplusFromYieldBackend',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"downgradeToETH"`
 */
export const writeSuperTokenDowngradeToEth = /*#__PURE__*/ createWriteContract({
  abi: superTokenAbi,
  functionName: 'downgradeToETH',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"upgradeByETH"`
 */
export const writeSuperTokenUpgradeByEth = /*#__PURE__*/ createWriteContract({
  abi: superTokenAbi,
  functionName: 'upgradeByETH',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"upgradeByETHTo"`
 */
export const writeSuperTokenUpgradeByEthTo = /*#__PURE__*/ createWriteContract({
  abi: superTokenAbi,
  functionName: 'upgradeByETHTo',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link superTokenAbi}__
 */
export const simulateSuperToken = /*#__PURE__*/ createSimulateContract({
  abi: superTokenAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"approve"`
 */
export const simulateSuperTokenApprove = /*#__PURE__*/ createSimulateContract({
  abi: superTokenAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"authorizeOperator"`
 */
export const simulateSuperTokenAuthorizeOperator =
  /*#__PURE__*/ createSimulateContract({
    abi: superTokenAbi,
    functionName: 'authorizeOperator',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"burn"`
 */
export const simulateSuperTokenBurn = /*#__PURE__*/ createSimulateContract({
  abi: superTokenAbi,
  functionName: 'burn',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"castrate"`
 */
export const simulateSuperTokenCastrate = /*#__PURE__*/ createSimulateContract({
  abi: superTokenAbi,
  functionName: 'castrate',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"changeAdmin"`
 */
export const simulateSuperTokenChangeAdmin =
  /*#__PURE__*/ createSimulateContract({
    abi: superTokenAbi,
    functionName: 'changeAdmin',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"createAgreement"`
 */
export const simulateSuperTokenCreateAgreement =
  /*#__PURE__*/ createSimulateContract({
    abi: superTokenAbi,
    functionName: 'createAgreement',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"decreaseAllowance"`
 */
export const simulateSuperTokenDecreaseAllowance =
  /*#__PURE__*/ createSimulateContract({
    abi: superTokenAbi,
    functionName: 'decreaseAllowance',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"disableYieldBackend"`
 */
export const simulateSuperTokenDisableYieldBackend =
  /*#__PURE__*/ createSimulateContract({
    abi: superTokenAbi,
    functionName: 'disableYieldBackend',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"downgrade"`
 */
export const simulateSuperTokenDowngrade = /*#__PURE__*/ createSimulateContract(
  { abi: superTokenAbi, functionName: 'downgrade' },
)

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"downgradeTo"`
 */
export const simulateSuperTokenDowngradeTo =
  /*#__PURE__*/ createSimulateContract({
    abi: superTokenAbi,
    functionName: 'downgradeTo',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"enableYieldBackend"`
 */
export const simulateSuperTokenEnableYieldBackend =
  /*#__PURE__*/ createSimulateContract({
    abi: superTokenAbi,
    functionName: 'enableYieldBackend',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"increaseAllowance"`
 */
export const simulateSuperTokenIncreaseAllowance =
  /*#__PURE__*/ createSimulateContract({
    abi: superTokenAbi,
    functionName: 'increaseAllowance',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"initialize"`
 */
export const simulateSuperTokenInitialize =
  /*#__PURE__*/ createSimulateContract({
    abi: superTokenAbi,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"initializeWithAdmin"`
 */
export const simulateSuperTokenInitializeWithAdmin =
  /*#__PURE__*/ createSimulateContract({
    abi: superTokenAbi,
    functionName: 'initializeWithAdmin',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"makeLiquidationPayoutsV2"`
 */
export const simulateSuperTokenMakeLiquidationPayoutsV2 =
  /*#__PURE__*/ createSimulateContract({
    abi: superTokenAbi,
    functionName: 'makeLiquidationPayoutsV2',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"operationApprove"`
 */
export const simulateSuperTokenOperationApprove =
  /*#__PURE__*/ createSimulateContract({
    abi: superTokenAbi,
    functionName: 'operationApprove',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"operationDecreaseAllowance"`
 */
export const simulateSuperTokenOperationDecreaseAllowance =
  /*#__PURE__*/ createSimulateContract({
    abi: superTokenAbi,
    functionName: 'operationDecreaseAllowance',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"operationDowngrade"`
 */
export const simulateSuperTokenOperationDowngrade =
  /*#__PURE__*/ createSimulateContract({
    abi: superTokenAbi,
    functionName: 'operationDowngrade',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"operationDowngradeTo"`
 */
export const simulateSuperTokenOperationDowngradeTo =
  /*#__PURE__*/ createSimulateContract({
    abi: superTokenAbi,
    functionName: 'operationDowngradeTo',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"operationIncreaseAllowance"`
 */
export const simulateSuperTokenOperationIncreaseAllowance =
  /*#__PURE__*/ createSimulateContract({
    abi: superTokenAbi,
    functionName: 'operationIncreaseAllowance',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"operationSend"`
 */
export const simulateSuperTokenOperationSend =
  /*#__PURE__*/ createSimulateContract({
    abi: superTokenAbi,
    functionName: 'operationSend',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"operationTransferFrom"`
 */
export const simulateSuperTokenOperationTransferFrom =
  /*#__PURE__*/ createSimulateContract({
    abi: superTokenAbi,
    functionName: 'operationTransferFrom',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"operationUpgrade"`
 */
export const simulateSuperTokenOperationUpgrade =
  /*#__PURE__*/ createSimulateContract({
    abi: superTokenAbi,
    functionName: 'operationUpgrade',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"operationUpgradeTo"`
 */
export const simulateSuperTokenOperationUpgradeTo =
  /*#__PURE__*/ createSimulateContract({
    abi: superTokenAbi,
    functionName: 'operationUpgradeTo',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"operatorBurn"`
 */
export const simulateSuperTokenOperatorBurn =
  /*#__PURE__*/ createSimulateContract({
    abi: superTokenAbi,
    functionName: 'operatorBurn',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"operatorSend"`
 */
export const simulateSuperTokenOperatorSend =
  /*#__PURE__*/ createSimulateContract({
    abi: superTokenAbi,
    functionName: 'operatorSend',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"permit"`
 */
export const simulateSuperTokenPermit = /*#__PURE__*/ createSimulateContract({
  abi: superTokenAbi,
  functionName: 'permit',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"revokeOperator"`
 */
export const simulateSuperTokenRevokeOperator =
  /*#__PURE__*/ createSimulateContract({
    abi: superTokenAbi,
    functionName: 'revokeOperator',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"selfApproveFor"`
 */
export const simulateSuperTokenSelfApproveFor =
  /*#__PURE__*/ createSimulateContract({
    abi: superTokenAbi,
    functionName: 'selfApproveFor',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"selfBurn"`
 */
export const simulateSuperTokenSelfBurn = /*#__PURE__*/ createSimulateContract({
  abi: superTokenAbi,
  functionName: 'selfBurn',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"selfMint"`
 */
export const simulateSuperTokenSelfMint = /*#__PURE__*/ createSimulateContract({
  abi: superTokenAbi,
  functionName: 'selfMint',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"selfTransferFrom"`
 */
export const simulateSuperTokenSelfTransferFrom =
  /*#__PURE__*/ createSimulateContract({
    abi: superTokenAbi,
    functionName: 'selfTransferFrom',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"send"`
 */
export const simulateSuperTokenSend = /*#__PURE__*/ createSimulateContract({
  abi: superTokenAbi,
  functionName: 'send',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"settleBalance"`
 */
export const simulateSuperTokenSettleBalance =
  /*#__PURE__*/ createSimulateContract({
    abi: superTokenAbi,
    functionName: 'settleBalance',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"terminateAgreement"`
 */
export const simulateSuperTokenTerminateAgreement =
  /*#__PURE__*/ createSimulateContract({
    abi: superTokenAbi,
    functionName: 'terminateAgreement',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"transfer"`
 */
export const simulateSuperTokenTransfer = /*#__PURE__*/ createSimulateContract({
  abi: superTokenAbi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"transferAll"`
 */
export const simulateSuperTokenTransferAll =
  /*#__PURE__*/ createSimulateContract({
    abi: superTokenAbi,
    functionName: 'transferAll',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"transferFrom"`
 */
export const simulateSuperTokenTransferFrom =
  /*#__PURE__*/ createSimulateContract({
    abi: superTokenAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"updateAgreementData"`
 */
export const simulateSuperTokenUpdateAgreementData =
  /*#__PURE__*/ createSimulateContract({
    abi: superTokenAbi,
    functionName: 'updateAgreementData',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"updateAgreementStateSlot"`
 */
export const simulateSuperTokenUpdateAgreementStateSlot =
  /*#__PURE__*/ createSimulateContract({
    abi: superTokenAbi,
    functionName: 'updateAgreementStateSlot',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"updateCode"`
 */
export const simulateSuperTokenUpdateCode =
  /*#__PURE__*/ createSimulateContract({
    abi: superTokenAbi,
    functionName: 'updateCode',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"upgrade"`
 */
export const simulateSuperTokenUpgrade = /*#__PURE__*/ createSimulateContract({
  abi: superTokenAbi,
  functionName: 'upgrade',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"upgradeTo"`
 */
export const simulateSuperTokenUpgradeTo = /*#__PURE__*/ createSimulateContract(
  { abi: superTokenAbi, functionName: 'upgradeTo' },
)

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"withdrawSurplusFromYieldBackend"`
 */
export const simulateSuperTokenWithdrawSurplusFromYieldBackend =
  /*#__PURE__*/ createSimulateContract({
    abi: superTokenAbi,
    functionName: 'withdrawSurplusFromYieldBackend',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"downgradeToETH"`
 */
export const simulateSuperTokenDowngradeToEth =
  /*#__PURE__*/ createSimulateContract({
    abi: superTokenAbi,
    functionName: 'downgradeToETH',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"upgradeByETH"`
 */
export const simulateSuperTokenUpgradeByEth =
  /*#__PURE__*/ createSimulateContract({
    abi: superTokenAbi,
    functionName: 'upgradeByETH',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"upgradeByETHTo"`
 */
export const simulateSuperTokenUpgradeByEthTo =
  /*#__PURE__*/ createSimulateContract({
    abi: superTokenAbi,
    functionName: 'upgradeByETHTo',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link superTokenAbi}__
 */
export const watchSuperTokenEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: superTokenAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link superTokenAbi}__ and `eventName` set to `"AdminChanged"`
 */
export const watchSuperTokenAdminChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: superTokenAbi,
    eventName: 'AdminChanged',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link superTokenAbi}__ and `eventName` set to `"AgreementCreated"`
 */
export const watchSuperTokenAgreementCreatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: superTokenAbi,
    eventName: 'AgreementCreated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link superTokenAbi}__ and `eventName` set to `"AgreementLiquidated"`
 */
export const watchSuperTokenAgreementLiquidatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: superTokenAbi,
    eventName: 'AgreementLiquidated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link superTokenAbi}__ and `eventName` set to `"AgreementLiquidatedBy"`
 */
export const watchSuperTokenAgreementLiquidatedByEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: superTokenAbi,
    eventName: 'AgreementLiquidatedBy',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link superTokenAbi}__ and `eventName` set to `"AgreementLiquidatedV2"`
 */
export const watchSuperTokenAgreementLiquidatedV2Event =
  /*#__PURE__*/ createWatchContractEvent({
    abi: superTokenAbi,
    eventName: 'AgreementLiquidatedV2',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link superTokenAbi}__ and `eventName` set to `"AgreementStateUpdated"`
 */
export const watchSuperTokenAgreementStateUpdatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: superTokenAbi,
    eventName: 'AgreementStateUpdated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link superTokenAbi}__ and `eventName` set to `"AgreementTerminated"`
 */
export const watchSuperTokenAgreementTerminatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: superTokenAbi,
    eventName: 'AgreementTerminated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link superTokenAbi}__ and `eventName` set to `"AgreementUpdated"`
 */
export const watchSuperTokenAgreementUpdatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: superTokenAbi,
    eventName: 'AgreementUpdated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link superTokenAbi}__ and `eventName` set to `"Approval"`
 */
export const watchSuperTokenApprovalEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: superTokenAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link superTokenAbi}__ and `eventName` set to `"AuthorizedOperator"`
 */
export const watchSuperTokenAuthorizedOperatorEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: superTokenAbi,
    eventName: 'AuthorizedOperator',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link superTokenAbi}__ and `eventName` set to `"Bailout"`
 */
export const watchSuperTokenBailoutEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: superTokenAbi,
    eventName: 'Bailout',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link superTokenAbi}__ and `eventName` set to `"Burned"`
 */
export const watchSuperTokenBurnedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: superTokenAbi,
    eventName: 'Burned',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link superTokenAbi}__ and `eventName` set to `"CodeUpdated"`
 */
export const watchSuperTokenCodeUpdatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: superTokenAbi,
    eventName: 'CodeUpdated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link superTokenAbi}__ and `eventName` set to `"EIP712DomainChanged"`
 */
export const watchSuperTokenEip712DomainChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: superTokenAbi,
    eventName: 'EIP712DomainChanged',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link superTokenAbi}__ and `eventName` set to `"Initialized"`
 */
export const watchSuperTokenInitializedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: superTokenAbi,
    eventName: 'Initialized',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link superTokenAbi}__ and `eventName` set to `"Minted"`
 */
export const watchSuperTokenMintedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: superTokenAbi,
    eventName: 'Minted',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link superTokenAbi}__ and `eventName` set to `"PoolAdminNFTCreated"`
 */
export const watchSuperTokenPoolAdminNftCreatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: superTokenAbi,
    eventName: 'PoolAdminNFTCreated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link superTokenAbi}__ and `eventName` set to `"RevokedOperator"`
 */
export const watchSuperTokenRevokedOperatorEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: superTokenAbi,
    eventName: 'RevokedOperator',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link superTokenAbi}__ and `eventName` set to `"Sent"`
 */
export const watchSuperTokenSentEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: superTokenAbi,
  eventName: 'Sent',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link superTokenAbi}__ and `eventName` set to `"TokenDowngraded"`
 */
export const watchSuperTokenTokenDowngradedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: superTokenAbi,
    eventName: 'TokenDowngraded',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link superTokenAbi}__ and `eventName` set to `"TokenUpgraded"`
 */
export const watchSuperTokenTokenUpgradedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: superTokenAbi,
    eventName: 'TokenUpgraded',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link superTokenAbi}__ and `eventName` set to `"Transfer"`
 */
export const watchSuperTokenTransferEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: superTokenAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link superTokenAbi}__ and `eventName` set to `"YieldBackendDisabled"`
 */
export const watchSuperTokenYieldBackendDisabledEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: superTokenAbi,
    eventName: 'YieldBackendDisabled',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link superTokenAbi}__ and `eventName` set to `"YieldBackendEnabled"`
 */
export const watchSuperTokenYieldBackendEnabledEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: superTokenAbi,
    eventName: 'YieldBackendEnabled',
  })
