let valorCusto = 90;
let valorDeVenda = 120


let impostoSobreOCusto = valorCusto * 0.20;


if(valorCusto <= 0 || valorDeVenda <= 0){
    console.log("erro");
}
else{
    let valorCustoTotal = valorCusto + impostoSobreOCusto

    let lucro = valorDeVenda - valorCustoTotal;

    console.log(lucro);
}
