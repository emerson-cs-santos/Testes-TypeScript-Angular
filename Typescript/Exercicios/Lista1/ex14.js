"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
/* Escreva uma função que recebe um valor em dólares e é capaz de retornar o valor em reais.
Esta função deverá chamar outra função capaz de retornar o valor de um dólar em reais (câmbio).
Permita que o usuário chame a função de cálculo do valor de dólares em reais, informando um valor. */
console.log('Exercicio 14');
var valor_dolar = Number(rs.question('Digite um valor em dolares...'));
console.log('Valor em Reais é: R$' + cambio(valor_dolar));
function cambio(valor_em_dolar) {
    return valor_em_dolar * 4.63;
}
