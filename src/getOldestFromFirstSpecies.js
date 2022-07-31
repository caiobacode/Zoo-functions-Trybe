const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const array = ['a', 'a', 0];
  employees.forEach((obj) => {
    if (obj.id === id) {
      const especie = obj.responsibleFor[0];
      species.forEach((ob) => {
        if (ob.id === especie) {
          array[0] = ob;
        }
      });
    }
  });
  array[0].residents.forEach((objet) => {
    if (objet.age > array[2]) {
      array[2] = objet.age;
      array[1] = Object.values(objet);
    }
  });
  return array[1];
}

module.exports = getOldestFromFirstSpecies;
