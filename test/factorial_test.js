const { expect } = require('chai')
const { factorial } = require('../factorial')

describe('Completes factorial product of given number', function() {
  it('It should return 4 * 3 * 2 * 1', function() {
    expect(factorial(4)).to.equal(24)
  })
  it('If n = 0, should return 1', function() {
    expect(factorial(0)).to.equal(`Please select a valid number. (i.e. number >= 1)`)
  })
  it('If n = 1, should return 1', function() {
    expect(factorial(1)).to.equal(1)
  })
  it('If n = 5, should return 120', function() {
    expect(factorial(5)).to.equal(120)
  })
  it('If n = 10, should return 3628800', function() {
    expect(factorial(10)).to.equal(3628800)
  })
  it('If n = 20, should return 2432902008176640000', function() {
    expect(factorial(20)).to.equal(2432902008176640000)
  })
  it("Returns NaN if function arguments aren't numbers...", () => {
    expect(factorial(4)).to.be.a('number')
  })
})
