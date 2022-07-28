const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, idade) {
  let trfl = true
  species.forEach(object => {
    if (object.name === animal) {
      object.residents.forEach(obj => {
        if(obj.age < idade) {
          trfl = false

        }
      }) 
    }
  })
  return trfl
}

module.exports = getAnimalsOlderThan;
