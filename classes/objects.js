// Objects

// litteral objects
const nissim = {
  // key-value pair
  name: "Nissim",
  status: "freelance",
  country: "France",
  hobbies: ["Football", "Roller", "Teaching"],
  address: {
    postalCode: 75001,
    city: "Paris",
    neighborhood: "Adams"
  },
  isMajor: true,
  age: 31
};

// Reading a key / property
const hobbies = nissim.hobbies;
hobbies.forEach((hobbi) => console.log(hobbi));

// Setters
nissim.age += 1; //nissim.age = nissim.age + 1
console.log(nissim.age);
console.log(nissim);

// Freeze an object
// const nissimRobot = Object.freeze(nissim);
// console.log(nissimRobot);
// console.log(nissimRobot.status);

// // Impossible to modify any property dûe to the freeze
// nissimRobot.status = "robot";

// loop into the keys of my object
for (let key in nissim) {
  console.log(key);
}

// Gett all of the keys at once : obj --> array
const keys = Object.keys(nissim);
console.log(keys);

// Gett all of the values at once : obj --> array
const values = Object.values(nissim);
console.log(values);

// Add properties to our object - 2 ways

// 1st method - classical one
nissim.localisationWork = "remotely";
console.log(nissim);

// 2nd method - with the [] operator
nissim["smartphone"] = "xiaomi";
console.log(nissim);
// or
const device = "smartphone2";
// attention à la différence entre l'opérateur . et l'opéateur []
nissim.device = "samsung";
//add dynamically a property to our object
nissim[device] = "samsung"; //Pareil que nissim.smartphone2 = "samsung"
console.log(nissim);

// methods on objects
const dog = {
  race: "Bethoven",
  name: "Flexi",
  age: 3,
  aboyer: function () {
    console.log("waf waf");
  }
}; // when a property owns a function, we say it is a method

console.log(dog.name);
console.log(dog.age);
dog.aboyer(); //we call the method aboyer on the object dog

// Short-hands syntax for properties
const createDogs = (race, name, age, aboyer) => {
  return {
    race: race,
    name: name,
    age: age,
    aboyer: aboyer
  };
};

const createDogs1 = (race, name, age, aboyer) => {
  return {
    race, //when the name of the property equals the same name as the variable that contains the value, we can just write the name of the property
    name,
    age,
    aboyer
  };
};

console.log(
  createDogs("Rodveler", "Ronflex", 5, () => {
    console.log("grrrrr");
  })
);
console.log(
  createDogs1("Dalmatien", "Simba", 3, () => {
    console.log("Slurp slurp");
  })
);

// Short-hands for methods
const dog1 = {
  race: "Bethoven",
  name: "Flexi",
  age: 3,
  aboyer() {
    console.log("waf waf");
  }
};

dog1.aboyer();

// Destructuring
import data from "../data.json";

// const photographers = data.photographers;

// or with destructuring

const { photographers } = data;

// Explanation :

// 1 - we create a variable named photographers
// 2 - we extract the property photographers of the object data and we assign it to the new variable just created

const solaClass = {
  totalStudents: 15,
  localisation: {
    city: "Dinard",
    postalCode: 35800,
    address: "4, Avenue du Chateau Hébert"
  },
  isSport: true,
  sizeCampus: 30000
};

// Destructure the properties city, postalCode and address
