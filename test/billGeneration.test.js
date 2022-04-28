const expect = require('chai').expect;
const billGeneration = require('../utilities/billGeneration');

describe('Test to check if bill is generated correctly', () => {
  it('Should return correct data if command is correct', () => {
    let testData = ['ALLOT_WATER 2 3:7', 'BILL'];
    let inputData = billGeneration(testData);
    expect(inputData).to.have.property('totalWaterConsumed').to.be.equal(900);
    expect(inputData).to.have.property('totalCost').to.be.equal(1215);
  });

  it('Should throw error if wrong commands', () => {
    let testData = ['ALLOT_WATER 2', 'BILL'];
    let inputData = billGeneration(testData);
    expect(!!inputData).to.equal(false);
  });
});
