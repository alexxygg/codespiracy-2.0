const { use } = require("passport");

String.prototype.screaming = function () {
  return ` I'm SCREAMING, ${this.toUpperCase()}, AHHH!!!`;
};

// function Color(r, g, b) {
//   //Here we create an empty object
//   //This is done automatically on the next function
//   const xx = {};
//   this.r = r;
//   this.g = g;
//   this.b = b;
//   //Would refer to the Window, the global scope
//   //The nearest object
//   console.log(this);
//   //This is done automatically on the next function
//   return xx;
// }

//This is the constructor function we made to create a new color
//It starts with a capital letter to indicate an object
//It is the constructor, which is assigned as a function
//in "constructor", similar to __proto__.
// function Color(r, g, b) {
//   this.r = r;
//   this.g = g;
//   this.b = b;
//   //Would refer to the Window, the global scope
//   //The nearest object
//   console.log(this);
// }

//By using the new keyword, we use the pattern of our
//function for our new object and save the values to their
//corresponding property or key!
// const color1 = new Color(34, 232, 23);

//This would not work
// Color(34, 232, 23);

//We can now add methods to the prototype:
//This will save the function to __proto__, making it
//accessible on any other variable
// Color.prototype.rgb = function () {
//   //We extract the object's key values from "this"
//   const { r, g, b } = this;
//   return `rgb(${r},${g},${b})`;
// };

// Color.prototype.hex = function () {
//   const { r, g, b } = this;
//   return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// };

// //The default value for a is 1
// Color.prototype.rgba = function (a = 1.0) {
//   const { r, g, b } = this;
//   return `rgb(${r},${g},${b}.${a})`;
// };

//Arrow functions behave differently with the keyword this
//We should stick to traditional functions.

///////////////////CLASSSSSSS

//Also capitalized, (constructors and classes)
//Will also create a new empty object and return it at the end, without
//having to do it ourselves.
class Color {
  //Will execute immediately after an object is created, (new Xss,etc.)
  constructor(r, g, b, name) {
    //Refers to the new objects values, whatever is passed in the "new" object
    //Create and set this.x key name to this.x key value
    this.r = r;
    this.g = g;
    this.b = b;
    this.name = name;
  }
  //We can use the shorthand for defining methods for an object
  //It makes it easier since we don't need to use the prototype keyword
  //and we can have all methods grouped for easy access and visualization.
  //All methods will be saved to our object's __proto__ automatically,
  //and accessible by
  //any new object.
  greet() {
    return `Hello, your color is ${this.name}!`;
  }

  rgb() {
    //Instead of using this on each value from the object we are trying to access...
    // return `rgb(${this.r},${this.g},${this.b})`;
    //We destructure "this", since we already have them on the constructor object model
    const { r, g, b } = this;
    return `rgb(${r},${g},${b})`;
  }
  hex() {
    const { r, g, b } = this;
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
  //We can go further and make a function that returns values that we frequently destructure
  innerRGB() {
    const { r, g, b } = this;
    return `${r},${g},${b}`;
  }
  rgba(a = 1.0) {
    //No destructuring here!!! We access the values with our function's execution
    return `rgba(${this.innerRGB()},${a})`;
  }
}

const c1 = new Color(52, 45, 88, "violet");
const c2 = new Color(52, 58, 211, "light blue");

//We take the RGB color and convert it to hex code
const c2ToHex = c2.hex();
//This outputs true when compared!
c2.hex() === c2ToHex;

//hsl() colors: hue, saturation and brightness
//hue 0 and 360 are "next to each other".
// hsl(90,50%,50%)
// hsl(150,100%,60%)

//Here we have 2 classes for 2 different objects, a lot of the
//code is similar between them:
// class Cat {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   eat() {
//     return `${this.name} is eating! `;
//   }
//   meow() {
//     return `${this.name} says meow`;
//   }
// }

// const kitty = new Cat("Kitty", 5);
// kitty.eat();

// class Dog {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   eat() {
//     return `${this.name} is eating! `;
//   }
//   woof() {
//     return `${this.name} says woof`;
//   }
// }

// const max = new Dog("Max", 12);
// max.eat();

//We can instead create a class with the mutual code, and
//remove it from Cat and Dog
class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    return `${this.name} is eating! `;
  }
}

//The extends keyword helps us use the Pet class. Without it
//we would create empty objects, since the constructor would
//be missing! It EXTENDS any functionality from the class we place next to it.
class Cat extends Pet {
  meow() {
    return `${this.name} says meow`;
  }
}

const kitty = new Cat("Kitty", 5);
kitty.eat();

// class Dog extends Pet {
//   woof() {
//     return `${this.name} says woof`;
//   }
// }

// const max = new Dog("Max", 12);
// max.eat();
//We now have access to woof() on all dogs, (as a function/method)
//and eat() on any Pets! (saved to the Prototype)

//If a method is NOT FOUND in the object's prototype, it will look in the
//extends prototype. (If we have eat() on both, it will use the Dog's)

//The super keyword references the class we are extending, it helps us
//prevent code duplication in case we want to add something missing on
//the class we are extending.
class Dog extends Pet {
  //We include the original parameters PLUS our new ones
  constructor(name, age, vaccinated = false) {
    //We use super to reference the values defined in the class
    //we are extending.
    super(name, age);
    //We define and add our new parameter.
    this.vaccinated = vaccinated;
  }
  woof() {
    return `${this.name} says woof`;
  }
}
//Our newly created Dog will now accept a boolean for "vaccinated".
//If no boolean, it will default to false.
const max = new Dog("Max", 12);

function isBigger(x, y) {
  if (x > y) {
    return `${x} is bigger than ${y}`;
  } else if (x === y) {
    return "The numbers are equal.";
  }
  return `${y} is bigger than ${x}`;
}
2, 5;

function xToPowerY(x, y) {
  let pow = 1;
  for (let i = 0; i < y; i++) {
    pow = pow * x;
  }
  return pow;
}

// 2 to power 2 = 4
// 2 to power 5 = 32

function add7(num) {
  return num + 7;
}

function multiply(x, y) {
  return x * y;
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.shift();
}
function lastLetter(word) {
  return word.pop();
}
/////////////////////////////////
// ROCK, PAPER, SCISSORS
function randomCPUchoice() {
  let options = ["rock", "paper", "scissors"];
  const randomItem = Math.floor(Math.random() * options.length);
  return randomItem;
}

let cpu = randomCPUchoice();
let user = prompt();

function startGameRPS() {
  alert("Welcome to ROCK, PAPER, SCISSORS");
  prompt("Rock, Paper or Scissors?");
  if (cpu === user) {
    console.log("It's a tie!");
  } else if (
    (cpu === "rock" && user === "scissors") ||
    (cpu === "paper" && user === "rock") ||
    (cpu === "scissors" && user === "paper")
  ) {
    console.log(`CPU WINS: ${cpu} beats ${user}`);
  } else if (
    (user === "rock" && cpu === "scissors") ||
    (user === "paper" && cpu === "rock") ||
    (user === "scissors" && cpu === "paper")
  ) {
    console.log(`YOU WIN: ${user} beats ${cpu}`);
  } else {
    console.log("Please enter a valid input.");
  }
}
