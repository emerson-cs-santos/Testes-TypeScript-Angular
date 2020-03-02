"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
/* Um ano é bissexto se for divisível por 4 exceto os séculos, que são bissextos se forem múltiplos de 400.
Escreva um programa que lê um ano e determina se este é bissexto */
/* Como Saber se Determinado Ano é Bissexto?
As 3 condições para um determinado ano ser bissexto são:

O ano é divisível por quatro, sem deixar resto;
Se o ano for divisível por 100 (anos terminados em dois zeros), não é bissexto, exceto se;
Ele também for divisível por 400 (nesse caso ele será bissexto).

Exemplo 1:
1900 é divisível por quatro (1900/4 = 475), divisível por 100 (1900/100 = 19)
mas não é divisível por 400 (1900/400 = 4.75) . Logo, 1900 não foi um ano bissexto.

Exemplo 2:
2020 é divisível por quatro (2020/4 = 505) mas não é divisível por 100. Logo, 2020 é um ano bissexto.

Fonte:
https://conversor-de-medidas.com/tempo/ano-bissexto/# */
console.log('Exercicio 3');
var resultfinal = '';
resultfinal = 'O ano digitado ';
var numero = Number(rs.question('Digite um ano...'));
// Ano é Bissexto se for divisível por 4 ou por 400 e não for de 100
if (((numero % 4) == 0 || (numero % 400) == 0) && (numero % 100) !== 0) {
    resultfinal = resultfinal + 'É Bissexto!';
}
// Ano não é Bissexto se não for divisível por 400 ou mas é por 100
if ((numero % 4) !== 0) {
    resultfinal = resultfinal + 'Não é Bissexto!';
}
else if ((numero % 400) !== 0 && (numero % 100) == 0) {
    resultfinal = resultfinal + 'Não é Bissexto!';
}
console.log(resultfinal);
