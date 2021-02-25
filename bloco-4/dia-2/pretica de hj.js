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


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = 0;
for(indexPlay = 0;indexPlay < numbers.length; indexPlay ++){
   if(numbers[indexPlay] > maior){
       maior = numbers[indexPlay];
   }
}
console.log(maior);
