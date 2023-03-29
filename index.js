// Iteration 1: Names and Input
let hacker1 = "Ahmed"
console.log(`The driver's name is ${hacker1}`)

let hacker2 = "Heba"
console.log(`The navigator's name is ${hacker2}`) 

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) 
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)

else if (hacker1.length < hacker2.length)
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)

else 
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)

// Iteration 3: Loops
let hackerOne = "Ahmed"
let spacedHacker = " ";

for( let i=0; i < hackerOne.length; i++){
  spacedHacker += hackerOne[i].toUpperCase() + " ";
}

console.log(spacedHacker);

let hacker3 = "Heba"
 reverse3 = ""


for ( let i= hacker3.length - 1; i >= 0; i--) {
  reverse3 += hacker3[i];
}

console.log(reverse3)

let driver = "Ahmed"
let navigator = "Heba"
let names = [driver, navigator]

names.sort();
if( names[0] === driver){
  console.log("The driver's name goes first.");
}
else if (names[0] === navigator){
  console.log("Yo, the navigator goes first, definitely.")
}
else {
  console.log("What?! You both have the same name?")
}