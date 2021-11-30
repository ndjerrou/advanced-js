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
const nissimRobot = Object.freeze(nissim);
console.log(nissimRobot);
console.log(nissimRobot.status);

// Impossible to modify any property dûe to the freeze
//nissimRobot.status = "robot";

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
