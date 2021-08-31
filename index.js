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
} = require('./contracts/tokensContract');

const {
  createMiningPoolParams,
  setActiveMiningParams,
} = require('./contracts/miningContract');

const { marketSellParams } = require('./contracts/marketContract');

// ssc-testnet-hive chain id

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

(async () => {
  const account = {
    name: 'flowmaster',
    key: activeKey,
  };
  const json = setActiveMiningParams();
  // const json = getTransferOwnershipParams();
  const yo = await broadcastCustomJSON({ account, json });
  console.log('yo');
})();

// (async () => {
//   const url = 'https://enginetestnet.ryamer.com/contracts';
//   const account1 = { name: 'flowmaster' };
//   const account2 = { name: 'fesmofet' };
//   const account3 = { name: 'wiv01' };
//   // const { data: { result = [] } } = await getBalance(url, account);
//   const holders = await tokenHolders;
//   const metrix = await tokenMetrix;
//   const aboutToken = await tokenSupply;
//   console.log('yo');
// })();

// (async () => {
//   const yo = await getTransactionInfo({ id: 'c700215d4b61586ab2813ce1a8a5163c079a448a' });
//   console.log('yo');
// })();
