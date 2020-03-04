"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
/* Escreva um programa que solicita 10 números e ao final exibe a soma de todos eles. */
console.log('Exercicio 8');
var numero;
var result = 0;
for (var controle = 1; controle <= 10; controle++) {
    numero = Number(rs.question('Digite 10 números, número(' + controle + ')... '));
    result = result + numero;
}
console.log('A soma dos números informados é de: ' + result);
