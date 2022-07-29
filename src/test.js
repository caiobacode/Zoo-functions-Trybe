if (Object.keys(obj) === ['specie', 'sex']) {
    if (Object.values(obj)[1] === 'male') {
      selecionado.residents.forEach(ob => {
        if (ob.sex === 'male') {
          countMale += 1;
        }
      })
      return countMale
    }
    if (Object.values(obj)[1] === 'female') {
      selecionado.residents.forEach(ob => {
        if (ob.sex === 'female') {
          countFemale += 1;
        }
      })
      return countFemale
    }
  }
let obj = {specie: 'ovots'}
console.log(Object.values(obj)[0])