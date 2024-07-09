//NÚMEROS
var idade = 23;
console.log(idade);

var gols = 1000;
console.log(gols);

var pi = 3.14; //ponto para decimal
console.log(pi);

var exp = 2e10; //20000000000
console.log(exp);

//OPERADORES ARITMÉTICOS
var soma = 100+50 // 150
console.log(soma);

var subtracao = 100-50; //50
console.log(subtracao);

var multiplicacao = 100*2; //200
console.log(multiplicacao);

var divisao = 100/2; //50
console.log(divisao);

var expoente = 2**4; //16
console.log(expoente);

var modulo = 14%5;//4
console.log(modulo);

//OPERADORES ARITMÉTICOS (STRINGS)


var soma = '100'+50//10050 concatena
console.log(soma);

var subtracao = '100'-50;//50
console.log(subtracao);

var multiplicacao = '100'*'2'; //200
console.log(multiplicacao);

var multiplicacao2 = '100'*2;
console.log(multiplicacao2);

var divisao = 'Comprei 10'/2;//NaN (not a number)
console.log(divisao);

var testeNaN = 'isso é 100'/2;
console.log(isNaN(testeNaN));

//NaN = NOT A NUMBER 

var numero = 80;
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2 // NaN (Not a Number)


//OPERADORES ARITMÉTICOS UNÁRIOS

var incremento = 5;
console.log(incremento++);//5
console.log(incremento);//6

var incremento2 = 5;
console.log(++incremento2);//6
console.log(incremento2);//6


var frase = 'Isso é um teste';
+frase; // NaN
-frase; // NaN

var idade = '28';
+idade; // 28 (número)
-idade; // -28 (número negativo)
console.log(+idade + 5); // 33 

var possuiFaculdade = true;
console.log(+possuiFaculdade); // 1

var possuiFaculdade = false;
console.log(+possuiFaculdade); // 0

//EXERCICIOS

console.log('EXERCICIOS')

// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20; //35

// Crie duas expressões que retornem NaN

console.log('s'/10)
var texto = '22a';
console.log(+texto);

// Somar a string '200' com o número 50 e retornar 250
console.log(+'200'+50);

// Incremente o número 5 e retorne o seu valor incrementado
var num = 5;
console.log(++num);
// Como dividir o peso por 2?
var numero = '80';
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2; // NaN (Not a Number)

console.log(numero/2+unidade)

