/*Iremos utilizar esse array para realizar os exercícios do 1 ao 7: let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


Exercício 1 
Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();*/

//RESPOSTA

/*let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let number of numbers) {
    console.log(number);
}*/




/* Exercício 2
Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;*/

//RESPOSTA

/*let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for (let i = 0; i < numbers.length; i++) {
    soma = soma + numbers[i]; 
}

console.log(soma);*/




/*Exercício 3
Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;*/

//RESPOSTA

/*let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for (let i = 0; i < numbers.length; i++) {
    soma = soma + numbers[i]; 
}

let media = soma/numbers.length;
console.log(media);*/




/*Exércício 4
Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";*/

//RESPOSTA

/*let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for (let i = 0; i < numbers.length; i++) {
    soma = soma + numbers[i]; 
}

let media = soma/numbers.length;

if (media>20) {
    console.log("Valor maior que 20");
} else {
    console.log("Valor menor ou igual a 20");
}*/




/*Exercício 5
Utilizando for, descubra qual o maior valor contido no array e imprima-o;*/

//RESPOSTA

/*let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = 0;

for (let i = 0; i < numbers.length; i++) {
    if(numbers[i]> maior){
        maior = numbers[i];
    }
}

console.log(maior);*/




/*Exercício 6
Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";*/

//RESPOSTA

/*let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = 0;
for (let i = 0; i < numbers.length; i++) {
    if(numbers[i]%2 === 1){
        maior+=1;
    }
}

if (maior > 0) {
    console.log(maior);
} else {
    console.log("Nenhum valor primo encontrado");
}*/




/*Exercício 7
Utilizando for, descubra qual o menor valor contido no array e imprima-o;*/

//RESPOSTA

/*let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if(numbers[i]< menor){
        menor = numbers[i];
    }
}

console.log(menor);*/




/*Exercício 8
Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;*/

//RESPOSTA

/*let numbers = [];

for (let i = 0; i < 25; i++) {
    numbers.push(i+1);
    console.log(numbers[i]);
}
// OR
console.log(numbers);*/




/*Exercício 9
Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.*/

//RESPOSTA

/*let numbers = [];

for (let i = 0; i < 25; i++) {
    numbers.push(i+1);
    console.log(numbers[i]/2);
}*/




// -------------------BONUS------------------------

//Considere o array numbers abaixo e faça os exercícios:
//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


/*Exercício bonus 1
Ordene o array numbers em ordem crescente e imprima seus valores;*/

//RESPOSTA

/*let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let i = 1; i < numbers.length; i++){
    for (let j = 0; j < i; j++) {
        if (numbers[i]<numbers[j]) {
            let aux = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = aux;
        }
    }
}
console.log(numbers);*/




/*Exercício bonus 2
Ordene o array numbers em ordem decrescente e imprima seus valores;*/

//RESPOSTA

/*let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let i = 1; i < numbers.length; i++){
    for (let j = 0; j < i; j++) {
        if (numbers[i]>numbers[j]) {
            let aux = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = aux;
        }
    }
}
console.log(numbers);*/




/*Exercício bonus 3
Agora crie um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push. O resultado deve ser o array abaixo:
[45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]*/

//RESPOSTA

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let multi = [];
for (let i = 0; i < numbers.length; i++){
    
    if(i+1 === numbers.length){
        multi.push(numbers[i]*2);
    }else{
        multi.push(numbers[i]*numbers[i+1]);
    }
}

console.log(multi);
