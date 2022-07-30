const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSchedule(string) {
  let selecionado = 0
  let diaSelecionado = 0
  let newObj = {}
  let tudo = {"Friday": {"exhibition": ["tigers", "otters", "frogs", "snakes", "elephants", "giraffes"], "officeHour": "Open from 10am until 8pm"}, "Monday": {"exhibition": "The zoo will be closed!", "officeHour": "CLOSED"}, "Saturday": {"exhibition": ["lions", "tigers", "bears", "penguins", "otters", "frogs", "snakes", "elephants"], "officeHour": "Open from 8am until 10pm"}, "Sunday": {"exhibition": ["lions", "bears", "penguins", "snakes", "elephants"], "officeHour": "Open from 8am until 8pm"}, "Thursday": {"exhibition": ["lions", "otters", "frogs", "snakes", "giraffes"], "officeHour": "Open from 10am until 8pm"}, "Tuesday": {"exhibition": ["lions", "tigers", "bears", "penguins", "elephants", "giraffes"], "officeHour": "Open from 8am until 6pm"}, "Wednesday": {"exhibition": ["tigers", "bears", "penguins", "otters", "frogs", "giraffes"], "officeHour": "Open from 8am until 6pm"}}
  
  species.forEach(obj => {
    if (obj.name === string) {
      selecionado = obj.availability
    }
  })
  let keys = Object.keys(tudo)
  keys.forEach(ob => {
    if (string === ob) {
      diaSelecionado = ob
    }
  })
  if (selecionado !== 0) {
    return selecionado
  }
  switch(diaSelecionado) {
    case 'Monday':
      newObj = {'Monday': tudo.Monday}
      return newObj
    case 'Friday':
      newObj = {'Friday' :tudo.Friday}
      return newObj
    case 'Thursday':
      newObj = {'Thursday' :tudo.Thursday}
      return newObj
    case 'Saturday':
      newObj = {'Saturday' :tudo.Saturday}
      return newObj
    case 'Sunday':
      newObj = {'Sunday' :tudo.Sunday}
      return newObj
    case 'Tuesday':
      newObj = {'Tuesday' :tudo.Tuesday}
      return newObj
    case 'Wednesday':
      newObj = {'Wednesday' :tudo.Wednesday}
      return newObj
    default:
      return tudo
  }
}

console.log(getSchedule('Monday'))


module.exports = getSchedule;
