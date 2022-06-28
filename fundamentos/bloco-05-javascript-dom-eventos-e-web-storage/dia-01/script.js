/*
Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName()
1. Crie uma função que mude o texto na tag <p>-----</p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
3. Crie uma função que mude a cor do quadrado vermelho para branco.
4. Crie uma função que corrija o texto da tag <h1>.
5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.
*/


//EXERCICIO 1
function mudaParagrafo(text, i) {
    let aux = document.getElementsByTagName("p");
    aux[i].innerText = text;
}

texto = 'Olá sou o Samuel em 2024 possuo 23 anos sou desenvolvedor web full stack me formei pela trybe e trabalho a 1 ano aqui na empresa x'

mudaParagrafo(texto, 1);

//EXERCICIO 2
function mudaBgMainContent(i, color){
    let aux = document.getElementsByClassName("main-content");
    aux[i].style.backgroundColor = color; 
}
cor = 'rgb(76,164,109)';
mudaBgMainContent(0, cor);

//EXERCICIO 3
function mudaBgCenterContent(i, color){
    let aux = document.getElementsByClassName("main-content")[0].getElementsByClassName("center-content");
    aux[i].style.backgroundColor = color; 
}
cor = 'rgb(255,255,255)';
mudaBgCenterContent(0, cor);

//EXERCICIO 4
function corrigiJS() {
    let aux = document.getElementsByClassName("title")[0];
    aux.innerText = 'Exercício 5.1 - JavaScript';
}
corrigiJS();

//EXERCICIO 5
function transformUppercase(tag) {
    let aux = document.getElementsByTagName(tag);
    for (let i = 0; i < aux.length; i += 1) {
        aux[i].style.textTransform = 'uppercase';
    }
}
tag = "p";
transformUppercase(tag);