const expect = require('chai').expect;
const path = require('path');
const fileProcessor = require('../utilities/fileProcessor');
const fs = require('fs');

describe('Test to check if path path valid and able to process it', () => {
  it('Should return nothing if invalid file path', () => {
    let inputData = fileProcessor(Math.random().toString());
    expect(!!inputData).to.equal(false);
  });

  it('Should return truthy value / input commands if valid file path', () => {
    let newFilePath = path.join(__dirname, Math.random().toString());
    fs.writeFileSync(newFilePath, 'ALLOT_WATER 2 1:2\nBILL');
    let inputData = fileProcessor(newFilePath);
    fs.unlinkSync(newFilePath);
    expect(!!inputData).to.equal(true);
    expect(inputData).to.have.length(2);
  });
});
