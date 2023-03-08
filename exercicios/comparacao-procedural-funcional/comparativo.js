// PARADIGMA PROCEDURAL (IMPERATIVO)

let pessoas = [
  { nome: "João", idade: 26 },
  { nome: "Maria", idade: 32 },
  { nome: "Joana", idade: 42 },
];

let nomes = [];

pessoas.forEach((pessoa) => {
  nomes.push(pessoa.nome);
});

console.log(nomes); // ['João', 'Maria', 'Joana'];

// PARADIGMA FUNCIONAL

let pessoas = [
  { nome: "João", idade: 26 },
  { nome: "Maria", idade: 32 },
  { nome: "Joana", idade: 42 },
];

let nomes = pessoas.map((pessoa) => pessoa.nome);

console.log(nomes); // ['João', 'Maria', 'Joana'];

// https://learn.microsoft.com/pt-br/dotnet/standard/linq/functional-vs-imperative-programming
