const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

const somar = async (a, b) => { await sleep(10000); return a + b }; // Função de somar mais lenta do mundo
const subtrair = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;
function subtrai(a,b) {
    return a + b;
}



// test("funçao subtrair", () => {
//     // testando se a função foi chamada e qual seu retorno
//     subtrai = jest.fn().mockReturnValue("10");
//     subtrai();
//     expect(subtrai).toHaveBeenCalled();
//     expect(subtrai(11,1)).toBe("10");
//   });

