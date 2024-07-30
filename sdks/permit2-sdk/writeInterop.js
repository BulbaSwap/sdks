const fs = require('fs')
const { AllowanceTransfer, SignatureTransfer } = require('./dist')

const PERMIT2_ADDRESS = '0x9a5450d9c71fa9d6bF8Df25e49313D7C3C42de60'
const TOKEN_ADDRESS = '0xb9728f6DE23E1Beeb7Bab38cbf0e60C0A48136eC'
const SPENDER_ADDRESS = '0x0000000000000000000000000000000000000001'
const EXPIRATION = '10000000000000'
const AMOUNT = '1000000000000000000'
const chainId = 2810

const interop = {
  _PERMIT_HASH: AllowanceTransfer.hash(
    {
      details: {
        token: TOKEN_ADDRESS,
        amount: AMOUNT,
        expiration: EXPIRATION,
        nonce: 0,
      },
      spender: SPENDER_ADDRESS,
      sigDeadline: EXPIRATION,
    },
    PERMIT2_ADDRESS,
    chainId
  ),

  _PERMIT_BATCH_HASH: AllowanceTransfer.hash(
    {
      details: [
        {
          token: TOKEN_ADDRESS,
          amount: AMOUNT,
          expiration: EXPIRATION,
          nonce: 0,
        },
      ],
      spender: SPENDER_ADDRESS,
      sigDeadline: EXPIRATION,
    },
    PERMIT2_ADDRESS,
    chainId
  ),

  _PERMIT_TRANSFER: SignatureTransfer.hash(
    {
      permitted: {
        token: TOKEN_ADDRESS,
        amount: AMOUNT,
      },
      spender: SPENDER_ADDRESS,
      nonce: '0',
      deadline: EXPIRATION,
    },
    PERMIT2_ADDRESS,
    chainId
  ),

  _PERMIT_TRANSFER_BATCH: SignatureTransfer.hash(
    {
      permitted: [
        {
          token: TOKEN_ADDRESS,
          amount: AMOUNT,
        },
      ],
      spender: SPENDER_ADDRESS,
      nonce: '0',
      deadline: EXPIRATION,
    },
    PERMIT2_ADDRESS,
    chainId
  ),

  _PERMIT_TRANSFER_WITNESS: SignatureTransfer.hash(
    {
      permitted: {
        token: TOKEN_ADDRESS,
        amount: AMOUNT,
      },
      spender: SPENDER_ADDRESS,
      nonce: '0',
      deadline: EXPIRATION,
    },
    PERMIT2_ADDRESS,
    chainId,
    {
      witnessTypeName: 'MockWitness',
      witnessType: { MockWitness: [{ name: 'mock', type: 'uint256' }] },
      witness: { mock: '0' },
    }
  ),
}

fs.writeFileSync('./test/interop.json', JSON.stringify(interop))
