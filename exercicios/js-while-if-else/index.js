// 1. Variáveis

const a = "abacate"; // é um tipo de variável constante (ou seja, ele não pode mudar o seu valor inicial) [tem pegadinha aqui]
let b = "melão"; // é um tipo de variável que pode ter o seu valor MUTAVEL (ou seja, pode ter o seu valor modificado após a sua definição inicial)
var c = "mamão"; // modo mais antigo (a tendencia é q vcs nao estudem ela)

// ECMAscript

// var vem dos primórdios
// const e let é algo mais recente (ES6+)
// var é basicamente igual ao let

const pessoa = {
  nome: "Luiz Henrique",
};

Object.freeze(pessoa);

pessoa.nome = "João";

console.log(`O nome da pessoa é ${pessoa.nome}`);

// ###################

// 2. if e else

// IF: SE

// ELSE: SENÃO

let idade = 12;

if (idade < 18) {
  console.log("É menor de idade!");
} else {
  console.log("É maior de idade!");
}

// 1 maneira de definir funcao
function ehDeMaior(valor) {
  if (valor >= 18) {
    return true;
  } else {
    return false;
  }
}

// 2 maneira (arrow functions)
const ehDeMaior2 = (valor) => {
  if (valor >= 18) {
    return true;
  } else {
    return false;
  }
};

// Concatenação de string (juntar variável JS dentro de um texto)
console.log(`12 anos de idade é de maior? ${ehDeMaior(12)}`);
console.log(`46 anos de idade é de maior? ${ehDeMaior(46)}`);

console.log("60 anos de idade é de maior? ", ehDeMaior(46));

console.log("1", "2", "3", "4", 1, 2, 3, 4);

// 3. while

// WHILE: ENQUANTO

// while(condicao) {
// funcao aqui será rodada enquanto condicao for verdadeira
// }

let patinhos = 5;

while (patinhos >= 1) {
  console.log(`${patinhos} patinhos foram passear.`);
  patinhos = patinhos - 1;
}

let pais = "Brasil";

if (pais == "Brasil") {
  console.log("Ainda é carnaval...");
} else {
  console.log("Nem tem carnaval.");
}
