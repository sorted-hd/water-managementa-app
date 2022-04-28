const fs = require('fs');
const config = require('./config');

const allArgs = process.argv;
const filePath = allArgs[2];

if (!filePath) {
  console.log(
    'No input file path provided. Usage: node index.js <input-file-path>'
  );
}

if (!fs.existsSync(filePath)) {
  console.log(
    'No input file found at given path. Please provide a correct file path'
  );
}

let inputData = fs.readFileSync(filePath);
inputData = inputData.toString().split('\n');
console.log(inputData);

let totalCost = 0;
let totalWaterConsumed = 0;
let totalWaterConsumedByGuests = 0;
let costOfTanker = 0;
let initialGuestWaterLimit = 500;

inputData.forEach((input) => {
  const inputValues = input.split(' ');
  if (inputValues[0] === config.constants.ALLOT_WATER) {
    let noOfPeople = config.capacity[Number(inputValues[1])];
    totalWaterConsumed += config.NO_OF_DAYS * config.WATER_PER_DAY * noOfPeople;
    let individualRatio = inputValues[2].split(':').map(Number);
    let totalRatio = individualRatio.reduce((sum, ratio) => (sum += ratio), 0);
    let one =
      Math.round(totalWaterConsumed / totalRatio) *
      individualRatio[0] *
      config.costs.CORPORATION_WATER;

    let two =
      Math.round(totalWaterConsumed / totalRatio) *
      individualRatio[1] *
      config.costs.BOREWELL_WATER;

    // totalCost += one;
    // totalCost += two;
  }
  if (inputValues[0] === config.constants.ADD_GUESTS) {
    let waterConsumed =
      Number(inputValues[1]) * config.NO_OF_DAYS * config.WATER_PER_DAY;
    totalWaterConsumed += waterConsumed;
    totalWaterConsumedByGuests += waterConsumed;
  }
});

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

console.log(totalWaterConsumed, totalCost);
