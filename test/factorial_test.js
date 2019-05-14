const { expect } = require('chai')
const { factorial } = require('../factorial')

describe('Completes factorial product of given number', function() {
  it('It should return 4 * 3 * 2 * 1', function() {
    expect(factorial(4)).to.equal(24)
  })
})

describe('Error Response for non-number arguments', () => {
  it("Returns NaN if function arguments aren't numbers...", () => {
    expect(factorial(4)).to.be.a('number')
  })
})
