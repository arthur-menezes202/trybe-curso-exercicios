const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// parte 1
// tarefa 1

assert.strictEqual(sum(4, 5),9);
assert.strictEqual(sum(0, 0),0);
assert.strictEqual(sum(4, '5'),9 );
assert.ok()