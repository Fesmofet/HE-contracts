// e32bb7e22ff46b7ba9358d2899ecc20b228bae15
exports.marketSellParams = () => {
  const sellSettings = [{
    contractName: 'market',
    contractAction: 'sell',
    contractPayload: {
      symbol: 'FES',
      quantity: '10',
      price: '0.5',
    },
  }];
  return JSON.stringify(sellSettings);
};
