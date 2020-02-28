import * as rs from 'readline-sync';

/* Um ano é bissexto se for divisível por 4 exceto os séculos, que são bissextos se forem múltiplos de 400.
Escreva um programa que lê um ano e determina se este é bissexto */

console.log('Exercicio 3');

let resultfinal: string = '';

resultfinal = 'O ano digitado ';

const numero = Number(rs.question('Digite um ano...'));

if ((numero % 2) == 0)
{
    resultfinal = resultfinal + 'É Bissexto!';

}
else
{
    resultfinal = resultfinal + 'Não é Bissexto!';
}

console.log(resultfinal);