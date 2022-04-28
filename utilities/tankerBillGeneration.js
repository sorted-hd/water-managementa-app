const config = require('../config');

const tankerBillGeneration = (totalWaterConsumedByGuests) => {
  let totalCost = 0;
  let slabs = Object.keys(config.tanker_costs);

  for (let slab of slabs) {
    if (totalWaterConsumedByGuests > slab) {
      totalWaterConsumedByGuests -= slab;
      totalCost += slab * config.tanker_costs[slab];
    } else {
      totalCost += totalWaterConsumedByGuests * config.tanker_costs[slab];
      totalWaterConsumedByGuests = 0;
    }
  }

  if (totalWaterConsumedByGuests > 0) {
    totalCost +=
      totalWaterConsumedByGuests * config.tanker_costs[Number.MAX_SAFE_INTEGER];
  }
  return totalCost;
};

module.exports = tankerBillGeneration;
