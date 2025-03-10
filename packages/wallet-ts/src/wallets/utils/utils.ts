import {
  getAddressFromInjectiveAddress,
  getInjectiveAddress,
  Msgs,
} from '@injectivelabs/sdk-ts'
import {
  BigNumberInBase,
  DEFAULT_EXCHANGE_LIMIT,
  DEFAULT_GAS_LIMIT,
} from '@injectivelabs/utils'

export const getGasPriceBasedOnMessage = (msgs: Msgs[]): number => {
  const hasMultipleMessages = Array.isArray(msgs)
  const isMsgExecMessage = (message: Msgs) =>
    message.toWeb3()['@type'].includes('MsgExec')

  const hasMsgExecMessages = Array.isArray(msgs)
    ? msgs.some(isMsgExecMessage)
    : isMsgExecMessage(msgs)

  if (hasMsgExecMessages) {
    return DEFAULT_GAS_LIMIT * 1.2
  }

  const isExchangeMessage = (message: Msgs) =>
    message.toWeb3()['@type'].startsWith('/injective')
  const hasExchangeMessages = Array.isArray(msgs)
    ? msgs.some(isExchangeMessage)
    : isExchangeMessage(msgs)

  return new BigNumberInBase(
    hasExchangeMessages ? DEFAULT_EXCHANGE_LIMIT : DEFAULT_GAS_LIMIT,
  )
    .times(hasMultipleMessages ? msgs.length : 1)
    .toNumber()
}

export const getInjectiveSignerAddress = (address: string | undefined) => {
  if (!address) {
    return ''
  }

  if (address.startsWith('inj')) {
    return address
  }

  if (address.startsWith('0x')) {
    return getInjectiveAddress(address)
  }

  return ''
}

export const getEthereumSignerAddress = (address: string | undefined) => {
  if (!address) {
    return ''
  }

  if (address.startsWith('0x')) {
    return address
  }

  if (address.startsWith('inj')) {
    return getAddressFromInjectiveAddress(address)
  }

  return ''
}
