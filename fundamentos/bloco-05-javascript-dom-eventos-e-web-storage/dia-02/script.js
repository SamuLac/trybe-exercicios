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

//Exercicio 6

let rightSection = document.createElement('section');
rightSection.className = 'right-content';
main.appendChild(rightSection);

//Exercicio 7
let leftImg = document.createElement('img');
leftImg.src = 'https://picsum.photos/200';
leftImg.className = 'small-image';
leftSection.appendChild(leftImg);

//Exercicio 8
let rightListContent = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez'];
let rightList = document.createElement('ul');
rightSection.appendChild(rightList);

for (let i = 0; i < rightListContent.length; i += 1) {
    let item = rightListContent[i];
    let rightListItem = document.createElement('li');
    rightListItem.innerText = item;   
    rightList.appendChild(rightListItem);
}

//Exercicio 9

let subTitleContent = ['Sub 1', 'Sub 2', 'Sub 3'];

for (let i = 0; i < subTitleContent.length; i += 1) {
    let subTitle = document.createElement('h3');
    subTitle.innerText = subTitleContent[i]
    main.appendChild(subTitle);
}

//Exercicio 10

title.className = 'title';