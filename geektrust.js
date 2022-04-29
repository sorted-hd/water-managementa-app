const billGeneration = require('./utilities/billGeneration');
const fileProcessor = require('./utilities/fileProcessor');

const allArgs = process.argv;
const filePath = allArgs[2];

if (!filePath) {
  console.log(
    'No input file path provided. Usage: node index.js <input-file-path>'
  );
}

let inputData = fileProcessor(filePath);
if (inputData) {
  try {
    let { totalWaterConsumed, totalCost } = billGeneration(inputData);
    console.log(totalWaterConsumed, totalCost);
  } catch (error) {
    console.log(error.message);
  }
}
