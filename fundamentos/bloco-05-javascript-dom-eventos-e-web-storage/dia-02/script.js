let titleContent = 'Exercício 5.2 - JavaScript DOM';
let bodyPosition = document.lastChild.lastChild;
let title = document.createElement('h1');
title.innerText = titleContent;
console.log(bodyPosition);
bodyPosition.appendChild(title);

