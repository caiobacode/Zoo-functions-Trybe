const data = require('../data/zoo_data');

const verifyOptions = (options) => {
  if (!options) return false;
  const includes = Object.keys(options).includes('includeNames');
  if (includes) {
    const trueOrFalse = options.includeNames;
    return trueOrFalse;
  }
  return false;
};

const filterLocations = (location, species) => {
  const returnArray = [];
  species.forEach((specie) => {
    if (specie.location === location) returnArray.push(specie.name);
  });
  return returnArray;
};

const genders = (options, n) => {
  if (options.sex === 'female') {
    if (n.sex === 'female') {
      return n.name;
    }
  } else if (n.sex === 'male') {
    return n.name;
  }
};

const filterObjects = (options, specie) => {
  const finalArray = [];
  if (Object.keys(options).includes('sex')) {
    specie.residents.forEach((n) => {
      if (genders(options, n) !== undefined) {
        finalArray.push(genders(options, n));
      }
    });
  } else {
    specie.residents.forEach((n) => {
      finalArray.push(n.name);
    });
  }
  return finalArray;
};

const filterMaleFemale = (specie, options) => {
  const verifySort = () => {
    if (!options) return false;
    if (Object.keys(options).includes('sorted')) return true;
    return false;
  };
  const filtered = filterObjects(options, specie);
  const names = verifySort() ? filtered.sort() : filtered;
  return names;
};

const filterName = (location, species, options) => {
  const arrayWithNames = [];
  species.forEach((specie) => {
    if (specie.location === location) {
      const returnObj = {
        [specie.name]: filterMaleFemale(specie, options),
      };
      arrayWithNames.push(returnObj);
    }
  });
  return arrayWithNames;
};

const getAnimals = (species, options) => {
  if (verifyOptions(options)) {
    const finalObjNames = {
      NE: filterName('NE', species, options),
      SE: filterName('SE', species, options),
      SW: filterName('SW', species, options),
      NW: filterName('NW', species, options),
    };
    return finalObjNames;
  }
  const finalObj = {
    NE: filterLocations('NE', species),
    SE: filterLocations('SE', species),
    SW: filterLocations('SW', species),
    NW: filterLocations('NW', species),
  };
  return finalObj;
};

function getAnimalMap(options) {
  const { species } = data;
  return getAnimals(species, options);
}

module.exports = getAnimalMap;
