function retornaNumeroAleatorio() {
    return Math.floor(Math.random() * 100);   
}

describe('testes para numero aleatorio', () => {
    

// test("#somar", () => {
//   retornaNumeroAleatorio = jest.fn().mockReturnValue(10);
  
//   retornaNumeroAleatorio();
//   expect(retornaNumeroAleatorio).toHaveBeenCalledTimes(1);
//   expect(retornaNumeroAleatorio()).toBe(10);
//   expect(retornaNumeroAleatorio).toHaveBeenCalledTimes(2);
//   expect(retornaNumeroAleatorio).toHaveBeenCalled();
// });

// test('# trocar por dividir', () => {
//     retornaNumeroAleatorio = jest.fn().mockImplementation((a, b) => a / b);
//     expect(retornaNumeroAleatorio(4,2)).toBe(2);
//     expect(retornaNumeroAleatorio(1,2)).toBe(0.5);
//     expect(retornaNumeroAleatorio(20,5)).toBe(4);
// });

test('trocar funçao numero aleatorio', () => {
    retornaNumeroAleatorio = jest.fn().mockImplementation((a, b, c) => a * b * c);
    expect(retornaNumeroAleatorio).toHaveBeenCalledTimes(0);
    expect(retornaNumeroAleatorio(10, 2, 3)).toBe(60);
    expect(retornaNumeroAleatorio).toHaveBeenCalledTimes(1);
    expect(retornaNumeroAleatorio(100, 2, 3)).toBe(600);
    expect(retornaNumeroAleatorio).toHaveBeenCalledTimes(2);
})

});


const firstFunction = (str) => str.toUpperCase();
const secondFunction = (str) =>  str.charAt(0);
const thirdFunction = (str1, str2) => str1.concat(str2);