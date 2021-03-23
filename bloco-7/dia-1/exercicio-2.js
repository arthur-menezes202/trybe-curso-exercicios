function faorial(num){
    let numero = num
    let cont = 1;
    for (let i = num;i >=1;i -- ){
    cont = numero * cont;
    numero = numero -1
    }
    return cont
}
console.log(faorial(4));