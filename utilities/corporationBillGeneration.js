const config = require('../config');

const corporationBillGeneration = (unitCost, ratio) => {
  let total = unitCost * ratio * config.costs.CORPORATION_WATER;
  return total;
};

module.exports = corporationBillGeneration;
