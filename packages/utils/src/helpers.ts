import { ComposerResponse } from '@injectivelabs/ts-types'
import BigNumberInBase from './classes/BigNumber/BigNumberInBase'
import BigNumberInWei from './classes/BigNumber/BigNumberInWei'
import { DEFAULT_GAS_LIMIT, DEFAULT_GAS_PRICE } from './constants'

export const sleep = (timeout: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, timeout))

export const isServerSide = () => typeof window === 'undefined'

export const mapMultipleComposerResponseMessages = <T, R>(
  messages: ComposerResponse<T, R>[],
) =>
  messages.reduce(
    (
      messages: {
        web3GatewayMessage: R[]
        directBroadcastMessage: { type: string; message: T }[]
      },
      message,
    ) => {
      const web3GatewayMessage = Array.isArray(message.web3GatewayMessage)
        ? message.web3GatewayMessage
        : [message.web3GatewayMessage]

      const directBroadcastMessage = Array.isArray(
        message.directBroadcastMessage,
      )
        ? message.directBroadcastMessage
        : [message.directBroadcastMessage]

      return {
        web3GatewayMessage: [
          ...messages.web3GatewayMessage,
          ...web3GatewayMessage,
        ],
        directBroadcastMessage: [
          ...messages.directBroadcastMessage,
          ...directBroadcastMessage,
        ],
      }
    },
    {
      web3GatewayMessage: [] as R[],
      directBroadcastMessage: [] as { type: string; message: T }[],
    },
  )

export const getStdFeeForToken = (
  token: {
    denom: string
    decimals: number
  } = { denom: 'inj', decimals: 18 },
  gasPrice?: string,
) => {
  const gasPriceInBase =
    gasPrice || new BigNumberInWei(DEFAULT_GAS_PRICE).toBase()
  const gasPriceScaled = new BigNumberInBase(gasPriceInBase).toWei(
    token.decimals,
  )

  return {
    amount: [
      {
        denom: token.denom,
        amount: gasPriceScaled.toString(),
      },
    ],
    gas: DEFAULT_GAS_LIMIT.toString(),
  }
}
