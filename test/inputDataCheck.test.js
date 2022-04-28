const expect = require('chai').expect;
const inputDataCheck = require('../utilities/inputDataCheck');

describe('Test to check if input commands are correct', () => {
  it('Should return true if command is correct', () => {
    let testData = ['ALLOT_WATER 2 3:7', 'BILL'];
    let inputData = inputDataCheck(testData);
    expect(inputData).to.equal(true);
  });

  it('Should return true if command is correct', () => {
    let testData = ['ALLOT_WATER 2 3:7', 'ADD_GUESTS 4', 'BILL'];
    let inputData = inputDataCheck(testData);
    expect(inputData).to.equal(true);
  });

  it('Should return false if command is wrong', () => {
    let testData = ['ALLOT_WATER 2 3:', 'BILL'];
    let inputData = inputDataCheck(testData);
    expect(inputData).to.equal(true);
  });

  it('Should return false if command is wrong', () => {
    let testData = ['ALLOT_WATER 2 3:7'];
    let inputData = inputDataCheck(testData);
    expect(inputData).to.equal(false);
  });

  it('Should return false if command is wrong', () => {
    let testData = ['ALLOT_WATER 2 3:7', 'BILL', 'ADD_GUESTS 4'];
    let inputData = inputDataCheck(testData);
    expect(inputData).to.equal(false);
  });
});
