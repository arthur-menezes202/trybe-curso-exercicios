/*exercicio 1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
console.log(numbers);
*/

/*exercicio 2
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let cont = 0;
for(indexPlay = 0; indexPlay < numbers.length; indexPlay ++){
     cont = cont + numbers[indexPlay];
}
console.log(cont);
*/

/*exercicio 3
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let cont = 0;
for(indexPlay = 0; indexPlay < numbers.length; indexPlay ++){
     cont = cont + numbers[indexPlay];
}
let media = cont / numbers.length;
console.log(media);
*/

/*exercicio 4
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let cont = 0;
for(indexPlay = 0; indexPlay < numbers.length; indexPlay ++){
     cont = cont + numbers[indexPlay];
}
let media = cont / numbers.length;

if(media > 20){
    console.log("valor maior que 20");
}
else{
    console.log("valor menor ou igual a 20");
}
*/

/*exercicio 5
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = 0;
for(indexPlay = 0;indexPlay < numbers.length; indexPlay ++){
   if(numbers[indexPlay] > maior){
       maior = numbers[indexPlay];
   }
}
console.log(maior);
*/

/*exercicio 6
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar = 0;
for(indexPlay = 0;indexPlay < numbers.length; indexPlay ++){
   if(numbers[indexPlay] %2===0){
       impar ++;
   }
   
   }

if (impar === 0){
    console.log("nenhum valor ímpar encontrado")
}
else{
console.log(impar);
}
*/

/*exercico 7
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor = 999999;
for(indexPlay = 0;indexPlay < numbers.length; indexPlay ++){
   if(numbers[indexPlay] < menor){
       menor = numbers[indexPlay];
   }
}
console.log(menor);
*/

/*exercico 8
let array = [];
for(indexPlay = 0;indexPlay < 25; indexPlay ++){
    array.push(indexPlay);
}
console.log(array);
*/ 

/*exercico 9
let array = [];
let divisao = 0
for(indexPlay = 0;indexPlay < 25; indexPlay ++){
    array.push(indexPlay);
    divisao = array[indexPlay]/2;
    console.log("posição" + indexPlay + " nº " + array[indexPlay] + " dividido por 2 é iqual a " + divisao);
}
console.log(array);
*/