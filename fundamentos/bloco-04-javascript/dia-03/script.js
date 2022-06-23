/*Exercício 1
1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero.
Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.*/

//RESPOSTA

let fatorial = 10;
let resultado = 1;

for (let i = fatorial; i > 1; i-=1) {
    resultado = resultado * i;
}

console.log(resultado);