const config = require('../config');

const tankerBillGeneration = (totalWaterConsumedByGuests) => {
  let totalCost = 0;
  let slabs = Object.keys(config.tanker_costs);
  let init = 0;

  for (let slab of slabs) {
    let diff = slab - init;
    if (totalWaterConsumedByGuests > diff) {
      totalWaterConsumedByGuests -= diff;
      totalCost += diff * config.tanker_costs[slab];
    } else {
      totalCost += totalWaterConsumedByGuests * config.tanker_costs[slab];
      totalWaterConsumedByGuests = 0;
    }
    init = slab;
  }

  if (totalWaterConsumedByGuests > 0) {
    totalCost +=
      totalWaterConsumedByGuests * config.tanker_costs[Number.MAX_SAFE_INTEGER];
  }
  return totalCost;
};

module.exports = tankerBillGeneration;
