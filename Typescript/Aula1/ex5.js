"use strict";
exports.__esModule = true;
console.log('Exercicio 5');
// 52 semanas em ano regular X 3 Dias = 156 dias
// 156 Dias X 30 minutos = 4680
// 4680 minutos em horas = 78 Horas
// Semanas no ano regular
var weeks = 52;
// Dias por semana
var dias = 3;
// Minutos por dia
var min = 30;
// Resultado 1 - Dias no ano
var result = weeks * dias;
// Resultado 2 - Minutos no ano
result = result * min;
// Resultado 3 - Convertendo minutos em horas 
result = result / 60;
// Resultado
console.log('Horas jogadas: ' + result);
