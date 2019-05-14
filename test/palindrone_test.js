const { expect } = require('chai')
const { palindrone } = require('../palindrone')

describe('Returns true if argument is Palindrone', () => {
  it("Should return true using 'racecar'", () => {
    expect(palindrone('racecar')).to.equal(true)
  })
  it("Should return false using 'not a palindrone'", () => {
    expect(palindrone('not a palindrone')).to.equal(false)
  })
  it("Should return true using 'A man, a plan, a canal. Panama'", () => {
    expect(palindrone('A man, a plan, a canal. Panama')).to.equal(true)
  })
  it("Should return true using 'never odd or even'", () => {
    expect(palindrone('never odd or even')).to.equal(true)
  })
  it("Should return false using 'nope'", () => {
    expect(palindrone('nope')).to.equal(false)
  })
  it("Should return false using 'almostomla'", () => {
    expect(palindrone('almostomla')).to.equal(false)
  })
  it("Should return true using 'My age is 0, 0 si ega ym.'", () => {
    expect(palindrone('My age is 0, 0 si ega ym.')).to.equal(true)
  })
  it("Should return false using '1 eye for of 1 eye.'", () => {
    expect(palindrone('1 eye for of 1 eye.')).to.equal(false)
  })
  it("Should return true using '0_0 (: /- :) 0–0'", () => {
    expect(palindrone('0_0 (: /- :) 0–0')).to.equal(true)
  })
})
