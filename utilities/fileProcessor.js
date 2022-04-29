const fs = require('fs');

const fileProcessor = (filePath) => {
  if (!fs.existsSync(filePath)) {
    console.log(
      'No input file found at given path. Please provide a correct file path'
    );
    return;
  }
  let inputData = fs.readFileSync(filePath, { flag: 'r' });
  inputData = inputData.toString().trim().split('\n');
  return inputData;
};

module.exports = fileProcessor;
