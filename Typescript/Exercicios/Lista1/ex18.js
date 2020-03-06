"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
/*  Leia 5 valores do usuário.
Exiba todos os valores e indique o maior valor. */
console.log('Exercicio 18');
var maior_num = 0;
var conntrole_exibir = 1;
var numeros = new Array(4);
for (var controle = 0; controle <= 4; controle++) {
    numeros[controle] = Number(rs.question('Digite um número...'));
    if (numeros[controle] > maior_num) {
        maior_num = numeros[controle];
    }
}
console.log('Os 5 números digitados:');
for (var _i = 0, numeros_1 = numeros; _i < numeros_1.length; _i++) {
    var atual = numeros_1[_i];
    console.log('Numero ' + conntrole_exibir + ' = ' + atual);
    conntrole_exibir++;
}
console.log('Maior número digitado: ' + maior_num);
