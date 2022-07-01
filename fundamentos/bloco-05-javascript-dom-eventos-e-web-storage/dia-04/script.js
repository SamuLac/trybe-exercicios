document.body.style.backgroundColor = localStorage.getItem('BackGround');
let buttonCor = document.getElementById('button-color');
buttonCor.addEventListener('click',escolheCor);

function escolheCor(){
    document.body.style.backgroundColor = cor.value;
    localStorage.setItem('BackGround', cor.value);
}

