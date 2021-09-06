const axios = require('axios');

// 9c9eac146e4933f6453e186aca66142970324dbd

exports.createNewTokenParams = () => {
  const tokenSettings = [{
    contractName: 'tokens',
    contractAction: 'create',
    contractPayload: {
      // symbol: 'FES',
      symbol: 'POINT',
      name: 'point token',
      precision: 8,
      maxSupply: '1000000000000',
      url: 'point.test',
    },
  }];
  return JSON.stringify(tokenSettings);
};
// cae249d3c35dc0a665895357210bf8e1d284d3ba
exports.getIssueParams = () => {
  const issueData = [{
    contractName: 'tokens',
    contractAction: 'issue',
    contractPayload: {
      symbol: 'POINT',
      to: 'flowmaster',
      quantity: '1000',
    },
  }];
  return JSON.stringify(issueData);
};

exports.getTransferParams = () => {
  const transferData = [{
    contractName: 'tokens',
    contractAction: 'transfer',
    contractPayload: {
      symbol: 'FES',
      to: 'fesmofet',
      quantity: '0.1',
    },
  }];
  return JSON.stringify(transferData);
};

exports.getTransferOwnershipParams = () => {
  const ownershipData = [{
    contractName: 'tokens',
    contractAction: 'transferOwnership',
    contractPayload: {
      symbol: 'FEST',
      to: 'fesmofet',
    },
  }];
  return JSON.stringify(ownershipData);
};

// ###############################################################################################
// ed6e9c28606b75096b6b3b48db4e12d7bb1d2ccd
exports.getEnableStakingParams = () => {
  const stackingData = [{
    contractName: 'tokens',
    contractAction: 'enableStaking',
    contractPayload: {
      symbol: 'POINT',
      unstakingCooldown: 28, // 1 days to cooldown
      numberTransactions: 4, // 4 transaction / day
    },
  }];
  return JSON.stringify(stackingData);
};

exports.getStakeParams = () => {
  const stackingData = [
    {
      contractName: 'tokens',
      contractAction: 'stake',
      contractPayload: {
        to: 'flowmaster',
        symbol: 'POINT',
        quantity: '1000',
      },
    },
  ];
  return JSON.stringify(stackingData);
};

exports.getUnStakeParams = () => {
  const stackingData = [{
    contractName: 'tokens',
    contractAction: 'unstake',
    contractPayload: {
      symbol: 'FES',
      quantity: '2',
    },
  }];
  return JSON.stringify(stackingData);
};

/// /////////////////////////////////////////////////////////////////////////////////////

exports.getEnableDelegationParams = () => {
  const enableDelegationData = [{
    contractName: 'tokens',
    contractAction: 'enableDelegation',
    contractPayload: {
      symbol: 'POINT',
      undelegationCooldown: 1, // 1 day to cooldown
    },
  }];
  return JSON.stringify(enableDelegationData);
};

/// /////////////////////////////////////////////////////////////////////////////////////////
/**
  start of get tables tokens contract
 */
exports.getBalance = async (
  hostUrl = 'https://enginetestnet.ryamer.com/contracts',
  account,
) => {
  try {
    const instance = axios.create();
    const resp = await instance.post(
      hostUrl,
      {
        jsonrpc: '2.0',
        method: 'find',
        params: { contract: 'tokens', table: 'balances', query: { account: account.name } },
        id: 'ssc-testnet-hive',
      },
    );
    return resp;
  } catch (error) {
    return { error };
  }
};

exports.getTransactionInfo = async ({
  hostUrl = 'https://enginetestnet.ryamer.com/blockchain',
  id = '',
}) => {
  try {
    const instance = axios.create();
    const resp = await instance.post(
      hostUrl,
      {
        jsonrpc: '2.0',
        method: 'getTransactionInfo',
        params: { txid: id },
        id: 'ssc-testnet-hive',
      },
    );
    return resp;
  } catch (error) {
    return { error };
  }
};

const engineEverything = async ({
  // hostUrl = 'https://enginetestnet.ryamer.com/contracts',
  // hostUrl = 'https://enginetestnet.rishipanthee.com/contracts',
  hostUrl = 'http://65.21.50.97:5000/contracts',
  contract,
  table,
  query,
}) => {
  try {
    const instance = axios.create();
    const resp = await instance.post(
      hostUrl,
      {
        jsonrpc: '2.0',
        method: 'find',
        params: { contract, table, query },
        id: 'ssc-testnet-hive',
        // id: 'ssc-mainnet-hive',
      },
    );
    return resp;
  } catch (error) {
    return { error };
  }
};

exports.tokenHolders = engineEverything({ contract: 'tokens', table: 'balances', query: { symbol: { $in: ['FES', 'POINT'] } } });
exports.tokenMetrix = engineEverything({ contract: 'market', table: 'metrics', query: { symbol: 'FES' } });
/**
 * circulatingSupply - amount circulating
 *
 */
exports.tokenSupply = engineEverything({ contract: 'tokens', table: 'tokens', query: { symbol: { $in: ['FES', 'POINT'] } } });

exports.holderFunds = engineEverything({ contract: 'tokens', table: 'balances', query: { account: 'flowmaster' } });

exports.comentsContractsQuery = engineEverything({
  contract: 'comments',
  table: 'params',
  query: {},
  // hostUrl: 'https://api.hive-engine.com/rpc/contracts',
});

exports.comentsPoolsQuery = engineEverything({
  contract: 'comments',
  table: 'rewardPools',
  query: { _id: 8 },
});
exports.comentsPostsQuery = engineEverything({
  contract: 'comments',
  table: 'posts',
  query: { rewardPoolId: 8 },
});

exports.proposalsDTFQuery = engineEverything({
  contract: 'tokenfunds',
  table: 'proposals',
  query: { fundId: 'FES:FES' },
});

// 1000000000000
// 21024000000
