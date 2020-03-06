import * as rs from 'readline-sync';

/*  Leia 5 valores do usuário. 
Exiba todos os valores e indique o maior valor. */

console.log('Exercicio 18');

let maior_num = 0;
let conntrole_exibir = 1;
const numeros: number [] = new Array<number>(4);

for( let controle=0; controle<=4; controle++)
{
    numeros[controle] = Number(rs.question('Digite um número...'));

    if(numeros[controle] > maior_num)
    {
        maior_num = numeros[controle];
    }
}

console.log('Os 5 números digitados:');
for (let atual of numeros)
{
    console.log('Numero ' + conntrole_exibir + ' = ' + atual);
    conntrole_exibir++;
}

console.log('Maior número digitado: ' + maior_num);