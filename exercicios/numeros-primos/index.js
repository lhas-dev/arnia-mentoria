// Receber 10 números e então imprimir os primos
let io = require("./io");

// 1 etapa: Receber os 10 números
let numerosPrimos = [];

for (let i = 1; i <= 10; i++) {
  console.log("Digite um número:");

  let num = io.readInt();

  // 2 etapa: Identificar se o número digitado é primos
  let divisores = 0;

  for (let j = 1; j <= num; j++) {
    if (num % j == 0) {
      divisores++;
    }
  }

  let isNumeroPrimo = divisores == 2; // retornará true ou false

  if (isNumeroPrimo) {
    numerosPrimos.push(num);
  }
}

// 3 etapa: Exibir os números que são primos
console.log("Os números primos são: " + numerosPrimos);
