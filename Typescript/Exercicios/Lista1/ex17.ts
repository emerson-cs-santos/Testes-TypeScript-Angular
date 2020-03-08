import * as rs from 'readline-sync';

/*  Crie um vetor de 50 posições, preencha com números aleatórios de 1 a 100 e exiba a média destes.
Pesquise como gerar números aleatórios em TypeScript. */

console.log('Exercicio 17');

const numeros: number [] = new Array<number>(49);
let soma: number = 0;
let conntrole_exibir = 1;

for( let controle=0; controle<=49; controle++ )
{
    // Math.random() * (valor_Maximo - Valor_Minimo) + Valor_Minimo;
    numeros[controle] = Math.round(Math.random() * (100 - 1) + 1);
    soma =  soma + numeros[controle];
}

console.log('50 Números sorteados entre 1 e 100:');
for (let atual of numeros)
{
    console.log('Numero ' + conntrole_exibir + ' = ' + atual);
    conntrole_exibir++;
}
console.log('Soma desses números: ' + soma);
console.log('Média dos valores: ' + ( soma/100 ) );