import * as rs from 'readline-sync';

console.log('Exercicio 1');
const valor1 = rs.question('Digite um numero');
const valor2 = rs.question('Digite outro numero');
const valor3 = rs.question('Digite outro numero novamente');

const result: number = parseInt(valor1) * parseInt(valor2) * parseInt(valor3);

console.log('Resultado é: ' + result);