"use strict";
exports.__esModule = true;
/*  Crie um vetor de 50 posições, preencha com números aleatórios de 1 a 100 e exiba a média destes.
Pesquise como gerar números aleatórios em TypeScript. */
console.log('Exercicio 17');
var numeros = new Array(49);
var soma = 0;
var conntrole_exibir = 1;
for (var controle = 0; controle <= 49; controle++) {
    // Math.random() * (valor_Maximo - Valor_Minimo) + Valor_Minimo;
    numeros[controle] = Math.round(Math.random() * (100 - 1) + 1);
    soma = soma + numeros[controle];
}
console.log('50 Números sorteados entre 1 e 100:');
for (var _i = 0, numeros_1 = numeros; _i < numeros_1.length; _i++) {
    var atual = numeros_1[_i];
    console.log('Numero ' + conntrole_exibir + ' = ' + atual);
    conntrole_exibir++;
}
console.log('Soma desses números: ' + soma);
console.log('Média dos valores: ' + (soma / 100));
