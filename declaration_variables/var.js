// - Global scope : notre fichier complet
// - Scopes enfants direct : fn greeting

// 1st case - multiple declaration of the same variable allowed

var lifes = 10;

var lifes = 3;

var lifes = 30;

// 2nd case - reference a variable which has not been already declared

//console.log(age);
var age = 31;

// 3rd case - function declaration scope

var name = "Nissim";

// function definition
function greeting() {
  console.log(`Welcome ${city}`);
  var city = "Paris";
}

{
  var city = "Paris";
}

if (true) {
  var city = "Marseille";
}

console.log(city);

//call function
greeting();
