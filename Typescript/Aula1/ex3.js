"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
console.log('Exercicio 3');
var valor1 = rs.question('Digite a base do triangulo');
var valor2 = rs.question('Digite a altura do triangulo');
var result = ((parseInt(valor1) * parseInt(valor2)) / 2);
console.log('Area do triangulo: ' + result);
