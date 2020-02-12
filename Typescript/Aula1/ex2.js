"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
console.log('Exercicio 2');
var valor1 = rs.question('Digite a PRIMEIRA nota');
var valor2 = rs.question('Digite a SEGUNDA nota');
var valor3 = rs.question('Digite a TERCEIRA nota');
var result = (((parseInt(valor1) * 2) + (parseInt(valor2) * 3) + (parseInt(valor3) * 5)) / 10);
console.log('Media ponderada é: ' + result);
