"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
console.log('Exercicio 4');
var valor1 = rs.question('Digite uma temperatura em graus Celsius');
// Fahrenheit
var fah = (Number(valor1) * 1.8) + 32;
// Kelvin
var kel = Number(valor1) + 273.15;
console.log('Celsius inserido: ' + valor1);
console.log('Fahrenheit: ' + fah);
console.log('Kelvin: ' + kel);
