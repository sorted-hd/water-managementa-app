const config = require('../config');
const borewellBillGeneration = require('./borewellBillGeneration');
const corporationBillGeneration = require('./corporationBillGeneration');
const tankerBillGeneration = require('./tankerBillGeneration');

const billGeneration = (inputData) => {
  let totalCost = 0;
  let totalWaterConsumed = 0;
  let totalWaterConsumedByGuests = 0;
  let unitCost = 0;
  let ratio = [];

  try {
    inputData.forEach((input) => {
      const inputValues = input.trim().split(' ');

      if (inputValues[0] === config.constants.ALLOT_WATER) {
        let noOfPeople = config.capacity[Number(inputValues[1])];
        totalWaterConsumed +=
          config.NO_OF_DAYS * config.WATER_PER_DAY * noOfPeople;

        ratio = inputValues[2].split(':').map(Number);

        unitCost = totalWaterConsumed / (ratio[0] + ratio[1]);
      }
      if (inputValues[0] === config.constants.ADD_GUESTS) {
        let waterConsumed =
          Number(inputValues[1]) * config.NO_OF_DAYS * config.WATER_PER_DAY;
        totalWaterConsumed += waterConsumed;
        totalWaterConsumedByGuests += waterConsumed;
      }
    });

    totalCost = Math.ceil(
      corporationBillGeneration(unitCost, ratio[0]) +
        borewellBillGeneration(unitCost, ratio[1]) +
        tankerBillGeneration(totalWaterConsumedByGuests)
    );

    return { totalWaterConsumed, totalCost };
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = billGeneration;
