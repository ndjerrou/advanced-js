// Regular function

import pythagore2 from "./pythagorev2.js";

function multiply(a, b) {
  return a * b;
}

// arrow function
const multiply1 = (a, b) => {
  return a * b;
};

// Exercice

// Convertir les functions pythagore es5 dans le fichier functions.js vers de l'es6 dans le fichier arrow-functions.js

// Mettre un peu de html pour avoir des champs (de type input) imbriqué dans un élement html (form) et il faut un bouton dans ce formulaire

// Récupérer l'évènement submit du formulaire pour calculer l'hypothénuse (si c'est possible et si le triangle est rectangle)

const form = document.querySelector("form");

// callback - event handler
form.addEventListener("submit", (e) => {
  e.preventDefault();

  //getting the data input from the user

  // getting the inputs elements

  //   const ab = e.target.elements.firstSide;
  //   const bc = e.target.elements.secondSide;

  // getting the inputs elements Value
  const ab = e.target.elements.firstSide.value;
  const bc = e.target.elements.secondSide.value;

  const units = document.getElementsByName("units");

  const hyp = pythagore2(ab, bc, "rectangle", units[0].value, units[1].value);

  const box = document.querySelector(".box");

  box.textContent = hyp + " cm";
});

// Few tips about arrow functions

// When there is only one argument --> escape ()
function isGraduated(mark) {
  return mark > 11 ? "Félicitations !" : "Rattrapages..";
}

const isGraduated1 = (mark) => {
  return mark > 11 ? "Félicitations !" : "Rattrapages..";
};

console.log(isGraduated1(2));

// When we want to return immediately
const isGraduated2 = (mark) =>
  mark > 11 ? "Félicitations !" : "Rattrapages..";

console.log(isGraduated2(2));

// When we want to return immediately with an object - open parentheseis
const welcomeSolacroup = () => ({ studentCard: true, matricule: "FFXXKI" });

console.log(welcomeSolacroup());
