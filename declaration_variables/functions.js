// Functions

// Function Definition
function multiply(a, b) {
  return a * b;
}

// function call
// multiply(2, 3)

// We log the output of the multiply fn
// console.log("output fn ", multiply(2, 3));

// We want to save the output of multiply fn
const resultat = multiply(2, 3);
//console.log(resultat);

const body = document.querySelector("body");

// two similar ways
body.style.backgroundColor = "tomato";
document.querySelector("body").style.backgroundColor = "tomato";

function greeting(name) {
  console.log(`Hello ${name}`);
  // return undefined
}

// console.log(greeting("Samia"));

// 1 - What is the return of the greeting function when we call it ?

// The return is implicitily returned with an undefined value

// 2 - Transform the function so we can save the output

function greeting1(name) {
  return `Hello ${name}`;
}

const welcome = greeting1("Pierre");
console.log(welcome);

// the return statement ends the function

// send back a true boolean if the guy is major
// send back a false boolean if the guy is minor
function isMajor(age) {
  if (age >= 18) {
    return true;
    //console.log("Félicitations");
  } else {
    return false;
  }
}

const isHeMajor = isMajor(37);

// Call a function without any sufficient parameters
function sum(a, b) {
  // b???? b = undefined
  console.log(a);
  console.log(b);
  return a + b;
}

console.log(sum(2));

// Send by purpose undefined into a call function
function minus(a, b) {
  return a - b;
}

minus(undefined, 2);

// Default parameters
function sayHello(name = "X") {
  return `Welcome to the company ${name}`;
}

console.log(sayHello("Adam"));
console.log(sayHello());

// Save a function inside a variable

const sayHello1 = function sayHello(name = "Y") {
  return `Welcome to the company ${name}`;
};

// Anonymous function
const sayHello2 = function (name = "Y") {
  return `Welcome to the company ${name}`;
};
console.log(sayHello2("Nissim"));

// Exercice

// Implement the function pythagore

// Pythagore :

// tri rect ==> c^2 = a^2 + b^2

// Parameters a and b at least

// pythagore(2,3) ==> valeur de c

//2ième version : vérifier que le triangle est rectangle pour avoir le calcul de c
// Sinon, renvoyer un message d'erreur

// 3ième version : envoyer un nouveau paramètre qui indique l'unité de mesure des côté envoyés : cm, dm, km...sachant que l'unité par défaut doit être le cm
// et sachant que le résultat doit être donné en cm

function pythagore(a, b) {
  const cCarre = a * a + b * b;
  const c = Math.sqrt(cCarre);
  return c.toFixed(2);
}

const hypothenuse = pythagore(2, 3);
console.log(hypothenuse);

function pythagore1(a, b, nature = "quelconque") {
  if (nature.toLowerCase() === "rectangle") {
    const cCarre = a * a + b * b;
    const c = Math.sqrt(cCarre);
    return c.toFixed(2);
  }
  return "Le triangle doit être rectangle !";
}

const a = 2;
const b = 3;
console.log(pythagore1(a, b, "isocèle"));
console.log(pythagore1(a, b, "éqUILatéral"));
console.log(pythagore1(a, b, "rectangle"));
console.log(pythagore1(a, b, "RECTANgle"));
console.log(pythagore1(a, b));

function pythagore2(a, b, nature = "quelconque", unit = "cm") {
  if (nature.toLowerCase() === "rectangle") {
    if (unit === "cm") {
      const cCarre = a * a + b * b;
      const c = Math.sqrt(cCarre);
      return c.toFixed(2);
    } else {
      // conversions
      switch (unit) {
        case "km": {
          a = a * 100000;
          b = b * 100000;
          break;
        }
        case "m": {
          a = a * 100;
          b = b * 100;
          break;
        }
        case "mm": {
          a = a * 0.1;
          b = b * 0.1;
          break;
        }
        default: {
        }
      }

      cCarre = a * a + b * b;
      c = Math.sqrt(cCarre);
      return c.toFixed(2);
    }
  }
  return "Le triangle doit être rectangle !";
}

console.log(pythagore2(a, b, "rectangle", "km"));
console.log(pythagore2(a, b, "rectangle", "m"));
console.log(pythagore2(a, b, "rectangle", "mm"));
console.log(pythagore2(a, b, "quelconque", "mm"));
console.log(pythagore2(a, b, undefined, "mm"));
