const expect = require('chai').expect;
const corporationBillGeneration = require('../utilities/corporationBillGeneration');

describe('Test to check if corporation bill is correct for a ratio', () => {
  it('Should return 900 as corporation generated bill', () => {
    let cost = corporationBillGeneration(900, 3, 2);
    expect(cost).to.equal(2700);
  });

  it('Should return 600 as corporation generated bill', () => {
    let cost = corporationBillGeneration(600, 4, 2);
    expect(cost).to.equal(2400);
  });
});
