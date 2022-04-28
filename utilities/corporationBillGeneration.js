const config = require('../config');

const corporationBillGeneration = (totalWaterConsumed, totalRatio, ratio) => {
  let total =
    Math.round(totalWaterConsumed / totalRatio) *
    ratio *
    config.costs.CORPORATION_WATER;
  return total;
};

module.exports = corporationBillGeneration;
