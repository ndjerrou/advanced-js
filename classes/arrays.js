// Arrays

const tab = [
  1,
  true,
  () => {
    console.log("youhou");
  },
  { name: "Nissim", age: 31 },
  [1, 2, 3],
  "Bienvenue"
];

//console.log(tab); //arrays are kind of objects

// const student1 = 'Alex'
// const student2 = 'Basille'
// const student3 = 'Dylan the first'
// const student4 = 'Dylan the second'

// or ...

const students = ["Alex", "Basille", "Dylan", "Dylan 2nd"];

const averageMarks = [15, 17, 12, 14];

// Properties on arrays

// length
console.log(students.length);

// Methods on arrays

// forEach - need a function to process as an input parameter
students.forEach((student) => console.log(student));

// map: returns an array thanks to the return statement
const newTab = students.map((student) => {
  return `SP - ${student}`;
});

console.log(newTab);

// find : find an element inside my array
const myStudent = students.find((student) => {
  return student === "Basille" ? student : null;
});

console.log(myStudent);

// Filter
const marks = [1, 20, 10, 16, 17, 10];

const toNext = marks.filter((mark) => {
  // Either send true or false

  // true : l'élement courant est inséré dans le nouveau tableau
  // false : l'élément courant n'est pas inséré dans le nouveau tableau

  // >, <, ==, ===, && and || returns a boolean
  const test = mark > 10;

  // console.log(test);
  return test;
});

//console.log(toNext);

// push - Add an element into the array at the end of the array
const newStudent = "Pierre";

students.push(newStudent);
console.log(students);

// pop - Delete an element into the array at the end of the array
students.pop();
console.log(students);

// unshift - Add an element into the array at the beggining of the array
const newStudent1 = "Zak";

students.unshift(newStudent1);
console.log(students);

// shift - Delete an element into the array at the beggining of the array
students.shift();
console.log(students);

// indexOf - Get the index of a particular element
const index = students.indexOf("Dylan");
console.log(index);

// splice - delete an element at a particular position
students.splice(index, 1);
console.log(students);

// splice - add an element at a particular position
students.splice(index, 0, "Jacques");
console.log(students);

// slice - get a portion of the array
const someStudents = students.slice(index - 1);
console.log(someStudents);

const someStudents1 = students.slice(index - 1, index + 1);
console.log(someStudents1);

// destructuring
const [student1, student2] = students;
// console.log(student1);
// console.log(student2);

const [student0, , , student3] = students;
console.log(student0);
console.log(student3);

// copy an of array with the spread operator
const studentsESILV = ["Assia", "Bertrand", "Pierre", "Paul", "Jacques"];
const studentsFromSolacroup = [
  ...studentsESILV,
  "Matthieu",
  "Morgane",
  "Alex",
  "Cyril",
  "Timothee",
  "Dylan"
];

console.log(studentsFromSolacroup);
