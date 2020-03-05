import * as rs from 'readline-sync';

/*  Escreva uma função que é capaz de retornar se um número é ou não primo. 
Chame esta função passando um número do usuário. */

console.log('Exercicio 15');

const numero = Number(rs.question('Digite um número...'));

console.log('Esse número ' + num_primo(numero))

function num_primo(num: number): string
{
    // Precisa ser iniciado com um valor para conseguir abaixo ser somado, conforme for encontrando as ocorrencias do mod.
    let qtd: number = 0;

    for(let controle=1; controle<=num; controle++)
    {
        if( num % controle == 0)
        {
            qtd++;
        }
    }

    if (qtd == 2)
    {
        return 'é Primo';
    }
    else
    {
        return 'não é primo';
    }
}