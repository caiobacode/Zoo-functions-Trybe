const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');
const lionId = '0938aa23-f153-4937-9f88-4858b24d6bce';

function getSpeciesByIds(id1, id2) {
  const array = []
  if (id2 === undefined) {
    species.forEach(object => {
      if (object.id === id1) {
        array.push(object)
      }
    })
  }
  else {
    species.forEach(object => {
      if (object.id === id1) {
        array.push(object)
      }
    })
    species.forEach(object => {
      if (object.id === id2) {
        array.push(object)
      }
    })
  }
  return array
}

console.log(getSpeciesByIds(lionId))

//species.forEach(object => {
  //console.log(object)
//})


module.exports = getSpeciesByIds;
