//Exercício 1
/*Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:
Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b)*/

//RESPOSTA
/*const a = 5;
const b= 3;
let soma = a+b;
console.log(soma);

let sub = a-b;
console.log(sub);

let mult = a*b;
console.log(mult);

let div = a/b;
console.log(div);

let resto = a%b;
console.log(resto);*/




/* Exercício 2 
Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.*/

//RESPOSTA
/*const a = 8;
const b = 6;

if(a>b){
    console.log("O número maior é ",a);
}else if(b>a){
    console.log("O número maior é ",b);
}else{
    console.log("O número ",a,"é igual ao número ",b);
}*/




/*Exercício 3
Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.*/

//RESPOSTA

/*const a = 8;
const b = 8;
const c =7;

if(a>b && a>c){
    console.log("O número maior é ",a);
}else if(b>a && b>c){
    console.log("O número maior é ",b);
}else if(c>a && c>b){
    console.log("O número maior é ",c);
}else{
    console.log("Não funciona com números iguais engraçadinho");
}*/




/*Exercício 4
Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.*/

//RESPOSTA

/*const a = 0;

if(a===0){
    console.log("zero");
}else if(a>0){
    console.log("positive");
}else if(a<0){
    console.log("negative");
}*/ 




/*Exercício 5
Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.*/

//RESPOSTA

/*const a = 90;
const b = 30;
const c = 60;

soma = a+b+c;
if(a<0 || b<0 || c<0){
    console.log("Erro ângulo inválido");
}else if(soma === 180){
    console.log(true);
}else if(soma != 180){
    console.log(false);
}*/




/*Exercício 6 
Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

king = rei
queen = rainha
bishop = bispo
knight = cavalo
rook = torre
pawn = peão */

//RESPOSTA

/*let entrada = "king";

switch(entrada){
    case "pawn":
        console.log("forward");
    break;
    case "rook":
        console.log("forward, backward, right or left");
    break;
    case "knight":
        console.log("L-shape");
    break;
    case "bishop":
        console.log("diagonals");
    break;
    case "queen":
        console.log("forward, backward, right, left or diagonals");
    break;
    case "king":
        console.log("around");
    break;
    default:
        console.log("Error, this piece doesn't exist");
    break;
}*/




/*Exercício 7 
Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.*/

//RESPOSTA
/*const nota = 100;
if(nota > 100 || nota <0){
    console.log("Nota invalida");
}else if(nota>=90){
    console.log("Nota A");
}else if(nota>=80 && nota < 90){
    console.log("Nota B");
}else if(nota>=70 && nota < 80){
    console.log("Nota C");
}else if(nota>=60 && nota < 70){
    console.log("Nota D");
}else if(nota>=50 && nota < 60){
    console.log("Nota E");
}else if(nota < 50){
    console.log("Nota F");
}*/




/*Exercício 8
 Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.
Bonus: use somente um if.*/

//RESPOSTA
/*const a = 2;
const b = 4;
const c = 8;

if (a%2 === 0 || b%2 === 0 || c%2 === 0) {
    console.log(true);
} else {
    console.log(false);
}*/




/*Exercício 9
Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.
Bonus: use somente um if.*/

//RESPOSTA
/*const a = 2;
const b = 3;
const c = 5;

if (a%2 === 1 || b%2 === 1 || c%2 === 1) {
    console.log(true);
} else {
    console.log(false);
}*/




/*Exercício 10
Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
Atente que, sobre o custo do produto, incide um imposto de 20%.
Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
valorCustoTotal = valorCusto + impostoSobreOCusto
lucro = valorVenda - valorCustoTotal (lucro de um produto)*/

//RESPOSTA
/*const custo = 100;
const venda = 250;
let imposto = custo*20/100;
let custoTotal = custo+imposto;
let lucro = venda-custoTotal;

if(custo < 0 || venda < 0 ){
    console.log("Error, valores inválidos");
}else{
    console.log("Lucro de 1000 produtos = ",lucro*1000)
}*/




/*Exercício 11
Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
INSS (Instituto Nacional do Seguro Social)
Salário bruto até R$ 1.556,94: alíquota de 8%
Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
IR (Imposto de Renda)
Até R$ 1.903,98: isento de imposto de renda
De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.*/

//RESPOSTA
const salario = 13000;
let impostoINSS;

switch(true){
    case salario <= 1556.94:
        impostoINSS = salario*8/100;
    break;
    case salario > 1556.94 && salario <= 2594.92:
        impostoINSS = salario*9/100;
    break;
    case salario > 2594.92 && salario <= 5189.82:
        impostoINSS = salario*11/100;
    break;  
    case salario > 5189.82:
        impostoINSS = 570.88;
    break;
}

let salarioINSS = salario - impostoINSS;
let impostoRF;

switch(true){
    case salarioINSS <= 1903.98:
        impostoRF = 0;
    break;
    case salarioINSS > 1903.98 && salarioINSS <= 2826.65:
        impostoRF = (salarioINSS*7.5/100)-142.80;
    break;
    case salarioINSS > 2826.65 && salarioINSS <= 3751.05:
        impostoRF = (salarioINSS*15/100)-354.80;
    break;  
    case salarioINSS > 3751.05 && salarioINSS <= 4664.68:
        impostoRF = (salarioINSS*22.5/100)-636.13;
    break;
    case salarioINSS > 4664.68:
        impostoRF = (salarioINSS*27.5/100)-869.36;
    break;
}

let salarioLiquido = salarioINSS - impostoRF;

console.log(salarioLiquido);
