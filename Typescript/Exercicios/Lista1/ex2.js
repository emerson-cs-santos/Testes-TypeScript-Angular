"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
/* Elaborar uma questão de múltipla escolha, de uma disciplina que esteja cursando ou um tema de
interesse, com um enunciado e cinco alternativas, sendo uma correta ou incorreta. Escrever um
programa que mostra a questão na tela, pede a resposta correta e informa ao usuário se este acertou
ou errou. */
console.log('Exercicio 2');
console.log('"Lock-On Technology" foi criado e utilizado apenas por 1 console (de mesa) de video game e para apenas 1 jogo.');
console.log('Qual geração de consoles (de mesa) esse video game pertence?');
console.log('Resposta A = 2º Geração');
console.log('Resposta B = 1º Geração');
console.log('Resposta C = 4º Geração');
console.log('Resposta D = 8º Geração');
console.log('Resposta E = 3º Geração');
var resposta = rs.question('Digite apenas a letra da reposta...').toUpperCase();
// Exemplo utilizando expressão regular
var regexp = /[A-E]/gm;
if (!regexp.exec(resposta)) {
    console.log('Opção incorreta! Digite apenas uma das 5 letras (A, B, C, D, ou E)');
}
else {
    if (resposta === 'C') {
        console.log('Resposta está CORRETA!');
    }
    else {
        console.log('Resposta está ERRADA!');
        console.log('Resposta correta é a C! Quarta geração!');
    }
    console.log('Foi o Mega-Drive (Sega Genesis na America) e foi utilizado apenas no jogo "Sonic & Knuckles"!');
}
