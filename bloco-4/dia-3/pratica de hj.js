/* exercicio 1
let n = 5;
let array = [];
for(let i = 0;i < n;i ++){
    array.push("*")
}
for(i = 0;i < n;i ++){
    console.log(array);
}
*/


let n = 5;
let array = ["*"];
for(let j = 1;j < n + 1;j ++){ 
    for(let i = 0;i < j;i ++){
        array[i]="*"
    }
    
    console.log(array);
   

}
