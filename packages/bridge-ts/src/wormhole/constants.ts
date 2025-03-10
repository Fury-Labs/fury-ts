import { Network } from '@injectivelabs/networks'
import { CHAINS, CONTRACTS } from '@certusone/wormhole-sdk'

export const WORMHOLE_CONTRACT_BY_NETWORK = {
  [Network.Testnet]: CONTRACTS.TESTNET.injective,
  [Network.TestnetK8s]: CONTRACTS.TESTNET.injective,
}

export const WORMHOLE_SOLANA_CONTRACT_BY_NETWORK = {
  [Network.Testnet]: CONTRACTS.TESTNET.solana,
  [Network.TestnetK8s]: CONTRACTS.TESTNET.solana,
}

export const WORMHOLE_ETHEREUM_CONTRACT_BY_NETWORK = {
  [Network.Testnet]: CONTRACTS.TESTNET.ethereum,
  [Network.TestnetK8s]: CONTRACTS.TESTNET.ethereum,
}

export const WORMHOLE_CHAINS = CHAINS

export const WORMHOLE_CONTRACTS = CONTRACTS
