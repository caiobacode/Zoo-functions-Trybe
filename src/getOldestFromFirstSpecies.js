const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  let pessoa = 'a'
  let obEspecie = 'a'
  employees.forEach(obj => {
    if (obj.id === id) {
      pessoa = obj
    }
  })
  let especie = pessoa.responsibleFor[0]
  species.forEach(ob => {
    if (ob.id === especie) {
      obEspecie = ob
    }
  })
  let final = 0
  let maior = 0
  obEspecie.residents.forEach(objet => {
    if (objet.age > maior) {
      maior = objet.age
      final = objet
    }
  })
  let ret = Object.values(final)
  return ret
}

module.exports = getOldestFromFirstSpecies;
