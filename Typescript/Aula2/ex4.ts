import * as rs from 'readline-sync';

/* Leia valores numéricos do usuário enquanto
este digitar elementos positivos ou zero.
Quando um número negativo for digitado,
exiba todos os números pares inseridos */

console.log('Exercicio 4');

// Ao usar const, pode atribuir novos valores das posições, mas não pode criar a mesma array novamente.
const numeros: number [] = new Array;
let n = 0;
let valor: number;

while (n >= 0)
{
    valor = Number( rs.question("Digite 1 número...") )

    if (valor < 0)
    {
        n = -1; 
    }
    else
    {
        numeros[n] = valor;
        n = n + 1;
    }
}

for (let atual of numeros)
{
    if ((atual % 2) == 0)
    {
        console.log (atual);
    }
}