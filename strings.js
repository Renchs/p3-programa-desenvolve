// Exercícios de manipulação de strings

// 1. Declaração e concatenação
const firstName = "Maria";
const lastName = "Silva";
const fullName = firstName + " " + lastName;
console.log("Nome completo:", fullName);

// 2. Template strings (ES6)
const greeting = `Olá, meu nome é ${firstName} ${lastName}!`;
console.log(greeting);

// 3. Propriedades e métodos de strings
console.log("Comprimento do nome:", fullName.length);
console.log("Nome em maiúsculas:", fullName.toUpperCase());
console.log("Nome em minúsculas:", fullName.toLowerCase());

// a) Extraia o primeiro nome usando o método slice ou substring
console.log("Primeiro nome:", fullName.slice(0, 5));

// b) Verifique se o nome completo contém a letra 'a'
console.log("Nome completo contém a letra 'a':", fullName.includes("a"));

// c) Substitua "Silva" por outro sobrenome usando replace
console.log("Substituindo sobrenome:", fullName.replace("Silva", "Araujo"));