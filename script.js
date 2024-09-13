/**
 *
 * Team:
 * Don't use loops or functions for this assignment
 *
 */

// variables
const PI = 3.1415;
let radius = 5;
let area = PI * radius * radius;
// min space
let plantSpace = 0.8;
// plant area
let plantStart = 20;

// Plant Growth Control Flow
let weeks = 1;
let states = plantStart * Math.pow(2, weeks);
let capacity = area / (plantSpace * plantStart);
let percentage = states / capacity;

console.log("week 1 percentage: ", percentage);

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
console.log("week 2 state: ", states);
capacity = area / (plantSpace * plantStart);
console.log("week 2 capacity: ", capacity);
percentage = states / capacity;

console.log("week 2 percentage: ", percentage);

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

console.log("week 3 percentage: ", percentage);

if (percentage > 80) {
  console.log(`pruned`);
} else if (percentage >= 50 && percentage <= 80) {
  console.log(`monitored`);
} else {
  console.log(`More room to grow plants`);
}

// Part 2 - Thinking Bigger

// Part 3 - Errors in judgement
