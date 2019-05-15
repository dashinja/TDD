const {factorial} = require("./factorial")
const {palindrone} = require("./palindrone")

console.log("factorial(13):", factorial(13))
console.log("factorial(-1):", factorial(-1))

console.log("Palindrone(6):", palindrone("WonnononnoW"))
console.log("Palindrone(10):", palindrone("Oh yes!!!!"))

const newString = "I'm a Little Tea Pot!".toLowerCase()