"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
/* Crie uma função com dois parâmetros numéricos capaz de
verificar qual número é o maior e retorná-lo. */
console.log('Exercicio 13');
var numero1 = Number(rs.question('Digite o primeiro número...'));
var numero2 = Number(rs.question('Digite o segundo número...'));
var maior;
var result;
maior = maior_numero(numero1, numero2);
if (maior == 0) {
    result = 'Números são iguais!';
}
else {
    result = 'Maior número é: ' + maior;
}
console.log(result);
function maior_numero(num1, num2) {
    var maior_num;
    if (num1 === num2) {
        maior_num = 0;
    }
    else if (num1 > num2) {
        maior_num = num1;
    }
    else {
        maior_num = num2;
    }
    return maior_num;
}
