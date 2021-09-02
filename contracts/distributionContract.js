// 88b12e3b7bb5b2abe88026bb852d1ed893d69894
// a756603d310f81a6243f02a33c0ec15a7a41e950

// adb828d9197750b026b2dfd817f0bd721682231d

// c993874aa4cd66db2a0ecdee78987b0f0a171773

// c62c83969665abfd398de9939bcf6daf429b3f20

exports.distributionContractPollParams = () => {
  const distributionContract = [{
    strategy: 'pool',
    numTicks: '10',
    tokenPair: 'FES:FES',
    excludeAccount: ['fesmofet'],
    bonusCurve: {
      numPeriods: '5',
      periodBonusPct: '10',
    },
  },
  ];
  return JSON.stringify(distributionContract);
};

// 7a6a84fdf476d96e60eabfca47411e2a453e722b

exports.distributionContractFixedParams = () => {
  const ditributionContract = [{
    strategy: 'pool',
    numTicks: '10',
    tokenMinPayout: [
      {
        symbol: 'FES',
        quantity: 10,
      },
    ],
    tokenRecipients: [
      {
        account: 'wiv01',
        type: 'user',
        pct: 100,
      },
    ],
    isSignedWithActiveKey: true,
  }];
  return JSON.stringify(ditributionContract);
};
