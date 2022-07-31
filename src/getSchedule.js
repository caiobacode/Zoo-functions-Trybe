const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const tudo = { Friday:
  { exhibition: ['tigers', 'otters', 'frogs', 'snakes', 'elephants', 'giraffes'],
    officeHour: 'Open from 10am until 8pm' },
Monday: { exhibition: 'The zoo will be closed!',
  officeHour: 'CLOSED' },
Saturday:
{ exhibition: ['lions', 'tigers', 'bears', 'penguins', 'otters', 'frogs', 'snakes', 'elephants'],
  officeHour: 'Open from 8am until 10pm' },
Sunday: { exhibition: ['lions', 'bears', 'penguins', 'snakes', 'elephants'],
  officeHour: 'Open from 8am until 8pm' },
Thursday: { exhibition: ['lions', 'otters', 'frogs', 'snakes', 'giraffes'],
  officeHour: 'Open from 10am until 8pm' },
Tuesday: { exhibition: ['lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes'],
  officeHour: 'Open from 8am until 6pm' },
Wednesday: { exhibition: ['tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes'],
  officeHour: 'Open from 8am until 6pm' },
};
function cases1(dia) {
  switch (dia) {
  case 'Monday':
    return { Monday: tudo.Monday };
  case 'Friday':
    return { Friday: tudo.Friday };
  case 'Thursday':
    return { Thursday: tudo.Thursday };
  case 'Saturday':
    return { Saturday: tudo.Saturday };
  default:
    return undefined;
  }
}
function cases2(dia) {
  switch (dia) {
  case 'Sunday':
    return { Sunday: tudo.Sunday };
  case 'Tuesday':
    return { Tuesday: tudo.Tuesday };
  case 'Wednesday':
    return { Wednesday: tudo.Wednesday };
  default:
    return tudo;
  }
}
function cases(dia) {
  let und = cases1(dia);
  if (und === undefined) {
    und = cases2(dia);
  }
  return und;
}

function getSchedule(string) {
  let selecionado = 0;
  species.forEach((obj) => {
    if (obj.name === string) {
      selecionado = obj.availability;
    }
  });
  const cas = cases(string);
  if (selecionado !== 0) {
    return selecionado;
  }
  if (string === undefined) {
    return tudo;
  }
  return cas;
}

console.log(getSchedule('Monday'));

module.exports = getSchedule;
