// programação ela é composta por uma série de paradigmas:
// 1) orientação a objetos
// 2) imperativo/procedural
// 3) funcional

// no mercado de JS, o paradigma FUNCIONAL é o mais utilizado nas aplicações

// um dos principais motivos para popularidade desse paradigma, é a maneira como ele prioriza a ausência de mutações

// o ato de evitar mutações previne uma série de bugs na aplicação

// principalmente quando a gente já tá falando de aplicações que não tem TypeScript, pq ela vai ter uma tipagem dinâmica (ou seja, ela vai identificar a tipagem na hora que o programa está sendo executado)

function soma(num1 = 10, num2 = 20) {
  return num1 + num2;
}

let pi = 3.14;

function calculo(argumento1, argumento2 = pi) {
  return argumento1 * argumento2;
}

calculo(10); // 10 * 3.14 (30.14)
calculo(10, 2); // 10 * 2 (20)
