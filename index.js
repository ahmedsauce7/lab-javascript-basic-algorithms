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

// Bonus 1: 

const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis leo neque, et consectetur eros imperdiet id. Pellentesque sollicitudin eros quis sapien suscipit malesuada. Curabitur id neque sit amet odio vulputate blandit ut at est. Nam in odio in ante dapibus ultricies. Suspendisse a lorem pellentesque leo ultrices ullamcorper. Donec porta congue lectus ut mollis. Sed convallis cursus lacus non mattis. Nam auctor mattis mauris vel dapibus. Maecenas tempor sagittis dolor, ac pulvinar ante fermentum eu. Duis et placerat sem, nec varius augue. Morbi vitae nisl eu nisl mollis molestie. Proin eget tellus vel nunc lobortis rhoncus. Aliquam ac malesuada neque, quis porttitor augue. Nulla feugiat justo nec fermentum porta. Vestibulum risus erat, facilisis at imperdiet vel, fringilla ac libero. Nulla nec orci et orci placerat consectetur.Suspendisse aliquam venenatis commodo. Integer pharetra tortor a ligula pharetra, a bibendum leo suscipit. Morbi fringilla ex sed elit commodo, quis convallis lorem porta. Etiam cursus magna at diam efficitur, finibus rhoncus nibh pretium. Cras elit dolor, consequat quis eleifend ac, rhoncus id justo. Sed malesuada ultricies tellus, et placerat nisl scelerisque eu. Cras laoreet suscipit turpis fermentum venenatis. Mauris auctor ac quam id ornare. Donec pretium sagittis molestie. Phasellus elit massa, egestas id sagittis ut, ultrices quis tortor. Aenean non ornare ex, in iaculis tortor. In id ante semper, pretium dolor vestibulum, tristique orci. Nulla facilisi. Sed aliquam quam sit amet dignissim gravida. Sed eget facilisis ex, at consectetur nulla. Nunc ac ultrices mi. Nam dictum mauris id orci viverra imperdiet. Aenean nec enim vitae mauris tincidunt porttitor. Pellentesque ligula ex, vestibulum eget lorem nec, scelerisque sodales massa. Nunc id nibh ipsum."

let wordcount = 0;
let wordArray = longText.split(' ');


for (let i = 0; i < longText.length; i++){
  if (longText[i] === " ") {
    wordcount++;
  }
}
console.log(wordcount);



let etCount = 0;

for (let i = 0; i < wordArray.length; i++){
  if (wordArray[i] === "et") {
    etCount++;
  }
}

console.log(etCount);

/* Bonus 2 */

let phraseToCheck = `Was it a car or a cat I saw?" and "No 'x' in Nixon`;
let phraseOnly = phraseToCheck.replace(/[^0-9a-z]/gi, '').toLocaleLowerCase;
/* Ask about (/[^0-9a-z]/gi, '') to get a better understanding */

let palindrome = true;
for ( let i = 0; i < phraseOnly.length; i++){
  if (phraseOnly[i] !== phraseOnly[phraseOnly.length - 1 -i]) {

palindrome = false;
break;
}
}

if (palindrome) {
  console.log(phraseToCheck + " is a palindrome! ")
} 
else {
  console.log(phraseToCheck + " is not a palindrome!");
}
