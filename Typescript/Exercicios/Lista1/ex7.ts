import * as rs from 'readline-sync';

/* Escreva um programa que exiba qualquer tabuada completa: 

a. O programa deve perguntar ao usuário qual tabuada ele deseja visualizar.

b. O usuário deverá responder digitando um número de 1 a 10. */

console.log('Exercicio 7');
console.log('Calculadora de tabuada.');

const numero = Number(rs.question('Digite um número de 1 a 10...'));

if ( !(numero >= 1 && numero <= 10) )
{
    console.log('Opção inválida!');
}
else
{
    console.log('Tabuada do ' + numero);

    for (let controle=1; controle<=10; controle++)
    {
        console.log(numero +' X '+ controle + ' = ' + numero * controle);
    }
}