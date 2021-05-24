
const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((acc,add,index) => {
      if (add[index].length(index) = `a`){
          acc += 1;
      }
      return acc
  })
}
console.log(containsA())
//assert.deepStrictEqual(containsA(), 20);