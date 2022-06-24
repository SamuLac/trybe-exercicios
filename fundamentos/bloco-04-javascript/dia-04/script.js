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

/*let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
}; 

for (let key in info) {
  console.log(key);
}*/




/*Exercício 4
Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto.*/

//RESPOSTA

/*let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

for (let key in info) {
  console.log(info[key]);
}*/




/*Exercício 5
Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves.*/

//RESPOSTA

/*let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
}; 

let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
}; 

for (let key in info && info2) {
  if (key === 'recorrente' && info[key]==='Sim' && info2[key]==='Sim') {
    console.log("Ambos recorrentes");
  }else {
    console.log(info[key] + ' e ' + info2[key]);
  }
}*/




/*Exércício 6
Usando o objeto abaixo, faça os exercícios a seguir:
let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};
6 - Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos, e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".*/

//RESPOSTA

/*let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};
let favorito = leitor.livrosFavoritos[0];
console.log("O livro favorito de " + leitor.nome + " " + leitor.sobrenome + " se chama " +"'"+favorito['titulo']+"'");*/




/*Exercício 7
7 - Adicione um novo livro favorito na chave livrosFavoritos, que é um array. Atribua a esta chave um objeto contendo as seguintes informações:
{
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
}*/

//RESPOSTA

/*let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

leitor.livrosFavoritos.push({
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
});

console.log(leitor);*/




/*Exercício 8
Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: "Julia tem 2 livros favoritos".*/

//RESPOSTA

/*console.log(leitor.nome + " tem " + leitor.livrosFavoritos.length + " livros favoritos");*/




//-------------------------FUNÇÕES-------------------------




/*Exercício 1
Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.*/

//RESPOSTA

/*function testePalindromo(palavra) {
  let resultado = "";
  for (let index = palavra.length-1; index >= 0; index-=1) {
    resultado += palavra[index];
  }
  if(resultado === palavra){
    return true;
  } else {
    return false;
  }
}

console.log(testePalindromo('arara'));
console.log(testePalindromo('roda'));*/




/*Exercício 2
Crie uma função que receba um array de inteiros e retorne o índice do maior valor.*/

//RESPOSTA

/*function maiorNumero(numero) {
  let maior = numero[0];
  let indexMaior;
  for (let key in numero) {
    if (numero[key] > maior ) {
      maior = numero[key];
      indexMaior = key;
    }
  } 
  return indexMaior;
}

let num = [2, 3, 6, 7, 10, 1];

console.log(maiorNumero(num));*/




/*Exercício 3
Crie uma função que receba um array de inteiros e retorne o índice do menor valor.*/

//RESPOSTA

/*function menorNumero(numero) {
  let menor = numero[0];
  let indexMenor;
  for (const key in numero) {
    if (numero[key] < menor) {
      menor = numero[key];
      indexMenor = key;
    }
  }
  return indexMenor;
}

let num = [2, 4, 6, 7, 10, 0, -3];

console.log(menorNumero(num));*/




/*Exercício 4
Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.*/

//RESPOSTA

/*function maiorPalavra(palavras) {
  let maiorPalavra = palavras[0];
  for (const key of palavras) {
    if (key.length > maiorPalavra.length) {
      maiorPalavra = key;
    }
  }
  return maiorPalavra;
}

nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

console.log(maiorPalavra(nomes));*/




/*Exercício 5
Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.*/

//RESPOSTA

/*function contaNumeros(num) {
  let cont = 0;
  let final = 0;
  let number =0;
  for (let index of num) {
    for (let key of num) {
      if (index === key) {
        cont+=1; 
      }
    }
    if (cont > final) {
      final = cont;
      number = index;
    }
    cont = 0;
  }
  return number;
}
numeros =[2, 3, 2, 5, 8, 2, 3];

console.log(contaNumeros(numeros));*/




/*Exercício 6
Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.*/

//RESPOSTA

/*function somatorio(n) {
  let somatorio = 0;
  for (let index = 1; index <= n; index+=1) {
    somatorio += index;
  }
  return somatorio;
}

let n = 5;
console.log(somatorio(n));*/




/*Exercício 7
Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.*/

//RESPOSTA

function verificaFinal(palavra,final) {
  aux = "";
  for (let index = palavra.length - final.length; index < palavra.length; index+=1){
      aux+=palavra[index];
  }
  if(aux === final){
    return true;
  }else{
    return false;
  }
}

console.log(verificaFinal("trybe","be"));
console.log(verificaFinal("fernandete","fernan"));