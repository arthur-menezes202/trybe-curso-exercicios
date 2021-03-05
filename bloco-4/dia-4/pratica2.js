/* exercicio 1
let frase = "subi no onibus";

console.log(funcao(frase));

function funcao(str) {     
    for(var i = 0; i < str.length / 2; i++) 
    if (str[i] === str[str.length - i - 1]) {
    return true;    
    }
    else{
        return false;
    }
}
*/
/* exercicio 2
let array = [1 ,2 ,3 ,4 ,654 ,7 ,65 ,];
let oMaiorNumero = 0
let maior = 0;
for(let i = 0;i < array.length;i ++){
  oMaiorNumero = maiorNumero(array[i])
}

console.log(oMaiorNumero)

function maiorNumero(numero){
   
        if(numero > maior){
            maior = numero;
    }
    return maior;
}
*/
/* exercicio 3
let array = [15,275 ,375 ,4 ,654 ,7456 ,65 ,];
let oMenorNumero = 0
let maior = 9999999;
for(let i = 0;i < array.length;i ++){
  oMenorNumero = maiorNumero(array[i])
}

console.log(oMenorNumero)

function maiorNumero(numero){
   
        if(numero < maior){
            maior = numero;
    }
    return maior;
}
*/

let array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
let nomeMaior = "";
let numeroDeLetras = 0
for(let i = 0;i < array.length;i ++){
    numeroDeLetras = maiorNumero(array[i])
  }
console.log(numeroDeLetras);
function  maiorNumero(nome){
    if(numeroDeLetras > nome.length){
        numeroDeLetras = nome.length;

        return numeroDeLetras;
    }
}






