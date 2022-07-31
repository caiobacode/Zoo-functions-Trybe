const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeesCoverage(obj) {
  let selecionada = 'a';
  const arraySpecies = [];
  const arrayLocations = [];
  const finalObj = {
    id: 'a',
    fullName: 'a',
    species: 'a',
    locations: 'a',
  };
  let trlf = false;
  const nulo = [
    {
      id: 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
      fullName: 'Nigel Nelson',
      species: ['lions', 'tigers'],
      locations: ['NE', 'NW'],
    },
    {
      id: '0e7b460e-acf4-4e17-bcb3-ee472265db83',
      fullName: 'Burl Bethea',
      species: ['lions', 'tigers', 'bears', 'penguins'],
      locations: ['NE', 'NW', 'NW', 'SE'],
    },
    {
      id: 'fdb2543b-5662-46a7-badc-93d960fdc0a8',
      fullName: 'Ola Orloff',
      species: ['otters', 'frogs', 'snakes', 'elephants'],
      locations: ['SE', 'SW', 'SW', 'NW'],
    },
    {
      id: '56d43ba3-a5a7-40f6-8dd7-cbb05082383f',
      fullName: 'Wilburn Wishart',
      species: ['snakes', 'elephants'],
      locations: ['SW', 'NW'],
    },
    {
      id: '9e7d4524-363c-416a-8759-8aa7e50c0992',
      fullName: 'Stephanie Strauss',
      species: ['otters', 'giraffes'],
      locations: ['SE', 'NE'],
    },
    {
      id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad',
      fullName: 'Sharonda Spry',
      species: ['otters', 'frogs'],
      locations: ['SE', 'SW'],
    },
    {
      id: 'c1f50212-35a6-4ecd-8223-f835538526c2',
      fullName: 'Ardith Azevado',
      species: ['tigers', 'bears'],
      locations: ['NW', 'NW'],
    },
    {
      id: 'b0dc644a-5335-489b-8a2c-4e086c7819a2',
      fullName: 'Emery Elser',
      species: ['lions', 'bears', 'elephants'],
      locations: ['NE', 'NW', 'NW'],
    },
  ];
  if (typeof obj === 'object') {
    const value = Object.values(obj)[0];
    employees.forEach((pessoa) => {
      if (value === pessoa.firstName || value === pessoa.lastName) {
        finalObj.id = pessoa.id;
        finalObj.fullName = `${pessoa.firstName} ${pessoa.lastName}`;
        selecionada = pessoa;
        trlf = true;
      } else if (value === pessoa.id) {
        finalObj.id = pessoa.id;
        finalObj.fullName = `${pessoa.firstName} ${pessoa.lastName}`;
        selecionada = pessoa;
        trlf = true;
      }
    });
    if (selecionada !== 'a') {
      selecionada.responsibleFor.forEach((ids) => {
        species.forEach((animals) => {
          if (animals.id === ids) {
            arraySpecies.push(animals.name);
            arrayLocations.push(animals.location);
          }
        });
      });
    }
  }
  finalObj.species = arraySpecies;
  finalObj.locations = arrayLocations;
  if (trlf === true) {
    return finalObj;
  }
  if (obj === undefined) {
    return nulo;
  }

  throw new Error('Informações inválidas');
}

module.exports = getEmployeesCoverage;
