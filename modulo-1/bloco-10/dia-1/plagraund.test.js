// Desafio 1
function compareTrue(valor1 ,valor2) {
  if(valor1 === true && valor2 === true){
    return true;
  }
  else{
    return false;
  }
}

// test('Desafio 1', () => {
//     expect(compareTrue(true, true)).toEqual(true);
//     expect(compareTrue(false, true)).toEqual(false);
//     expect(compareTrue()).toEqual(false);
//   });

// Desafio 2
function calcArea(base, height) {
  return (base*height)/2
}

// test('Desafio 2', () => {
//   expect(calcArea(10,5)).toEqual(25);
// });

// Desafio 3
function splitSentence(string) {
  return string.split(" ")
}

// test('desafio 3', () => {
//   expect(splitSentence('ola mundo')).toEqual(['ola', 'mundo']);
//   const test = ['eu','sou', 'um', 'texto', 'e', 'estou', 'dividio', 'em', 'um', 'array']
//   expect(splitSentence('eu sou um texto e estou dividio em um array')).toEqual(test);
// });

// Desafio 4
function concatName(listaDeNomes) {
  let concatena = listaDeNomes[listaDeNomes.length - 1] + ", " + listaDeNomes[0];
  return concatena;
}

// test('desafio 4', () => {
//   test = ['eu','sou', 'um', 'texto', 'e', 'estou', 'dividio', 'em', 'um', 'array']
//   expect(concatName(test)).toEqual('array, eu');
// });

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = 0;
  for (let index = 0; index < wins; index++) {
    pontos = pontos + 3;
  }
  for (let index = 0; index < ties; index++) {
    pontos = pontos + 1;
  }
  return pontos;
}

test('desafio 5', () => {
  expect(footballPoints(10, 7)).toEqual(37);
});

// Desafio 6
function highestCount(array) {
  let maior = 0;
  for (let index in array) {
    if (array[index] > maior) {
      maior = array[index];
    }
  }
  let cont = 0;
  for (let index in array) {
    if (array[index === maior]) {
      cont++;
   }
  }
    return cont;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distancia1 = mouse - cat1;
  let distancia2 = mouse - cat2;
  let resultado1 = Math.abs(distancia1);
  let resultado2 = Math.abs(distancia2);
  if (resultado1 === resultado2) {
    return 'os gatos trombam e o rato foge';
  } else if (resultado1 < resultado2) {
    return 'cat1';
  } else {
    return 'cat2';
  }
}

// Desafio 8
function fizzBuzz(numeros) {
  let array = []
  for(let index in numeros) {
    if (numeros[index] %5 == 0 && numeros[index] %3 == 0){
      array.push("fizzBuzz")
    } else if (numeros[index] %3 == 0){
      array.push("fizz");
    } else if (numeros[index] %5 == 0) {
      array.push("buzz");
    } else {
      array.push("bug!");
    }
  }
  return array;
}
// Desafio 9
function encode(frase) {
  let resultado = frase.split("");
  for (let index in resultado) {
    switch(resultado[index]){
      case "a":
      resultado[index] = 1;
      break;
      case "e":
      resultado[index] = 2;
      break;
      case "i":
      resultado[index] = 3;
      break;
      case "o":
      resultado[index] = 4;
      break;
      case "u":
      resultado[index] = 5;
      break;
    }
  }
  return resultado.join("");
}


function decode(frase) {
  let resultado = frase.split("");
  for (let index in resultado) {
    switch(resultado[index]){
      case "1":
      resultado[index] = "a";
      break;
      case "2":
      resultado[index] = "e";
      break;
      case "3":
      resultado[index] = "i";
      break;
      case "4":
      resultado[index] = "o";
      break;
      case "5":
      resultado[index] = "u";
      break;
    }
  }
  return resultado.join("");
}

const functions = { encode, decode };
module.exports = functions;

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};