// math.js
// Praticando operações matemáticas e conversão de tipos

// Operações básicas
const a = 10;
const b = 3;

console.log("Adição:", a + b);               // 13
console.log("Subtração:", a - b);            // 7
console.log("Multiplicação:", a * b);        // 30
console.log("Divisão:", a / b);              // 3.333...
console.log("Módulo (resto):", a % b);       // 1
console.log("Exponenciação:", a ** b);       // 1000

// Incremento e decremento
let counter = 5;
console.log("Valor inicial:", counter);      // 5
console.log("Pós-incremento:", counter++);   // 5 (mostra antes de incrementar)
console.log("Novo valor:", counter);         // 6
console.log("Pré-incremento:", ++counter);   // 7 (incrementa antes de mostrar)
console.log("Valor final:", counter);        // 7

// Conversão de tipos
const numberAsString = "42";
console.log("String original:", numberAsString, typeof numberAsString); // "42", string

const convertedNumber = Number(numberAsString);
console.log("Depois de converter:", convertedNumber, typeof convertedNumber); // 42, number

// -------------------
// DESAFIOS
// -------------------

// a) Média de 3 números: 15, 25 e 38
const n1 = 15;
const n2 = 25;
const n3 = 38;
const media = (n1 + n2 + n3) / 3;
console.log("Média de", n1, n2, n3, "é:", media); // 26

// b) Converter a string "123.45" em número
const valorTexto = "123.45";
const valorNumero = parseFloat(valorTexto);
console.log(`Valor convertido:`, valorNumero, "-", typeof valorNumero); // 123.45, number

// c) Arredondar o resultado de 9.7 dividido por 2 para o inteiro mais próximo
const resultadoDivisao = 9.7 / 2; // 4.85
const arredondado = Math.round(resultadoDivisao);
console.log("9.7 dividido por 2 (arredondado):", arredondado); // 5
