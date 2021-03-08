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
 let encontraTexto = document.getElementsByClassName("texto");
 console.log(encontraTexto[0])
function mudaTamanhoDoTexto() {

    let pegaP =  document.getElementsByTagName("p")[0];
    pegaP.style.fontSize = localStorage.getItem("tamanho");
    if (pegaP.style.fontSize != "20px"){
    localStorage.setItem("tamanho" , "20px");
    console.log("entrou no if");
    } 
    else {
        localStorage.setItem("tamanho" , "15px"); 
        console.log("entrou no else");
    }
} 
function mudaEspacamento() {
    console.log("teste 4 ");
}
function mudaTipoDeFonte() {
    console.log("teste 5");
}