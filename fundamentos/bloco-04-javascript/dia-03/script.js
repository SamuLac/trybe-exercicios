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

let array = ['java', 'javascript', 'python', 'html', 'css'];

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
console.log(menor);