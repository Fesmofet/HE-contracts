const axios = require('axios');

exports.createNewTokenParams = () => {
  const tokenSettings = [{
    contractName: 'tokens',
    contractAction: 'create',
    contractPayload: {
      symbol: 'FES',
      name: 'point token',
      precision: 8,
      maxSupply: '1000000000000',
      url: 'myapp.com',
    },
  }];
  return JSON.stringify(tokenSettings);
};

exports.getIssueParams = () => {
  const issueData = [{
    contractName: 'tokens',
    contractAction: 'issue',
    contractPayload: {
      symbol: 'FES',
      to: 'flowmaster',
      quantity: '1',
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

exports.getEnableStakingParams = () => {
  const stackingData = [{
    contractName: 'tokens',
    contractAction: 'enableStaking',
    contractPayload: {
      symbol: 'FES',
      unstakingCooldown: 1, // 1 days to cooldown
      numberTransactions: 4, // 4 transaction / day
    },
  }];
  return JSON.stringify(stackingData);
};

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
