/* Escreva um programa TypeScript que exiba os números pares 
de 2 a 12 utilizando laços de repetição */

console.log('Exercicio 6');

for (let controle = 1; controle < 13; controle++) 
{
    if ( (controle % 2) == 0 )
    {
        console.log(controle);
    }
}