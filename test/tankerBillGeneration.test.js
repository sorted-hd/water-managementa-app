const expect = require('chai').expect;
const tankerBillGeneration = require('../utilities/tankerBillGeneration');

describe('Test to check if tanker bill is generated properly', () => {
  it('Should return 4000 as tanker generated bill', () => {
    let cost = tankerBillGeneration(1500);
    expect(cost).to.equal(4000);
  });
  it('Should return 0 as tanker generated bill', () => {
    let cost = tankerBillGeneration(0);
    expect(cost).to.equal(0);
  });
  it('Should return 1000 as tanker generated bill', () => {
    let cost = tankerBillGeneration(500);
    expect(cost).to.equal(1000);
  });
});
