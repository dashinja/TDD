const palindrone = (str) => {
  const re = /[\W_]/g
  const lowCaseStr = str.toLowerCase().replace(re, "")
  const reverseStr = lowCaseStr.split("").reverse().join("")

  return lowCaseStr === reverseStr;
}

module.exports = {
  palindrone,
}