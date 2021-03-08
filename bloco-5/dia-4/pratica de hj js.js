 let body = document.body;
  body.style.backgroundColor = localStorage.getItem("cor");
function mudaCorDoFundo(){
    let mudaCor = document.body;
    if (mudaCor.style.backgroundColor != 'red') {
        localStorage.setItem("cor" , "red");
        body = document.body;
        body.style.backgroundColor = localStorage.getItem("cor");
    }
    else {
        localStorage.setItem("cor" , "white");
        body = document.body;
        body.style.backgroundColor = localStorage.getItem("cor");
    }

}


function mudaCorTexto(){
    // if (mudaCor.style.backgroundColor != 'red') {
    //     localStorage.setItem("cor" , "red");
    //     body = document.body;
    //     body.style.backgroundColor = localStorage.getItem("cor");
    // }
    // else {
    //     localStorage.setItem("cor" , "white");
    //     body = document.body;
    //     body.style.backgroundColor = localStorage.getItem("cor");
    // }
}
function mudaTamanhoDoTexto() {
    let pegaP =  document.body.style.fontSize = "18px";
}
function mudaEspacamento() {
    console.log("teste 4 ");
}
function mudaTipoDeFonte() {
    console.log("teste 5");
}