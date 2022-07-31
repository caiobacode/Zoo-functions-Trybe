const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const animals = {
  lions: 4,
  tigers: 2,
  bears: 3,
  penguins: 4,
  otters: 4,
  frogs: 2,
  snakes: 2,
  elephants: 4,
  giraffes: 6,
};

function getMale(selected) {
  let countMale = 0;
  selected.residents.forEach((ob) => {
    if (ob.sex === 'male') {
      countMale += 1;
    }
  });
  return countMale;
}

function getFemale(selected) {
  let countFemale = 0;
  selected.residents.forEach((ob) => {
    if (ob.sex === 'female') {
      countFemale += 1;
    }
  });
  return countFemale;
}

function MaleFemale(obj, selec) {
  let und = 1000;
  if (Object.keys(obj)[1] === 'sex') {
    if (Object.values(obj)[1] === 'female') {
      und = getFemale(selec);
    }
    if (Object.values(obj)[1] === 'male') {
      und = getMale(selec);
    }
  }
  return und;
}

function countAnimals(obj) {
  if (obj === undefined) {
    return animals;
  }
  let selecionado = 'a';
  let count = 0;
  species.forEach((objeto) => {
    if (Object.values(obj)[0] === objeto.name) {
      selecionado = objeto;
      count = objeto.residents.length;
    }
  });
  const sex = MaleFemale(obj, selecionado);
  if (sex !== 1000) {
    return sex;
  }

  return count;
}

console.log(countAnimals({ specie: 'bears', sex: 'female' }));
module.exports = countAnimals;
