import * as rs from 'readline-sync';

console.log('Exercicio 3');
const valor1 = rs.question('Digite a base do triangulo');
const valor2 = rs.question('Digite a altura do triangulo');

const result: number = ( (parseInt(valor1) * parseInt(valor2)) / 2  );

console.log('Area do triangulo: ' + result);