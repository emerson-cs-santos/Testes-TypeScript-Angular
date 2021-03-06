import * as rs from 'readline-sync';

/* Escreva um algoritmo que leia os três números (possíveis lados de um triângulo) e imprima sua
classificação quanto aos lados  

a) Três lados iguais (equilátero)

b) Dois lados iguais (isósceles)

c) Três lados diferentes (escaleno) */

console.log('Exercicio 5');

let resultfinal: string;

console.log('Digite 3 números que serão os lados do triângulo.');

const lado1 = Number(rs.question('Digite o valor do 1º lado...'));
const lado2 = Number(rs.question('Digite o valor do 2º lado...'));
const lado3 = Number(rs.question('Digite o valor do 3º lado...'));

let lados_iguais = 0;

if (lado1 == lado2)
{
    lados_iguais++;
}

if (lado1 == lado3)
{
    lados_iguais++;
}

if (lado2 == lado3)
{
    lados_iguais++;
}

switch (lados_iguais) 
{
    case 0:
        resultfinal = 'Três lados diferentes, logo é um triângulo Escaleno!';
        break;

    case 1:
        resultfinal = 'Dois lados iguais, logo é um triângulo Isósceles!';
        break;

    case 3:
        resultfinal = 'Três lados iguais, logo é um triângulo Equilátero!';
        break;
  
    default:
        resultfinal = 'Problema ao Verificar triângulo...';
        break;
}

console.log(resultfinal);