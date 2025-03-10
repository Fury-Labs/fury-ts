import { GrpcUnaryRequestException } from './GrpcUnaryRequestException'
import { HttpRequestException } from './HttpRequestException'
import { Web3Exception } from './Web3Exception'
import { GeneralException } from './GeneralException'
import { LedgerException } from './LedgerException'
import { MetamaskException } from './MetamaskException'
import { TrezorException } from './TrezorException'
import { CosmosWalletException } from './CosmosWalletException'
import { TransactionException } from './TransactionException'
import { Web3GatewayTransactionException } from './Web3GatewayTransactionException'
import { WalletException } from './WalletException'
import { Exception } from '../types'
import { ConcreteException } from '../exception'

export type ThrownException =
  | GrpcUnaryRequestException
  | HttpRequestException
  | Web3Exception
  | GeneralException
  | LedgerException
  | MetamaskException
  | TrezorException
  | CosmosWalletException
  | TransactionException
  | WalletException
  | Web3GatewayTransactionException

export const isThrownException = (exception: Error | Exception): boolean => {
  if (exception instanceof ConcreteException) {
    return true
  }

  if (
    [
      'GrpcUnaryRequestException',
      'HttpRequestException',
      'Web3Exception',
      'GeneralException',
      'LedgerException',
      'MetamaskException',
      'TrezorException',
      'CosmosWalletException',
      'TransactionException',
      'WalletException',
      'Web3GatewayTransactionException',
    ].includes(exception.constructor.name)
  ) {
    return true
  }

  return false
}

export {
  GrpcUnaryRequestException,
  HttpRequestException,
  Web3Exception,
  GeneralException,
  LedgerException,
  MetamaskException,
  TrezorException,
  CosmosWalletException,
  TransactionException,
  WalletException,
  Web3GatewayTransactionException,
}
