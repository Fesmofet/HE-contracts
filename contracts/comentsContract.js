// 74ce54992276dd12bff9e141a511e2663dbedf74

exports.createCommentsContractParams = () => {
  const create = [{
    contractName: 'comments',
    contractAction: 'createRewardPool',
    contractPayload: {
      symbol: 'POINT',
      config: {
        postRewardCurve: 'power',
        postRewardCurveParameter: '1', // can be at most 2. The decimal precision of this parameter can be at most 2.
        curationRewardCurve: 'power',
        curationRewardCurveParameter: '1', // can be at most 2. 1 - linear
        curationRewardPercentage: 50,
        cashoutWindowDays: 1,
        rewardPerInterval: '10',
        rewardIntervalSeconds: 3,
        voteRegenerationDays: 2,
        downvoteRegenerationDays: 2,
        stakedRewardPercentage: 50,
        votePowerConsumption: 200,
        downvotePowerConsumption: 2000,
        tags: ['pointtest', 'pointpost'],
      },
    },
  }];
  return JSON.stringify(create);
};

exports.activateCommentsContract = () => {
  const activateData = [{
    contractName: 'comments',
    contractAction: 'setActive',
    contractPayload: {
      rewardPoolId: 8,
      active: true,
    },
  }];

  return JSON.stringify(activateData);
};
