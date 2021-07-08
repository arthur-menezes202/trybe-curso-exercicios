
const assert = require('assert');

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

function flatten(array) {
  return array.reduce((acumulador, index) => 
    `${acumulador}${index}`,`,`
  )
}
console.table(flatten(arrays));
//assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);