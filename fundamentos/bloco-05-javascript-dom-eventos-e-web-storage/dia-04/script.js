//Set Configs
document.body.style.backgroundColor = localStorage.getItem('BackGround');
document.getElementById('texto').style.color = localStorage.getItem('FontColor');
document.getElementById('texto').style.fontSize = localStorage.getItem('FontSize')

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
    let a = document.getElementById('texto');
    a.style.fontSize = tamanhofonte.value;
    localStorage.setItem('FontSize', tamanhofonte.value);
}