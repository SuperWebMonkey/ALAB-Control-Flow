/**
 *
 * Don't use loops or functions
 *
 */

// variables
const PI = 3.1415;
let radius = 5;
let area = PI * radius * radius;
let plantSpace = 0.8;
let plantStart = 20;

// Plant Growth Control Flow
let weeks = 1;
let states = plantStart * Math.pow(2, weeks);
let capacity = area / (plantSpace * plantStart);
let percentage = states / capacity;

// Logic Flow
if (percentage > 80) {
  console.log(`pruned`);
} else if (percentage >= 50 && percentage <= 80) {
  console.log(`monitored`);
} else {
  console.log(`More room to grow plants`);
}

//week 2 code
weeks++;
console.log(weeks);

states = plantStart * Math.pow(2, weeks);
capacity = area / (plantSpace * plantStart);
percentage = states / capacity;

if (percentage > 80) {
  console.log(`pruned`);
} else if (percentage >= 50 && percentage <= 80) {
  console.log(`monitored`);
} else {
  console.log(`More room to grow plants`);
}

//week 3 code
weeks++;

states = plantStart * Math.pow(2, weeks);
capacity = area / (plantSpace * plantStart);
percentage = states / capacity;

if (percentage > 80) {
  console.log(`pruned`);
} else if (percentage >= 50 && percentage <= 80) {
  console.log(`monitored`);
} else {
  console.log(`More room to grow plants`);
}
