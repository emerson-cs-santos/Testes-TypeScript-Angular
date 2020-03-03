import * as rs from 'readline-sync';

/* Dê o conceito do aluno conforme sua nota média, considerando: 

Entrada: 3 notas (números reais)

Saída: Média das notas e classificação, de acordo com a tabela abaixo:

caso 8 <= média <= 10 → nota A
caso 7 <= média < 8 → nota B
caso 5 <= média < 7 → nota C
caso 4 <= média < 5 → nota D
caso 0 <= média < 4 → nota E */

console.log('Exercicio 4');

let resultfinal: string = 'Nota inválida';

const nota1 = Number(rs.question('Digite a 1º nota, números de 0 até 10...'));
const nota2 = Number(rs.question('Digite a 2º nota, números de 0 até 10...'));
const nota3 = Number(rs.question('Digite a 3º nota, números de 0 até 10...'));

const media = (nota1 + nota2 + nota3) / 3;

if (media >= 8 && media <= 10)
{
    resultfinal = 'Nota A';
}

if (media >= 7 && media < 8)
{
    resultfinal = 'Nota B';
}

if (media >= 5 && media < 7)
{
    resultfinal = 'Nota C';
}

if (media >= 4 && media < 5)
{
    resultfinal = 'Nota D';
}

if (media >= 0 && media < 4)
{
    resultfinal = 'Nota E';
}

console.log('Conceito da média ' + resultfinal);

