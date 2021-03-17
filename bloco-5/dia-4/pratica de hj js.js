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
    let  pegaTodoOtexto = document.getElementsByClassName("texto")[0];
    let pegaCor = pegaTodoOtexto.style.color;
    if(pegaCor !== "blue"){
        localStorage.setItem("corTexto" , "blue");
        mudaTexto();
    }
    else {
        localStorage.setItem("corTexto" , "black");
        mudaTexto();
    }
}
 function mudaTexto(){
    let encontraTexto = document.getElementsByClassName("texto");
    for(let index = 0; index < encontraTexto.length;index ++){
    encontraTexto[index].style.fontSize = localStorage.getItem("tamanho");
    encontraTexto[index].style.color = localStorage.getItem("corTexto");
 }
  
 } 
 mudaTexto();
function mudaTamanhoDoTexto() {

    let tamanhoDoTexto = document.getElementsByClassName("texto")[0];
    let tamanhoDaFonte = tamanhoDoTexto.style.fontSize;
    if (tamanhoDaFonte !== '15px'){
    localStorage.setItem("tamanho" , "15px");
    mudaTexto();
    } 
    else {
        localStorage.setItem("tamanho" , "20px"); 
        mudaTexto();
    }
    
} 


function mudaEspacamento() {
    let PegaTexto = document.getElementsByClassName("texto")[0];
    let espacamento = PegaTexto.style.;
    console.log(espacamento);
}
function mudaTipoDeFonte() {
    console.log("teste 5");
}