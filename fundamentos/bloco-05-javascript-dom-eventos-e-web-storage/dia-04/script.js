//Set Configs
document.body.style.backgroundColor = localStorage.getItem('BackGround');
document.getElementById('texto').style.color = localStorage.getItem('FontColor');
document.getElementById('texto').style.fontSize = localStorage.getItem('FontSize');
document.getElementById('texto').style.lineHeight = localStorage.getItem('lineHeight');
document.getElementById('texto').style.fontFamily = localStorage.getItem('fontfamily');

//Functions

//BackGround
let buttonCor = document.getElementById('button-color');
buttonCor.addEventListener('click',escolheCor);

function escolheCor(){
    document.body.style.backgroundColor = cor.value;
    localStorage.setItem('BackGround', cor.value);
}


//Text-Color
let buttonCorFonte = document.getElementById('button-cor-fonte');
buttonCorFonte.addEventListener('click',corFonte);

function corFonte(){
    let p = document.getElementById('texto');
    p.style.color = cordefonte.value;
    localStorage.setItem('FontColor', cordefonte.value);
}



//Font-Size
let buttonTamanhoFonte = document.getElementById('button-tamanho-fonte');
buttonTamanhoFonte.addEventListener('click',tamanhoFonte);

function tamanhoFonte(){
    let p = document.getElementById('texto');
    p.style.fontSize = tamanhofonte.value;
    localStorage.setItem('FontSize', tamanhofonte.value);
}


//Line-Heigth
let buttonEspacamento = document.getElementById('button-espacamento');
buttonEspacamento.addEventListener('click',espacoLinha);

function espacoLinha(){
    let p = document.getElementById('texto');
    p.style.lineHeight = espacamento.value;
    localStorage.setItem('lineHeight', espacamento.value);
}

//Font-Family
let buttonFont = document.getElementById('button-fontstyle');
buttonFont.addEventListener('click',fontType);

function fontType(){
    let p = document.getElementById('texto');
    p.style.fontFamily = fontstyle.value;
    localStorage.setItem('fontFamily', fontstyle.value);
}