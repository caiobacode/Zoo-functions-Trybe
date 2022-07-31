const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
const managers = [stephanieId, olaId, burlId];

function isManager(ide) {
  let tufa = false;
  managers.forEach((onj) => {
    if (ide === onj) {
      tufa = true;
    }
  });
  return tufa;
}

function getRelatedEmployees(managerId) {
  const tf = isManager(managerId);
  if (tf === true) {
    const array = [];
    employees.forEach((obj) => {
      const afe = obj.managers.find((element) => element === managerId);
      const nome = `${obj.firstName} ${obj.lastName}`;
      if (afe !== undefined) {
        array.push(nome);
      }
    });
    return array;
  }

  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
