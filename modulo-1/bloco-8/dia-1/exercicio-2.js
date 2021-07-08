const validar = (numero, action) => {
    const number = Math.floor((Math.random() * 5)+ 1);
    if(number === numero){
        action(`Parabéns você ganhou`);
    }
    else{
        action(`Tente novamente`);
    }
}
validar(1, console.log);
