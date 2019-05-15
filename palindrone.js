const palindrone = str => {
  if (Number.isInteger(str)) {
    return 'Argument must be a string'
  } else {
    const re = /[\W_]/g
    const lowCaseStr = str.toLowerCase().replace(re, '')
    const reverseStr = lowCaseStr
      .split('')
      .reverse()
      .join('')

    return lowCaseStr === reverseStr
  }
}

module.exports = {
  palindrone,
}
