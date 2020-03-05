import * as rs from 'readline-sync';

/* Escreva uma função que recebe um valor em dólares e é capaz de retornar o valor em reais. 
Esta função deverá chamar outra função capaz de retornar o valor de um dólar em reais (câmbio). 
Permita que o usuário chame a função de cálculo do valor de dólares em reais, informando um valor. */

console.log('Exercicio 14');

const valor_dolar = Number(rs.question('Digite um valor em dolares...'));

console.log('Valor em Reais é: R$' + cambio(valor_dolar));

function cambio(valor_em_dolar: number): number
{
    return converter(valor_em_dolar);
}

function converter(valor_dolar: number): number
{
    return valor_dolar * 4.63;
}
