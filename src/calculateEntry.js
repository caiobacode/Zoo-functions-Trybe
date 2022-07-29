const data = require('../data/zoo_data');

function countEntrants(entrants) {
  let somachild= 0
  let somaadult = 0
  let somasenior = 0
  entrants.forEach(obj => {
    if (obj.age < 18) {
      somachild += 1
    }
    if (obj.age >= 18 && obj.age < 50) {
      somaadult += 1
    }
    if (obj.age >= 50) {
      somasenior+= 1
    }
  });
  let finalObj = {
    child: somachild,
    adult: somaadult,
    senior: somasenior
  }
  return finalObj
}

function calculateEntry(entrants) {
  let soma = 0
  if (entrants === undefined) {
    return 0
  }
  if (Object.keys(entrants).length === 0) {
    return 0
  }
  else {
    entrants.forEach(obj => {
      if (obj.age < 18) {
        soma += 20.99
      }
      if (obj.age >= 18 && obj.age < 50) {
        soma += 49.99
      }
      if (obj.age >= 50) {
        soma += 24.99
      }
    });
    let result = soma.toFixed(2)
    let finalResult = Number(result)
    return finalResult
  }
}

module.exports = { calculateEntry, countEntrants };
