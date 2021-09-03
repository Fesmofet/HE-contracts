// 211e07bbea652755e1af99fcfd1a494ae12427ad

// fbd1abcc41406ac9f90a88255805d5eb39f1c1dd

exports.createCommentsContractParams = () => {
  const create = [{
    contractName: 'comments',
    contractAction: 'createRewardPool',
    contractPayload: {
      symbol: 'FES',
      config: {
        postRewardCurve: 'power',
        postRewardCurveParameter: '1',
        curationRewardCurve: 'power',
        curationRewardCurveParameter: '0.5',
        curationRewardPercentage: 50,
        cashoutWindowDays: 7,
        rewardPerInterval: '1.5',
        rewardIntervalSeconds: 3,
        voteRegenerationDays: 2,
        downvoteRegenerationDays: 2,
        stakedRewardPercentage: 50,
        votePowerConsumption: 200,
        downvotePowerConsumption: 2000,
        tags: ['festest'],
      },
    },
  }];
  return JSON.stringify(create);
};
