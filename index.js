const { Client, PrivateKey } = require('@hiveio/dhive');
const axios = require('axios');
const {
  getTransferOwnershipParams,
  getEnableDelegationParams,
  getEnableStakingParams,
  createNewTokenParams,
  getTransferParams,
  getTransactionInfo,
  getUnStakeParams,
  getIssueParams,
  getStakeParams,
  getBalance,
  tokenMetrix,
  tokenHolders,
  tokenSupply,
  holderFunds,
} = require('./contracts/tokensContract');

const {
  createMiningPoolParams,
  setActiveMiningParams,
} = require('./contracts/miningContract');

const { marketSellParams } = require('./contracts/marketContract');
const {
  distributionContractPollParams,
  distributionContractFixedParams,
} = require('./contracts/distributionContract');
const {
  createFundParams,
  activateFundContract,
} = require('./contracts/tokenFundContract');

// ssc-testnet-hive chain id
// ssc-mainnet-hive

const client = new Client('https://api.hive.blog', { failoverThreshold: 0, timeout: 10 * 1000 });
const activeKey = process.env.ACTIVE_KEY;
const postingKey = process.env.POSTING_KEY;

/**
  Get balance
 */
const broadcastCustomJSON = async ({
  id = 'ssc-testnet-hive',
  json,
  account,
}) => {
  try {
    return {
      result: await client.broadcast.json({
        id,
        json,
        required_auths: [account.name],
        required_posting_auths: [],
      },
      PrivateKey.fromString(account.key)),
    };
  } catch (error) {
    console.error(error.message);
    return { error };
  }
};

// (async () => {
//   const account = {
//     name: 'flowmaster',
//     key: activeKey,
//   };
//   const json = getStakeParams();
//   const yo = await broadcastCustomJSON({ account, json });
//   console.log('yo');
// })();

// (async () => {
//   const url = 'https://enginetestnet.ryamer.com/contracts';
//   const account1 = { name: 'flowmaster' };
//   const account2 = { name: 'fesmofet' };
//   const account3 = { name: 'wiv01' };
//   // const { data: { result = [] } } = await getBalance(url, account);
//   const holders = await tokenHolders;
//   const metrix = await tokenMetrix;
//   const aboutToken = await tokenSupply;
//   const { data: { result: myFunds } } = await holderFunds;
//   console.log('yo');
// })();

// (async () => {
//   const { data } = await getTransactionInfo({ id: '1cad60c529bf60228061e5ba599e1fbf0d88f204' });
//   console.log('yo');
// })();
