/*
  A função average recebe um array de tamanho variável e retorna a média dos valores recebidos.
  Caso a função receba algum valor não numérico ou um array vazio, o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/
let numeros = [2, 3, 555, 12];

const average = (input) => {
  let total = 0;
  if (input.length === 0) {
    return undefined;
  }
    for (let index = 0; index < input.length; index += 1) {
    if (typeof input[index] !== 'number') {
      return undefined;
    }
    total += input[index];
  }
  return Math.round(total / input.length);
};
console.log(average(numeros));

module.exports = average;