"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
/*  Solicite que o usuário preencha nomes até que ele digite “sair”. Exiba todos os nomes digitados em
sequência. */
console.log('Exercicio 16');
var palavra;
var quit;
var controle = 0;
var nomes = new Array;
while ((quit !== 'SAIR')) {
    palavra = rs.question('Digite um nome...');
    quit = palavra.toUpperCase();
    if (quit !== 'SAIR') {
        nomes[controle] = palavra;
        controle++;
    }
}
console.log('Lista dos nomes:');
for (var _i = 0, nomes_1 = nomes; _i < nomes_1.length; _i++) {
    var atual = nomes_1[_i];
    console.log(atual);
}
