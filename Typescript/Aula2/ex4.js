"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
/* Leia valores numéricos do usuário enquanto
este digitar elementos positivos ou zero.
Quando um número negativo for digitado,
exiba todos os números pares inseridos */
console.log('Exercicio 4');
var numeros = new Array;
var n = 0;
var valor;
while (n >= 0) {
    valor = Number(rs.question("Digite 1 número..."));
    if (valor < 0) {
        n = -1;
    }
    else {
        numeros[n] = valor;
        n = n + 1;
    }
}
for (var _i = 0, numeros_1 = numeros; _i < numeros_1.length; _i++) {
    var atual = numeros_1[_i];
    if ((atual % 2) == 0) {
        console.log(atual);
    }
}
