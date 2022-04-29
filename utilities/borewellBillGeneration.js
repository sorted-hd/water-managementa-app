const config = require('../config');

const borewellBillGeneration = (unitCost, ratio) => {
  let total = unitCost * ratio * config.costs.BOREWELL_WATER;
  return total;
};

module.exports = borewellBillGeneration;
