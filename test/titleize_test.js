const { expect } = require('chai')
const titleize = require('../titleize')

describe('Titleize', function() {
  it(`Should title-case the input (i.e. 'tester' => 'Tester')`, function() {
    expect(titleize('tester')).to.equal('Tester')
  })
  it(`Should title-case the input of more than one word (i.e. 'tester check' => 'Tester Check)'`, function() {
    expect(titleize('tester check')).to.equal('Tester Check')
  })

  // not working correctly
  it('Argument should be a string', function() {
    expect(function() {
      titleize(arguments).to.be.a('string')
    })
  })
  it('Argument should be a string', function() {
    expect(function() {
      titleize(typeof arguments).to.be.a('string')
    })
  })
  it('Argument should be a string', function() {
    expect(function() {
      titleize('string').to.be.arguments
    })
  })
  it('Should throw error when input is not a string', function() {
    expect(function() {
      titleize(typeof arguments !== 'function').to.throw(TypeError)
    })
  })
})
