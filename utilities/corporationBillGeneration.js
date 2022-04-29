const config = require('../config');

const corporationBillGeneration = (unitCost, ratio) => {
  return unitCost * ratio * config.costs.CORPORATION_WATER;
};

module.exports = corporationBillGeneration;
