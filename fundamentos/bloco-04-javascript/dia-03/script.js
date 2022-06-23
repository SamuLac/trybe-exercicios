/*Exercício 1
1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero.
Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.*/

//RESPOSTA

/*let fatorial = 10;
let resultado = 1;

for (let i = fatorial; i > 1; i-=1) {
    resultado = resultado * i;
}

console.log(resultado);*/




/*Exercício 2
2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.*/

//RESPOSTA

/*let word = 'trybe';
let resultado = "";
for(let i = word.length - 1; i >= 0;i-=1){
    resultado += word[i];
}

console.log(word,resultado);*/




/*Exercicio 3
Considere o array de strings abaixo:
let array = ['java', 'javascript', 'python', 'html', 'css'];
Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.*/

//RESPOSTA (MAIOR)

/*let array = ['java', 'javascript', 'python', 'html', 'css'];

let maior = array[0].length;
for (let i = 1; i < array.length; i+=1) {
    if (array[i].length > maior) {
        maior = array[i].length;
    } 
}
console.log(maior);

//RESPOSTA (MENOR)

let menor = array[0].length;
for (let i = 1; i < array.length; i+=1) {
    if (array[i].length < menor) {
        menor = array[i].length;
    } 
}
console.log(menor);*/




/*Exercício 4
Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.*/

//RESPOSTA

/*let maior = 0;

for (let i = 2; i <= 50; i+=1) {
    let eprimo = true;
    for (let divisor = 2; divisor < i; divisor+=1) {
        if (i%divisor === 0) {
            eprimo = false;
        }
    }
    
    if (eprimo && i>maior) {
        maior = i;
    }

}

console.log(maior);*/




// -------------------BONUS------------------------




/*Exercício Bonus 1
Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n.*/

//RESPOSTA

let n =5;
let linha = "";
for(i=0;i<n;i+=1){

    for(j=0;j<n;j+=1){
        linha +="*";
    }
    console.log(linha);
    linha="";
}