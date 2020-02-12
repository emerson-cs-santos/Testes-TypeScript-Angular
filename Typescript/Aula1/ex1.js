"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
console.log('Exercicio 1');
var valor1 = rs.question('Digite um numero');
var valor2 = rs.question('Digite outro numero');
var valor3 = rs.question('Digite outro numero novamente');
var result = parseInt(valor1) * parseInt(valor2) * parseInt(valor3);
console.log('Resultado é: ' + result);
var juff = /** @class */ (function () {
    function juff() {
    }
    return juff;
}());
