import * as rs from 'readline-sync';

/* Crie uma função com dois parâmetros numéricos capaz de 
verificar qual número é o maior e retorná-lo. */

console.log('Exercicio 13');

const numero1 = Number(rs.question('Digite o primeiro número...'));
const numero2 = Number(rs.question('Digite o segundo número...'));

let maior: number;
let result: string;

maior = maior_numero(numero1,numero2);

if (maior == 0)
{
    result = 'Números são iguais!';
}
else
{
    result = 'Maior número é: ' + maior;
}

console.log(result);

function maior_numero(num1: number, num2: number): number
{
    let maior_num: number;

    if (num1 === num2)
    {
        maior_num = 0;
    }
    else if ( num1 > num2)
    {
        maior_num = num1;
    }
    else
    {
        maior_num = num2;
    }

    return maior_num;
}