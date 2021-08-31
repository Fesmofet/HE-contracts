// a6577f046cebb97b04cd94c4c71aaaf78603babd
// id FES:FES

exports.createMiningPoolParams = () => {
  const miningPoolData = [
    {
      contractName: 'mining',
      contractAction: 'createPool',
      contractPayload: {
        lotteryWinners: 1,
        lotteryIntervalHours: 1,
        lotteryAmount: '1',
        minedToken: 'FES',
        tokenMiners: [
          { symbol: 'FES', multiplier: 1 },
        ],
      },
    },
  ];
  return JSON.stringify(miningPoolData);
};

// c700215d4b61586ab2813ce1a8a5163c079a448a
exports.setActiveMiningParams = () => {
  const miningPoolData = [
    {
      contractName: 'mining',
      contractAction: 'setActive',
      contractPayload: {
        id: 'FES:FES',
        active: false,
      },
    },
  ];
  return JSON.stringify(miningPoolData);
};
