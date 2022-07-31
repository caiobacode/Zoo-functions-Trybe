const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  let obj = {};
  employees.forEach((object) => {
    if (object.firstName === employeeName) {
      obj = object;
    }
    if (object.lastName === employeeName) {
      obj = object;
    }
  });
  return obj;
}

module.exports = getEmployeeByName;
