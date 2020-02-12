import * as rs from 'readline-sync';

console.log('Exercicio 4');

// Celsius
const cel = rs.question('Digite uma temperatura em graus Celsius');

// Fahrenheit
const fah: number = (Number(cel) * 1.8) + 32;

// Kelvin
const kel: number = Number(cel) + 273.15;

// Resultados
console.log('Celsius inserido: ' + cel);
console.log('Fahrenheit: ' + fah);
console.log('Kelvin: ' + kel);