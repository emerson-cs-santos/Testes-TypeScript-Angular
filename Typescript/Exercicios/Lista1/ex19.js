"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
/*  Colete 3 números do usuário, coloque-os em um vetor e exiba-o.
Em seguida, modifique o array de forma que a sequência de números
fique do contrário (se digitou 1,2,3, exiba 3,2,1). */
console.log('Exercicio 19');
var numeros = new Array(2);
var controle_exibir = 1;
for (var controle = 0; controle <= 2; controle++) {
    numeros[controle] = rs.question('Digite um número ou letra...');
}
console.log('Os 3 números digitados:');
for (var _i = 0, numeros_1 = numeros; _i < numeros_1.length; _i++) {
    var atual = numeros_1[_i];
    console.log('Numero ' + controle_exibir + ' = ' + atual);
    controle_exibir++;
}
// Poderia ter ordenado com base alfanumerica ou numerica, mas não seria a ordem invertida do que foi digitada.
//numeros.sort((a,b) => (a > b ? -1 : 1));
// Inclusive dessa forma, mesmo digitando letras, é posssivel inverter a ordem
numeros.reverse().map(function (item) { return item; });
console.log('Array com a ordem invertida');
controle_exibir = 1;
for (var _a = 0, numeros_2 = numeros; _a < numeros_2.length; _a++) {
    var atual = numeros_2[_a];
    console.log('Numero ' + controle_exibir + ' = ' + atual);
    controle_exibir++;
}
