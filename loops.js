// 1. Crie um loop que imprima a tabuada do 7 (de 1 a 10)

for (var i = 1; i <= 10; i++) {
  console.log(`7 * ${i} = ${7 * i}`);
}

// 2. Crie um array de número e calcule a soma deles usando um loop
const numeros = [5, 15, 30, 45, 50];

var soma = 0;
for (var i = 0; i < numeros.length; i++) {
  soma += numeros[i];
}

console.log(`Soma: ${soma}`);

// 3. Crie um loop que identifique o menor valor em um array de números

const numerosAleatorios = [12, 6, 8, 20, 4, 16];
let menor = numerosAleatorios[0];

for (var i = 0; i < numerosAleatorios.length; i++) {
  if (numerosAleatorios[i] < menor) {
    menor = numerosAleatorios[i];
  }
}

console.log(`Menor valor: ${menor}`);
