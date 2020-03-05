import * as rs from 'readline-sync';

/* Crie uma função capaz de ler e retornar o nome do usuário. 
Através de outra função, capaz de imprimir
um valor no console, exiba o nome do usuário. */

console.log('Exercicio 12');
print_name( nome() );

function nome(): string
{
    const nome = rs.question('Digite um nome...');
    return(nome);
}

function print_name(nome: string): void
{
    console.log(nome);
}
