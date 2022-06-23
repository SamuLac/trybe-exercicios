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

/*let n =5;
let linha = "";
for(i=0;i<n;i+=1){

    for(j=0;j<n;j+=1){
        linha +="*";
    }
    console.log(linha);
    linha="";
}*/




/*Exercício Bonus 2
Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.*/

//RESPOSTA

/*let n = 5;
let linha = "";
for(i=0;i<n;i+=1){
    linha +="*";
    console.log(linha);
}*/




/*Exercicio Bonus 3
Agora inverta o lado do triângulo.*/

//RESPOSTA

/*let n = 5;
let linha = "";
for(i=n;i>n;i-=1){
    for(j=0; j<n ; j+=1){
        if(j+1 >= i){
            linha+='*'
        }else{
            linha+=' '
        }
    }
    console.log(linha);
    linha = "";
}*/




/*Exercício Bonus 4
Depois, faça uma pirâmide com n asteriscos de base n.*/

//RESPOSTA

/*let n = 7;
let linha = "";
let meioMaior=0;
let meioMenor=0;

if(n%2 === 0){
    meioMenor = n/2-1;
    meioMaior = n/2;
}else{
    meioMenor = Math.floor(n/2);
    meioMaior = Math.floor(n/2);
}

for(i=0;i<n;i+=2){
    for(j=0; j<n ; j+=1){
        if(j< meioMenor || j > meioMaior){
            linha+=' '
        }else{
            linha+='*'
        }
    }
    console.log(linha);
    linha = "";
    meioMaior+=1;
    meioMenor-=1;
}*/




/*Exercício Bonus 5
Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:*/

//RESPOSTA

/*let n = 7;
let linha = "";

bordaEsquerda = Math.floor(n/2);
bordaDireita = Math.floor(n/2);
for(i=0;i<n;i+=2){
    for(j=0; j<n ; j+=1){
        if(i+1 === n){
            linha+='*';
        }else if(j === bordaDireita || j === bordaEsquerda){
            linha+='*';
        }else{
            linha+=' ';
        }
    }
    console.log(linha);
    linha = "";
    bordaDireita+=1;
    bordaEsquerda-=1;
}*/




/*Exercício Bonus 6
Faça um programa que diz se um número definido numa variável é primo ou não.*/

//RESPOSTA

let n = 48;
let eprimo = true;
for (let divisor = 2; divisor < n; divisor+=1) {
    if (n%divisor === 0) {
        eprimo = false;
    }
}
console.log("O número ",n,"é primo?:",eprimo);