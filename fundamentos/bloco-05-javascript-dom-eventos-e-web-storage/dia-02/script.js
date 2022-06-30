//Exercício 1

let titleContent = 'Exercício 5.2 - JavaScript DOM';
let bodyPosition = document.lastChild.lastChild;
let title = document.createElement('h1');
title.innerText = titleContent;
bodyPosition.appendChild(title);

//Exercício 2

let main = document.createElement('main');
main.className = 'main-content';
bodyPosition.appendChild(main);
console.log(main);