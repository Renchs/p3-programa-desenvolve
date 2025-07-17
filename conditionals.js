//  A: Classificação de notas ---
const nota = 85;

if (nota >= 90 && nota <= 100) {
    console.log("Nota A");
} else if (nota >= 80 && nota < 90) {
    console.log("Nota B");
} else if (nota >= 70 && nota < 80) {
    console.log("Nota C");
} else if (nota >= 60 && nota < 70) {
    console.log("Nota D");
} else if (nota >= 0 && nota < 60) {
    console.log("Nota F");
} else {
    console.log("Nota inválida");
}

// B: Par ou ímpar ---
const numero = 42;

if (numero % 2 === 0) {
    console.log("O número é par.");
} else {
    console.log("O número é ímpar.");
}

//  C: Pode dirigir? ---
const idade = 20;
const temHabilitacao = true;

if (idade >= 18 && temHabilitacao) {
    console.log("Pode dirigir.");
} else {
    console.log("Não pode dirigir.");
}
