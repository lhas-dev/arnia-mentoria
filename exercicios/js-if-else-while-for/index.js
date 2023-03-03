// 0. ARRAY

// primitivos
let texto = "abacate";
let numero = 1;
let verdadeiro = true;

// tipos complexos
let array = []; // matriz / lista
let objeto = {};

let feijoada = ["feijão", "linguica", "cebola", "alho"];
let feijoadaComPorco = [...feijoada, "pé de porco", "joelho de porco"]; // DESESTRUTURANDO (destructuring) - PARADIGMA FUNCIONAL (SEM EFEITOS COLATERAIS)

feijoada.push("pé de porco"); // PARADIGMA IMPERATIVO (PROCEDURAL)

console.log("feijoada", feijoada);

console.log("feijoadaComPorco", feijoadaComPorco);

// https://pt.wikipedia.org/wiki/Programa%C3%A7%C3%A3o_imperativa
// https://pt.wikipedia.org/wiki/Programa%C3%A7%C3%A3o_funcional

// 1. IF

// IF: SE

// O IF SERVE PARA CRIAR UMA CONDIÇÃO EM NOSSO CÓDIGO
// OU SEJA, ATRAVÉS DE 1 CONDIÇÃO, NÓS EXECUTAMOS UM NOVO CÓDIGO

let fumante = false;

if (fumante) {
  console.log("Vai morrer cedo!");
} else {
  console.log("Vai morrer TARDE!");
}

// 2. ELSE

// O ELSE NADA MAIS É QUE A CONDIÇÃO CONTRÁRIA DO IF (SE)

let idade = 16;

// 16 < 18 = true

if (idade < 18) {
  console.log("É menor de idade.");
} else {
  console.log("É maior de idade.");
}

// 3. WHILE

let patinhos = 5;

while (patinhos >= 1) {
  console.log(patinhos, " patinhos foram passear...");
  patinhos = patinhos - 1;
}

// 4. FOR

// O FOR SERVE PARA CRIAR 1 LAÇO ONDE VOCÊ QUER ESPECIFICAR UMA QUANTIDADE

for (let i = 1; i <= 5; i++) {
  // SEQUENCIA CRESCENTE
  console.log(i, "patinhos foram passear.");
}

// for (let i = 5; i >= 1; i--) {} // SEQUENCIA CRESCENTE

// 5. PARADIGMA FUNCIONAL (FUNCTIONAL PROGRAMMING)

let ingredientes = ["arroz", "feijão"];

// imperativo
for (let i = 0; i <= ingredientes.length; i++) {}

// funcional
let total = ingredientes.length;
