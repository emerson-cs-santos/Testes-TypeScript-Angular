/*  Crie uma função que recebe um vetor e um número. A função deverá retornar todos os índices onde
esse número aparece no vetor.
Crie um vetor com números aleatórios, defina um número e execute a
função, imprimindo todos os números e as posições onde o número selecionado aparece. */
console.log('Exercicio 20');
var numeros = new Array(7);
for (var controle = 0; controle <= 7; controle++) {
    numeros[controle] = Math.round(Math.random() * (6 - 1) + 1);
}
console.log('Numeros: ');
for (var _i = 0, numeros_1 = numeros; _i < numeros_1.length; _i++) {
    var atual = numeros_1[_i];
    console.log(atual);
}
console.log(exibir_num_indices(numeros, 3));
function exibir_num_indices(vet, indice_value) {
    var result;
    var posicoes = '';
    for (var cont = 0; cont <= vet.length; cont++) {
        if (vet[cont] == indice_value) {
            posicoes = posicoes + ',' + cont;
        }
    }
    result = 'Posições que o número ' + indice_value + ' aparece: ' + posicoes.substr(1);
    return (result);
}
