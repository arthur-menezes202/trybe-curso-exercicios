const verificar = (correto, incorreto) => {
    for(let index in correto){
        if(correto[index] === incorreto[index]){
            return true;
        } else {
            return false;
        }
    }
}
console.log(['a','b','c'],['a','b','c'],verificar())