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
      symbol: 'FEST',
      to: 'flowmaster',
      quantity: '23',
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

exports.getStakeParams = () => {
  const stackingData = [
    {
      contractName: 'tokens',
      contractAction: 'stake',
      contractPayload: {
        to: 'daine-cherry',
        symbol: 'FES',
        quantity: '10',
      },
    },
    {
      contractName: 'tokens',
      contractAction: 'stake',
      contractPayload: {
        to: 'daine-cherry2',
        symbol: 'FES',
        quantity: '10',
      },
    },
    {
      contractName: 'tokens',
      contractAction: 'stake',
      contractPayload: {
        to: 'daine-cherry3',
        symbol: 'FES',
        quantity: '10',
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
      symbol: 'FES',
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
  hostUrl = 'https://enginetestnet.ryamer.com/contracts',
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
      },
    );
    return resp;
  } catch (error) {
    return { error };
  }
};

exports.tokenHolders = engineEverything({ contract: 'tokens', table: 'balances', query: { symbol: 'FES' } });
exports.tokenMetrix = engineEverything({ contract: 'market', table: 'metrics', query: { symbol: 'FES' } });
/**
 * circulatingSupply - amount circulating
 *
 */
exports.tokenSupply = engineEverything({ contract: 'tokens', table: 'tokens', query: { symbol: 'FES' } });

exports.holderFunds = engineEverything({ contract: 'tokens', table: 'balances', query: { account: 'flowmaster' } });
