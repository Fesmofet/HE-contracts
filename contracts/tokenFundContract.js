// 1cad60c529bf60228061e5ba599e1fbf0d88f204

// FES:FES

exports.createFundParams = () => {
  const create = [{
    contractName: 'tokenfunds',
    contractAction: 'createFund',
    contractPayload: {
      payToken: 'FES',
      voteToken: 'FES',
      voteThreshold: '100',
      maxDays: '3',
      maxAmountPerDay: '10000',
      proposalFee: {
        method: 'issuer',
        symbol: 'FES',
        amount: '1',
      },
      isSignedWithActiveKey: true,
    },
  }];
  return JSON.stringify(create);
};

// 62df6cc3f56b4d3609e995683c2c0af52486d9cd
exports.activateFundContract = () => {
  const activate = [{
    contractName: 'tokenfunds',
    contractAction: 'setDtfActive',
    contractPayload: {
      fundId: 'FES:FES',
      active: true,
      isSignedWithActiveKey: true,
    },
  }];
  return JSON.stringify(activate);
};
