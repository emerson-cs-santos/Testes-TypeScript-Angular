import * as rs from 'readline-sync';

/*  Solicite que o usuário preencha nomes até que ele digite “sair”. Exiba todos os nomes digitados em
sequência. */

console.log('Exercicio 16');

let palavra: string;
let quit: string;
let controle: number = 0;

const nomes: string [] = new Array;

while( ( quit !== 'SAIR' ) )
{
    palavra = rs.question('Digite um nome...');
    quit = palavra.toUpperCase();

    if ( quit !== 'SAIR' )
    {
        nomes[controle] = palavra;
        controle++;
    }
}

console.log('Lista dos nomes:');

for (let atual of nomes)
{
    console.log(atual);
}