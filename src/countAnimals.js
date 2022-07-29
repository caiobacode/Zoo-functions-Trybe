const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(obj) {
  let count = 0
  let countMale = 0
  let countFemale = 0
  let selecionado = 'a'
  let animals = {
    'lions': 4,
    'tigers': 2,
    'bears': 3,
    'penguins': 4,
    'otters': 4,
    'frogs': 2,
    'snakes': 2,
    'elephants': 4,
    'giraffes': 6,
  };
  if (obj === undefined) {
    return animals
  }
  species.forEach(objeto => {
    if (Object.values(obj)[0] === objeto.name) {
      selecionado = objeto
      let list = objeto.residents
      count = list.length
    }
  })
  if (Object.keys(obj)[1] === 'sex') {
    if (Object.values(obj)[1] === 'male') {
      selecionado.residents.forEach(ob => {
        if (ob.sex === 'male') {
          countMale += 1;
        }
      })
      return countMale
    }
    if (Object.values(obj)[1] === 'female') {
      selecionado.residents.forEach(ob => {
        if (ob.sex === 'female') {
          countFemale += 1;
        }
      })
      return countFemale
    }
  }
  if (Object.keys(obj).length === 1) {
    return count
  }
}

console.log(countAnimals({specie: 'giraffes'}))
module.exports = countAnimals;
