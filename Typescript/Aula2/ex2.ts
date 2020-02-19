import * as rs from 'readline-sync';

/* Faça um programa capaz de somar dois
números digitados pelo usuário

Importante: O programa deverá solicitar
continuamente a entrada de números até que
um número válido seja digitado para cada um
dos valores  */

console.log('Exercicio 2');
console.log('Digite 2 números para serem somados:');

let valor1: number;
let valor2: number;

let val1 = false;
let val2: boolean = false;

do
{
    if (val1 === false)
    {
        valor1 = Number(rs.question('Digitar valor 1...')); 
    }

    if (val2 === false)
    {
        valor2 = Number(rs.question('Digitar valor 2...'));
    }

    if ( isNaN(valor1) )
    {
        console.log('Valor 1 inválido');
    }
    else
    {
        val1 = true;
    }

    if (isNaN(valor2))
    {
        console.log('Valor 2 inválido');
    }  
    else  
    {
        val2 = true;
    }

} 
while ( isNaN(valor1) || isNaN(valor2) )

console.log( "Resultado = " + (valor1 + valor2)  );