"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
/* Escreva um programa que solicita o nome e a altura de 5 atletas.
Ao final da entrada de dados, informe
O NOME do atleta mais alto. */
console.log('Exercicio 9');
var result_altura = 0;
var result_nome = '';
var numero;
var nome;
console.log('Digite o nome e a altura de 5 atletas.');
for (var controle = 1; controle <= 5; controle++) {
    nome = rs.question('Digite o nome do atleta...');
    numero = Number(rs.question('Digite a altura do atleta número ' + controle + '...'));
    if (numero >= result_altura) {
        result_altura = numero;
        result_nome = nome;
    }
}
console.log('Atleta com maior altura: ' + result_nome + ', altura: ' + result_altura);
