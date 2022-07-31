const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const finalObj = {
    child: 0,
    adult: 0,
    senior: 0,
  };
  entrants.forEach((obj) => {
    if (obj.age < 18) {
      finalObj.child += 1;
    }
    if (obj.age >= 18 && obj.age < 50) {
      finalObj.adult += 1;
    }
    if (obj.age >= 50) {
      finalObj.senior += 1;
    }
  });
  return finalObj;
}
function sm(entrants) {
  let soma = 0;
  entrants.forEach((obj) => {
    if (obj.age < 18) {
      soma += 20.99;
    }
    if (obj.age >= 18 && obj.age < 50) {
      soma += 49.99;
    }
    if (obj.age >= 50) {
      soma += 24.99;
    }
  });
  return soma;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const result = sm(entrants).toFixed(2);
  const finalResult = Number(result);
  return finalResult;
}

module.exports = { calculateEntry, countEntrants };
