"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
/* Crie um programa que solicite ao usuário a digitação de um número. Informe então se este número é
par ou ímpar */
console.log('Exercicio 1');
var resultfinal = '';
var numero = Number(rs.question('Digite um número...'));
if ((numero % 2) == 0) {
    resultfinal = 'Esse número é Par!';
}
else {
    resultfinal = 'Esse número é Impar!';
}
console.log(resultfinal);
