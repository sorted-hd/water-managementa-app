const config = require('../config');

const borewellBillGeneration = (totalWaterConsumed, totalRatio, ratio) => {
  let total =
    Math.round(totalWaterConsumed / totalRatio) *
    ratio *
    config.costs.BOREWELL_WATER;
  return total;
};

module.exports = borewellBillGeneration;
