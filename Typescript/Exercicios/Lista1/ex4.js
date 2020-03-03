"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
console.log('Exercicio 4');
var resultfinal = 'Nota inválida';
var nota1 = Number(rs.question('Digite a 1º nota, números de 0 até 10...'));
var nota2 = Number(rs.question('Digite a 2º nota, números de 0 até 10...'));
var nota3 = Number(rs.question('Digite a 3º nota, números de 0 até 10...'));
var media = (nota1 + nota2 + nota3) / 3;
if (media >= 8 && media <= 10) {
    resultfinal = 'Nota A';
}
if (media >= 7 && media < 8) {
    resultfinal = 'Nota B';
}
if (media >= 5 && media < 7) {
    resultfinal = 'Nota C';
}
if (media >= 4 && media < 5) {
    resultfinal = 'Nota D';
}
if (media >= 0 && media < 4) {
    resultfinal = 'Nota E';
}
console.log('Conceito da média' + resultfinal);
