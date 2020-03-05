"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
/* Crie uma calculadora baseada em funções.*/
console.log('Exercicio 11');
console.log('Calculadora básica de 4 opções entre 2 números, escolha a operação:');
console.log('0 = Soma');
console.log('1 = Subtração');
console.log('2 = Multiplicação');
console.log('3 = Divisão');
var opt = Number(rs.question('Digita uma opção...'));
if (opt < 0 && opt > 3) {
    console.log('Opção inválida');
}
else {
    var num1 = Number(rs.question('Digita o primeiro número...'));
    var num2 = Number(rs.question('Digita o segundo número...'));
    switch (opt) {
        case 0:
            {
                soma(num1, num2);
                break;
            }
        case 1:
            {
                sub(num1, num2);
                break;
            }
        case 2:
            {
                mult(num1, num2);
                break;
            }
        case 3:
            {
                div(num1, num2);
                break;
            }
        default:
            {
                console.log('Opção não encontrada...');
                break;
            }
    }
}
function soma(val1, val2) {
    console.log('Resultado da Soma: ' + (val1 + val2));
}
function sub(val1, val2) {
    console.log('Resultado da Subtração: ' + (val1 - val2));
}
function mult(val1, val2) {
    console.log('Resultado da Multiplicação: ' + (val1 * val2));
}
function div(val1, val2) {
    // Proteção divisão por zero
    if (val2 == 0) {
        console.log('Impossivel divdir por zero!');
    }
    else {
        console.log('Resultado da Divisão: ' + (val1 / val2));
    }
}
