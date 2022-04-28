const expect = require('chai').expect;
const borewellBillGeneration = require('../utilities/borewellBillGeneration');

describe('Test to check if borewell bill is correct for a ratio', () => {
  it('Should return 900 as borewell generated bill', () => {
    let cost = borewellBillGeneration(900, 3, 2);
    expect(cost).to.equal(900);
  });

  it('Should return 600 as borewell generated bill', () => {
    let cost = borewellBillGeneration(600, 4, 2);
    expect(cost).to.equal(450);
  });
});
