var possuiGraduacao = true;

if(possuiGraduacao){
  console.log('É verdadeiro!');
}else{
  console.log('É falso!')
}

var nota = 7;

if(nota>7){
  console.log("Passou!")
}else if(nota==7){
  console.log("De recuperação!")
}else{
  console.log("Reprovou!");
}

var corFavorita = 'Azul';

switch (corFavorita) {
  case 'Azul':
    console.log('Olhe para o céu.');
    break;
  case 'Vermelho':
    console.log('Olhe para rosas.');
    break;
  case 'Amarelo':
    console.log('Olhe para o sol.');
    break;
  default:
    console.log('Feche os olhos');
}
/*
TRUTHY E FALSY
Existem valores que retornam true e outros que retornam false quando verificados em uma expressão booleana.

*/
if(false)
  if(0) // ou -0
  if(NaN)
  if(null)
  if(undefined)
  if(''); // ou "" ou ``
  
  //TRUTHY

  // Truthy
if(true)
  if(1)
  if(' ')
  if('andre')
  if(-5)
  if({});
  
//OPERADOR LÓGICO DE NEGAÇÃO !

// Truthy
if(!true) // false
if(!1) // false
if(!'') // true
if(!undefined) // true
if(!!' ') // true
if(!!''); // false

//OPERADORES DE COMPARAÇÃO

10 > 5; // true
5 > 10; // false
20 < 10; // false
10 <= 10 // true
10 >= 11 // false
10 == '10'; // true
10 == 10; // true
10 === '10'; // false
10 === 10 // true
10 != 15 // true
10 != '10' // false
10 !== '10' // true

//OPERADORES LÓGICOS &&

true && true; // true
true && false; // false
false && true; // false
'Gato' && 'Cão'; // 'Cão'
(5 - 5) && (5 + 5); // 0
'Gato' && false; // false
(5 >= 5) && (3 < 6); // true


//OPERADORES LÓGICOS ||
true || true; // true
true || false; // true
false || true; // true
'Gato' || 'Cão'; // 'Gato'
(5 - 5) || (5 + 5); // 10
'Gato' || false; // Gato
(5 >= 5) || (3 < 6); // true


//EXERCICIO

console.log('EXERCICIO');

// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'


var minhaIdade = 30;
var idadeFilha = 2;

if(minhaIdade>idadeFilha){
  console.log('É maior');
}else if(minhaIdade==idadeFilha){
  console.log('É igual');
}else{
  console.log('É menor');
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);//falso


// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; // true
var idade = 28;//true
var possuiDoutorado = false; //false
var empregoFuturo;//false
var dinheiroNaConta = 0;//false

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

console.log(china==brasil)

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}