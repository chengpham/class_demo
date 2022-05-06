
const addition = require('./add')
const prime = require('./prime')
const countryList = require('./countries')
// console.log(addition(3,5))
console.log(prime.reduce(addition))

prime.forEach(num=>console.log(addition(num,1)))

countryList.forEach(i=>console.log(i, i.length))