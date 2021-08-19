const { Client, PrivateKey } = require('@hiveio/dhive');
const axios = require('axios');
const {
  getEnableStakingParams,
  createNewTokenParams,
  getTransferParams,
  getIssueParams,
  getBalance,
} = require('./contracts/tokensContract');

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

// (async () => {
//   const account = {
//     name: 'flowmaster',
//     key: activeKey,
//   };
//   const json = getTransferParams();
//   const yo = await broadcastCustomJSON({ account, json });
//   console.log('yo');
// })();

// (async () => {
//   const url = 'https://enginetestnet.ryamer.com/contracts';
//   const account = { name: 'flowmaster' };
//   const { data: { result = [] } } = await getBalance(url, account);
//   console.log('yo');
// })();
