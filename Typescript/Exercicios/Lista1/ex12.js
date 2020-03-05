"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
/* Crie uma função capaz de ler e retornar o nome do usuário.
Através de outra função, capaz de imprimir
um valor no console, exiba o nome do usuário. */
console.log('Exercicio 12');
print_name(nome());
function nome() {
    var nome = rs.question('Digite um nome...');
    return (nome);
}
function print_name(nome) {
    console.log(nome);
}
