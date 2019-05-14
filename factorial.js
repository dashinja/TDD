function factorial(n) {
  if (n < 1) {
    return "Please select a valid number. (i.e. number >= 1)"
  }
  if (n === 1) {
    return 1
  }
  return n * factorial(n - 1)
}

module.exports = {
  factorial,
}
