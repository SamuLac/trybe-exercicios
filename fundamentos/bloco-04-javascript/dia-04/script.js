/*Exercício 1
Usando o objeto abaixo, faça os exercícios a seguir:
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
}; 
1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.*/

//RESPOSTA

/*let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  }; 

  console.log("Bem-vinda, " + info.personagem);*/




/* Exercício 2
  Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console.*/

//RESPOSTA

/*let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
}; 

info.recorrente = 'Sim';
console.log(info);*/




/*Exercício 3
Faça um for/in que mostre todas as chaves do objeto.*/

//RESPOSTA

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
}; 

for (let key in info) {
  console.log(key);
}