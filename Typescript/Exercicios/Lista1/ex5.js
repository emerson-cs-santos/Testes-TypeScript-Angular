"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
/* Escreva um algoritmo que leia os três números (possíveis lados de um triângulo) e imprima sua
classificação quanto aos lados

a) Três lados iguais (equilátero)

b) Dois lados iguais (isósceles)

c) Três lados diferentes (escaleno)

1 - Inicia com 3 lados diferentes
2 - Se um for igual ao outro, agora são 2 lados iguais
3 - Se for igual a mais 1, todos os 3 são iguais */
console.log('Exercicio 5');
var resultfinal;
console.log('Digite 3 números que serão os lados do triângulo.');
var lado1 = Number(rs.question('Digite o valor do 1º lado...'));
var lado2 = Number(rs.question('Digite o valor do 2º lado...'));
var lado3 = Number(rs.question('Digite o valor do 3º lado...'));
var lados_iguais = 0;
if (lado1 == lado2) {
    lados_iguais++;
}
if (lado1 == lado3) {
    lados_iguais++;
}
if (lado2 == lado3) {
    lados_iguais++;
}
switch (lados_iguais) {
    case 0:
        resultfinal = 'Três lados diferentes, logo é um triângulo Escaleno!';
        break;
    case 1:
        resultfinal = 'Dois lados iguais, logo é um triângulo Isósceles!';
        break;
    case 3:
        resultfinal = 'Três lados iguais, logo é um triângulo Equilátero!';
        break;
    default:
        resultfinal = 'Problema ao Verificar triângulo...';
        break;
}
console.log(resultfinal);
var numeros = new Array;
numeros[0] = 2;
numeros[1] = 3;
numeros[2] = 2;
