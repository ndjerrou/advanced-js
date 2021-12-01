// Arrays

// Methods on arrays

// Filter
const marks = [1, 20, 10, 16, 17, 10];

const toNext = marks.filter((mark) => {
  // Either send true or false

  // true : l'élement courant est inséré dans le nouveau tableau
  // false : l'élément courant n'est pas inséré dans le nouveau tableau

  // >, <, ==, ===, && and || returns a boolean
  const test = mark > 10;

  console.log(test);
  return test;
});

console.log(toNext);
