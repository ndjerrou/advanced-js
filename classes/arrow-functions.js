// regular function

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
  alert(e.target.elements.prenom.value);
  alert(e.target.elements.age.value);
});
