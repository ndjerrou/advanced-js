// Regular function

import { pythagore } from "./pythagore.js";
import { pythagore2 } from "./pythagorev2.js";

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

form.addEventListener("submit", function (e) {
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
