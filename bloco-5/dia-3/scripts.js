function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

    const dezDaysList = ["29", "30", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];
    //const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    let encontraLu =document.getElementById("days");
    
    for(let index = 0;index < dezDaysList.length;index ++) {
        let criarItemDaLista = document.createElement("li");
        if(index == 25 || index == 32){
            criarItemDaLista.classList.add("day", "holiday")
            criarItemDaLista.innerText = dezDaysList[index];
            encontraLu.appendChild(criarItemDaLista);
            }
        else if (index == 5 || index == 12 || index == 19){
        criarItemDaLista.classList.add("day", "friday")
        criarItemDaLista.innerText = dezDaysList[index];
        encontraLu.appendChild(criarItemDaLista);
        }
        else if(index == 26) {
        criarItemDaLista.classList.add("day" , "friday" , "holiday");
        criarItemDaLista.innerText = dezDaysList[index];
        encontraLu.appendChild(criarItemDaLista);
        }
        else {
        criarItemDaLista.classList.add("day")
        criarItemDaLista.innerText = dezDaysList[index];
        encontraLu.appendChild(criarItemDaLista);
        }
    }

//exercicio 2
    let buttonContainer = document.querySelector('.buttons-container');
    let criarButton = document.createElement("button");
    criarButton.id = "btn-holiday";
    criarButton.innerText = "feriados";
    buttonContainer.appendChild(criarButton);

//exercicio 3 

    criarButton.onclick = function(){
      let encontrarHoliday = document.querySelectorAll('.holiday');
    for(index = 0;index < encontrarHoliday.length;index ++ ){
      if(encontrarHoliday[index].style.backgroundColor != 'gray'){
        encontrarHoliday[index].style.backgroundColor = 'gray';
      }else{
        encontrarHoliday[index].style.backgroundColor = 'white';
      }

    }
    }
//exercicio 4

   //let buttonContainer = document.querySelector('.buttons-container');
    let criarButtonFriday = document.createElement("button");
    criarButtonFriday.id = "btn-friday";
    criarButtonFriday.innerText = "sexta";
    buttonContainer.appendChild(criarButtonFriday);

//exercicio 5

    criarButtonFriday.onclick = function(){
    let encontrarFriday = document.getElementsByClassName("friday");
    let cont = 4;

    for(let index = 0;index < encontrarFriday.length;index ++ ){
      let valorDaLista = encontrarFriday[index].value;
      if(encontrarFriday[index].innerHTML!== "SEXTOU!") {
        encontrarFriday[index].innerText = "SEXTOU!"
      }
       else{
         encontrarFriday[index].innerText = cont;
         cont = cont + 7;
       } 
    } 
    }
// exercicio 6

    let aumentaTamanho = document.querySelector('#day')
    for (var i = 0; i < aumentaTamanho.length; i++) {
    aumentaTamanho[i].addEventListener('mouseout', minhaFuncao);
    }
    function  minhaFuncao(){
      let lista =document.getElementsByClassName("day");
       lista[3].style.fontSize="40px";
       }
    
    
