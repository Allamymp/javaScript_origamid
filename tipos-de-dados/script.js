var nome = 'Allamy'; // String
var idade = 30; // Number
var possuiFaculdade = true; // Boolean
var time; //Undefined
var comida = null; //Null null = object em tipo
var simbolo = Symbol(); // Symbol
var novoObjeto = {} // Object

console.log(typeof simbolo)// retorna o tipo do dado

var sobrenome = 'Monteiro';
var nomeCompleto = nome + sobrenome;

console.log(nomeCompleto);
nomeCompleto = nome +' '+ sobrenome;
console.log(nomeCompleto);

var frase = `${nome} tem ${idade} anos.`; // Template String, use crase e não aspas simples
console.log(frase)


// Declare uma variável contendo uma string

var variavelString = "texto";

// Declare uma variável contendo um número dentro de uma string

var stringComNum = '2';

// Declare uma variável com a sua idade

var minhaIdade = 30;
// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas

var meuNome = 'Allamy', sobrenome= 'Monteiro', nomeCompleto = meuNome+' '+sobrenome

// Coloque a seguinte frase em uma variável: It's time

var frase2 = `${variavelString} It's time.`

console.log(variavelString, stringComNum, minhaIdade, meuNome, sobrenome, nomeCompleto, frase2)

// Verifique o tipo da variável que contém o seu nome
