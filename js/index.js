// Iteration 1: Names and Input
let hacker1 = "Malva";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Moises";
console.log(`The navigato's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `The navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else if (hacker1.length === hacker2.length) {
  console.log(`Wow, you both have equally long names, ${hacker1.length}`);
}

// Iteration 3: Loops

//3.1

let cadena = "";

for (i = 0; i < hacker1.length; i++) {
  cadena += " " + hacker1[i];
}

cadena = cadena.toUpperCase();
console.log(`"${cadena}"`);

//3.2

let cadena1 = "";

for (i = 0; i < hacker2.length; i++) {
  cadena1 += hacker2[i];
}

cadena1 = cadena1.split("").reverse().join("");
console.log(`"${cadena1}"`);

//3.3

if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first definitely.");
} else if (hacker1 === hacker2) {
  console.log("What?! You both have the same name?");
}

//BONUS 1

let cadena2 =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non rerum quibusdam laboriosam ipsam blanditiis! Nesciunt ut neque fugit libero mollitia? Fugit voluptates quis placeat autem unde. Perferendis commodi impedit cum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Non rerum quibusdam laboriosam ipsam blanditiis! Nesciunt ut neque fugit libero mollitia? Fugit voluptates quis placeat autem unde. Perferendis commodi impedit cum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Non rerum quibusdam laboriosam ipsam blanditiis! Nesciunt ut neque fugit libero mollitia? Fugit voluptates quis placeat autem unde. Perferendis commodi impedit cum?";

let counter = 0;

for (let i = 0; i < cadena2.length; i++) {
  counter++;
}

console.log(`${counter}`);

let counter1 = 0;

for (let i = 0; i < cadena2.length; i++) {
  if (cadena2[i] === "e" && cadena2[i] === "t") {
    counter1++;
  }
}

console.log(`Encontradas ${counter1} palabras et`);

//BONUS 2

let phraseToCheck = "bobant";

let str = phraseToCheck.toLowerCase();

let len = str.length;

for (i = 0; i < len; i++) {
  while (str[i] === str[len - 1]){
    i++;
    
    //if (str[i] === str[len - 1]) {
    //continue;
  if (str[i] !== str[len - 1]) {
    break;
    console.log(`${phraseToCheck} no es un palíndromo.`);
  }
}
}
console.log
