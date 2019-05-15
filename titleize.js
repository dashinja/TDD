const titleize = str => {
  if (typeof str !== 'string') {
    throw new TypeError('Argument must be a string!')
  }
  const modified = str
    .split(' ')
    .map(word =>
      word
        .split('')
        .map((letter, index) => (index === 0 ? letter.toUpperCase() : letter))
        .join(''),
    )
    .join(' ')
  return modified
}

module.exports = titleize

console.log(titleize('meager ranger'))
