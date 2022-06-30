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

//Exercicio 1  
/*    Crie um calendário dinamicamente.
O array decemberDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Sua função deve criar dinamicamente cada dia do calendário e os adicionar dentro da tag <ul>.
Note que os dias 29 e 30 de novembro estão no array, pois representam respectivamente Domingo e Segunda-feira.
A tag <ul> deve conter o id 'days';
Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day. Ex: <li class="day">3</li>
Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday. Ex: <li class="day holiday">24</li>
Os dias 4, 11, 18 e 25 são sextas-feiras. Eles devem conter a classe day e a classe friday. Ex: <li class="day friday">4</li>*/

let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
let listaDezembro = document.getElementById('days');

for (let i = 0; i < decemberDaysList.length; i += 1) {
  let item = decemberDaysList[i];
  let decemberDaysItems = document.createElement('li');
  decemberDaysItems.innerText = item;
  if (item === 24 || item === 25 || item === 31) {
    decemberDaysItems.classList.add('holiday');
    if (item === 25) {
      decemberDaysItems.classList.add('friday');
    }
  } else if (item === 4 || item === 11 || item === 18) {
    decemberDaysItems.classList.add('friday');
  }
  decemberDaysItems.classList.add('day');
  listaDezembro.appendChild(decemberDaysItems);
}

//Exercicio 2

let buttonsContainer = document.getElementsByClassName('buttons-container')
let buttons = document.createElement('button');
buttons.innerText = 'Feriados';
buttons.id = 'btn-holiday'
buttonsContainer[0].appendChild(buttons);

//Exercicio 3
checkClick = true;
buttons.addEventListener("click", mudaCor)
function mudaCor() {
  if (checkClick) {
    let feriadosCor = document.getElementsByClassName('holiday');
    for (let i = 0; i < feriadosCor.length; i += 1) {
      feriadosCor[i].style.backgroundColor = 'yellow';
    }
    checkClick = false;
  } else {
    let feriadosCor = document.getElementsByClassName('holiday');
    for (let i = 0; i < feriadosCor.length; i += 1) {
      feriadosCor[i].style.backgroundColor = 'rgb(238,238,238)';
    }
    checkClick = true;
  }
}