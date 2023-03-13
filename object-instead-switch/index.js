// Instead of use switch, we can use a simple object like this

const defaultBike = 'specialized sl6'
const budget = null
const BIKES = {
  8000: 'flamma',
  10000: 'specialized',
  12000: 'scoot',
  1400: 'trek'
}

const budgetBike = BIKES[budget] || defaultBike
console.log("🚀 ~ file: index.js:13 ~ budgetBike:", budgetBike)