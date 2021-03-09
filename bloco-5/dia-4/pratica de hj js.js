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
 function mudaTexto(){
    let encontraTexto = document.getElementsByClassName("texto");
    for(let index = 0; index < encontraTexto.length;index ++){
    encontraTexto[index].style.fontSize = localStorage.getItem("tamanho");
 }
  
 } 
 mudaTexto();
function mudaTamanhoDoTexto() {

    let tamanhoDoTexto = document.getElementsByClassName("texto")[0];
    let tamanhoDaFonte = tamanhoDoTexto.style.fontSize;
    if (tamanhoDaFonte !== '15px'){
    localStorage.setItem("tamanho" , "15px");
    mudaTexto();
    console.log("entrou no if");
    } 
    else {
        localStorage.setItem("tamanho" , "20px"); 
        mudaTexto();
        console.log("entrou no else");
    }
    console.log(tamanhoDaFonte);
    
} 


function mudaEspacamento() {
    console.log("teste 4 ");
}
function mudaTipoDeFonte() {
    console.log("teste 5");
}