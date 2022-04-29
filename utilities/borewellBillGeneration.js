const config = require('../config');

const borewellBillGeneration = (unitCost, ratio) => {
  return unitCost * ratio * config.costs.BOREWELL_WATER;
};

module.exports = borewellBillGeneration;
