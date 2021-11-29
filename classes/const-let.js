// const + let - no redeclaration possible

// const goldenBall = "Benzema";
// const goldenBall = "Benzema";

// let president = "Emmanuel Macron";
// let president = "Emmanuel Macron";

// const + let - block (anyone!!) scoping

function description(name, age) {
  const localisation = "Paris";

  return `Je m'appelle ${name}
  J'habite à ${localisation} et
  J'ai  ${age} ans
  `;
}
description("Alex", 19);

{
  const localisation = "Marseille";
}

const localisation = "Nice";

if (true) {
  const localisation = "Grenoble";
}

//console.log(localisation);

// when to use const or let ?

// 1 - You can't modify a const variable

const age = 20;
// age++; //age = age + 1

// 2 - const does not mean immutable

const nissim = { name: "Nissim", age: 31, city: "Paris" };
nissim.age = 32; // allowed
//nissim = {}; //forbidden

// same for arrays
const students = ["Matthieu", "Cyril", "Alex"];
students[3] = "Patrick";
// console.log(students);
// students = [];

// 3 - You can modify a let variable

let height = 170;
height++;

// 4 - When to use const or let ?

// Use always const

// And we use let when we know that a variable is gonna change
