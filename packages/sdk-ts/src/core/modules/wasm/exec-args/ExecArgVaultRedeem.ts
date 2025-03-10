import {
  dataToExecData,
  ExecArgsBase,
  ExecDataRepresentation,
} from '../../ExecArgsBase'

export declare namespace ExecArgVaultRedeem {
  export interface Params {
    vaultSubaccountId: string
    redeemerSubaccountId: string
    redemptionType: string
    origin: string
  }

  export interface Data {
    vault_subaccount_id: string
    redeemer_subaccount_id: string
    redemption_type: string
  }
}

/**
 * @category Contract Exec Arguments
 */
export default class ExecArgVaultRedeem extends ExecArgsBase<
  ExecArgVaultRedeem.Params,
  ExecArgVaultRedeem.Data
> {
  static fromJSON(params: ExecArgVaultRedeem.Params): ExecArgVaultRedeem {
    return new ExecArgVaultRedeem(params)
  }

  toData(): ExecArgVaultRedeem.Data {
    const { params } = this

    return {
      vault_subaccount_id: params.vaultSubaccountId,
      redeemer_subaccount_id: params.redeemerSubaccountId,
      redemption_type: params.redemptionType,
    }
  }

  toExecData(): ExecDataRepresentation<ExecArgVaultRedeem.Data> {
    const { params } = this

    return dataToExecData(this.toData(), {
      origin: params.origin,
      name: 'VaultRedeem',
      action: 'Redeem',
    })
  }
}
