const io = require("./io");

// 1 etapa: Receber 10 nomes de alunos e suas notas
let notas = [];
let alunosAprovados = [];

for (let i = 1; i <= 2; i++) {
  console.log("Digite o nome do aluno:");
  let nome = io.read();
  console.log("Digite a nota do " + nome + ":");
  let nota = io.readInt();

  // Adicionando a nota ao array de notas
  notas.push(nota);

  // 2 etapa: Identificar quais alunos tiveram nota maior que 7
  if (nota >= 7) {
    alunosAprovados.push(`${nome} (${nota})`);
  }
}

``; // essa é uma string com super-poderes

// ${} (apelido)

// mas pq $? e pq {}? e pq os 2 juntos?

// 3 etapa: Imprimir as notas
console.log("As notas são: " + notas);

// 4 etapa: Imprimir os alunos aprovados
console.log("Os alunos aprovados são:" + alunosAprovados);
