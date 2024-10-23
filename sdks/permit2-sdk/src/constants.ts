import { BigNumber } from '@ethersproject/bignumber'

// @deprecated please use permit2Address(chainId: number)
export const PERMIT2_ADDRESS = '0x000000000022D473030F116dDEE9F6B43aC78BA3'

export function permit2Address(chainId?: number): string {
  switch (chainId) {
    case 324:
      return '0x0000000000225e31D15943971F47aD3022F714Fa'
    case 2810:
      return '0x9a5450d9c71fa9d6bF8Df25e49313D7C3C42de60'
    case 2818:
      return '0x90a8a8E2Abb67d300593C714b687De109B4bCE5e'
    default:
      return PERMIT2_ADDRESS
  }
}

export const MaxUint48 = BigNumber.from('0xffffffffffff')
export const MaxUint160 = BigNumber.from('0xffffffffffffffffffffffffffffffffffffffff')
export const MaxUint256 = BigNumber.from('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')

// alias max types for their usages
// allowance transfer types
export const MaxAllowanceTransferAmount = MaxUint160
export const MaxAllowanceExpiration = MaxUint48
export const MaxOrderedNonce = MaxUint48

// signature transfer types
export const MaxSignatureTransferAmount = MaxUint256
export const MaxUnorderedNonce = MaxUint256
export const MaxSigDeadline = MaxUint256

export const InstantExpiration: BigNumber = BigNumber.from(0)
