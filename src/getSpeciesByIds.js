const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(id1, id2) {
  const array = [];
  species.forEach((object) => {
    if (object.id === id1) {
      array.push(object);
    }
    if (object.id === id2) {
      array.push(object);
    }
  });
  return array;
}

module.exports = getSpeciesByIds;
