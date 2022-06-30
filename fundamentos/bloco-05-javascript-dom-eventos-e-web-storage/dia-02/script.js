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

//Exercicio 3
let centerSection = document.createElement('section');
centerSection.className = 'center-content';
main.appendChild(centerSection);

//Exercicio 4
let centerParagraph = document.createElement('p');
centerParagraph.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a est consequat, elementum tortor quis, cursus dui. Nullam sollicitudin neque a ligula molestie dignissim. Pellentesque nec aliquam ex, eget auctor sem. Vestibulum turpis tellus, ultricies vel arcu sed, tempus accumsan lorem.';
centerSection.appendChild(centerParagraph);

//Exercicio 5

let leftSection = document.createElement('section');
leftSection.className = 'left-content';
main.appendChild(leftSection);