import * as rs from 'readline-sync';

/* Escreva um programa em TypeScript que leia
o valor de dois números inteiros e a operação
aritmética desejada (adição, subtração,
multiplicação e divisão) e calcule a resposta
adequada */

console.log('Exercicio 1');

console.log('Escolha uma operação:');
console.log('0 = Adição');
console.log('1 = Subtração');
console.log('2 = Multiplicação');
console.log('3 = Divisão');

const op: number = Number(rs.question('Digitar opção...'));

const valor1: number = Number(rs.question('Digitar valor 1...'));
const valor2: number = Number(rs.question('Digitar valor 2...'));

let result: number;
let resultfinal: string = '';

switch (op)
{
    case 0:
        result = valor1 + valor2;
       
        break;

    case 1:
        result = valor1 - valor2;
        break;    
        
    case 2:
        result = valor1 * valor2;
        break;  
        
    case 3:
        result = valor1 / valor2;
        break;    

    default:
        resultfinal = 'Opção inválida';

}

if (resultfinal.length == 0)
{
    resultfinal = 'Resultado = ' + result;
}

console.log(resultfinal);