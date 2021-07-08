const newEmployees = () => {
    const employees = {
      id1: funcition(`Pedro Guerra`,console.log),
      // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro
      id2: funcition(`Luiza Drumond`,console.log),
     // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro
      id3: funcition(`Carla Paiva`,console.log)
        // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro
    }
    return employees;
  };
const funcition = (nome,action) => {
    const tirarEspaço = nome.replace(/\s/g, '')
    const tirarMaiuscola = tirarEspaço.toLowerCase()
    action(tirarMaiuscola + '@trybe.com')
}
newEmployees();