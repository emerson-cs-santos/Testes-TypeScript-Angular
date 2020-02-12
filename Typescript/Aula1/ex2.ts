import * as rs from 'readline-sync';

console.log('Exercicio 2');
const valor1 = rs.question('Digite a PRIMEIRA nota');
const valor2 = rs.question('Digite a SEGUNDA nota');
const valor3 = rs.question('Digite a TERCEIRA nota');

const result: number = ( ( (parseInt(valor1) * 2 ) + (parseInt(valor2) * 3 ) + (parseInt(valor3) * 5 ) ) / 10 ) ;

console.log('Media ponderada é: ' + result);