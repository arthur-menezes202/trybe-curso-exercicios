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

let array = [1 ,2 ,3 ,4 ,654 ,5 ,6 ,7];
let v =0
for(let i = 0;i < 8;i ++){
  v = maiorNumero(array[i])
}

console.log(v)

function maiorNumero(numero){
    let maior = 0;
   
        if(numero> maior){
            maior = numero;
        return maior;
        
    }
    else{
        return
    }
}