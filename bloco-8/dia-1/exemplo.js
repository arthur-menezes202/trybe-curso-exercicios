// Ao chamar a função doingThings:
const doingThings = (mensagem,action) => {
    for(let index in mensagem){
        action(mensagem[index]);
    }
     
};
const array = ['Acordando!!', 'Bora tomar café!!', 'Partiu dormir!!']
doingThings(array, console.log);

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
