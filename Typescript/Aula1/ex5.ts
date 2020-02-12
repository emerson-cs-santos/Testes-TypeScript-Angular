import * as rs from 'readline-sync';

console.log('Exercicio 5');

// 52 semanas em ano regular X 3 Dias = 156 dias

// 156 Dias X 30 minutos = 4680

// 4680 minutos em horas / 60 = 78 Horas

// Semanas no ano regular
const weeks: number = 52;

// Dias por semana
const dias: number = 3;

// Minutos por dia
const min: number = 30;

// Resultado 1 - Dias no ano
let result: number = weeks * dias;

// Resultado 2 - Minutos no ano
result = result * min;

// Resultado 3 - Convertendo minutos em horas 
result = result/60;

// Resultado
console.log('Horas jogadas: ' + result);