const config = require('../config');
const borewellBillGeneration = require('./borewellBillGeneration');
const corporationBillGeneration = require('./corporationBillGeneration');
const tankerBillGeneration = require('./tankerBillGeneration');

const billGeneration = (inputData) => {
  let totalCost = 0;
  let totalWaterConsumed = 0;
  let totalWaterConsumedByGuests = 0;

  inputData.forEach((input) => {
    const inputValues = input.split(' ');
    if (inputValues[0] === config.constants.ALLOT_WATER) {
      let noOfPeople = config.capacity[Number(inputValues[1])];
      totalWaterConsumed +=
        config.NO_OF_DAYS * config.WATER_PER_DAY * noOfPeople;
      let individualRatio = inputValues[2].split(':').map(Number);
      let totalRatio = individualRatio.reduce(
        (sum, ratio) => (sum += ratio),
        0
      );
      totalCost += corporationBillGeneration(
        totalWaterConsumed,
        totalRatio,
        individualRatio[0]
      );
      totalCost += borewellBillGeneration(
        totalWaterConsumed,
        totalRatio,
        individualRatio[1]
      );
    }
    if (inputValues[0] === config.constants.ADD_GUESTS) {
      let waterConsumed =
        Number(inputValues[1]) * config.NO_OF_DAYS * config.WATER_PER_DAY;
      totalWaterConsumed += waterConsumed;
      totalWaterConsumedByGuests += waterConsumed;
    }
  });

  totalCost += tankerBillGeneration(totalWaterConsumedByGuests);
  return { totalWaterConsumed, totalCost };
};

module.exports = billGeneration;
