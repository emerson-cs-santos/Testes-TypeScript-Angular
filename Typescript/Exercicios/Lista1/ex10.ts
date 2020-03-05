import * as rs from 'readline-sync';

/* Solicite que seja digitada uma palavra que contenha a letra F ou comece com a letra P 
(pesquisar métodos de manipulação de string em TypeScript se necessário). */

console.log('Exercicio 10');

let palavra: string;

let controle = false;

let regexp: RegExp = /[F-F]/gm;

while(controle == false)
{
    palavra = rs.question('Digite uma palavra que contenha a letra F ou comece com a letra P...').toUpperCase();

    // Verificar se inicia com a letra "P"
    if( palavra.substring(0,1) === 'P' )
    {
        controle = true;
    }

    // Verificar se contem a letra F
    if( regexp.exec(palavra) )
    {
        controle = true;
    }    

    if (controle == false)
    {
        console.log('Palavra inválida!')
    }
}

console.log('Palavra correta! ' + palavra);




