"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
/* Crie uma função para calcular se um número
é positivo, negativo ou zero e permita chama
la com um número digitado pelo usuário */
console.log('Exercicio 3');
var valor = Number(rs.question("Digite 1 número..."));
console.log("Esse valor é: " + numero_tipo(valor));
// Recebe número e retorna string
function numero_tipo(parametro1) {
    if (parametro1 > 0) {
        return ("Positivo");
    }
    else if (parametro1 == 0) {
        return ("Zero");
    }
    else if (parametro1 < 0) {
        return ("Negativo");
    }
    else {
        return ("Inválido!");
    }
}
