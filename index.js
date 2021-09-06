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
  comentsContractsQuery,
  proposalsDTFQuery,
  comentsPoolsQuery,
  comentsPostsQuery,
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
const {
  activateCommentsContract,
  createCommentsContractParams,
} = require('./contracts/comentsContract');

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
//   // const { data: { result = [] } } = await getBalance(url, account);
//
//   const { data: { result: holders } } = await tokenHolders;
//   const { data: { result: metrix } } = await tokenMetrix;
//   const { data: { result: aboutToken } } = await tokenSupply;
//   const { data: { result: myFunds } } = await holderFunds;
//   const { data: { result: comentsContracts } } = await comentsContractsQuery;
//   const { data: { result: proposals } } = await proposalsDTFQuery;
//   const { data: { result: commentPools } } = await comentsPoolsQuery;
//   const { data: { result: commentPosts } } = await comentsPostsQuery;
//   console.log('yo');
// })();

// (async () => {
//   const { data: { result } } = await getTransactionInfo({
//     hostUrl: 'http://65.21.50.97:5000/blockchain',
//     id: '74ce54992276dd12bff9e141a511e2663dbedf74',
//   });
//   console.log('yo');
// })();
