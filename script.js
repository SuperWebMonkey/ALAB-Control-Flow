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
let weeks = 0;

// Plant Growth Control Flow
// teacher's code
//  week 1
let plants = plantStart * 2 ** weeks;
let overallSpace = plants * 0.8;
console.log(overallSpace);

const garden80Percent = area * 0.8;
const garden50Percent = area * 0.5;

console.log(
  `Total Plants: ${plants} Space needed for plants ${plantSpace} square meters Garden Area: ${area}`
);

if (overallSpace > garden80Percent) {
  console.log(
    `Week: ${
      weeks + 1
    } | Prune: stop them from exceeding the capacity of the garden`
  );
} else if (overallSpace > garden50Percent) {
  console.log(
    `Week: ${weeks + 1} | Monitor: they are growing at an acceptable rate.`
  );
} else {
  console.log(`Week: ${weeks + 1} | Plant: there is room for more plants`);
}

// Week 2
// increment the week
weeks++;

// recalculate stats
plants = plantStart * 2 ** weeks;
overallSpace = plants * 0.8;

// repeat the control flow
if (overallSpace > garden80Percent) {
  console.log(
    `Week: ${
      weeks + 1
    } | Prune: stop them from exceeding the capacity of the garden`
  );
} else if (overallSpace > garden50Percent) {
  console.log(
    `Week: ${weeks + 1} | Monitor: they are growing at an acceptable rate.`
  );
} else {
  console.log(`Week: ${weeks + 1} | Plant: there is room for more plants`);
}

// Week 3
// increment the week
weeks++;

// recalculate stats
plants = plantStart * 2 ** weeks;
overallSpace = plants * 0.8;

// repeat the control flow
if (overallSpace > garden80Percent) {
  console.log(
    `Week: ${
      weeks + 1
    } | Prune: stop them from exceeding the capacity of the garden`
  );
} else if (overallSpace > garden50Percent) {
  console.log(
    `Week: ${weeks + 1} | Monitor: they are growing at an acceptable rate.`
  );
} else {
  console.log(`Week: ${weeks + 1} | Plant: there is room for more plants`);
}

// End of teacher's code

// let weeks = 1;
// let states = plantStart * Math.pow(2, weeks);
// let capacity = area / (plantSpace * plantStart);
// let percentage = states / capacity;

// console.log("week 1 percentage: ", percentage);

// // Logic Flow
// if (percentage > 80) {
//   console.log(`pruned`);
// } else if (percentage >= 50 && percentage <= 80) {
//   console.log(`monitored`);
// } else {
//   console.log(`More room to grow plants`);
// }

// //week 2 code
// weeks++;
// console.log(weeks);

// states = plantStart * Math.pow(2, weeks);
// console.log("week 2 state: ", states);
// capacity = area / (plantSpace * plantStart);
// console.log("week 2 capacity: ", capacity);
// percentage = states / capacity;

// console.log("week 2 percentage: ", percentage);

// if (percentage > 80) {
//   console.log(`pruned`);
// } else if (percentage >= 50 && percentage <= 80) {
//   console.log(`monitored`);
// } else {
//   console.log(`More room to grow plants`);
// }

// //week 3 code
// weeks++;

// states = plantStart * Math.pow(2, weeks);
// capacity = area / (plantSpace * plantStart);
// percentage = states / capacity;

// console.log("week 3 percentage: ", percentage);

// if (percentage > 80) {
//   console.log(`pruned`);
// } else if (percentage >= 50 && percentage <= 80) {
//   console.log(`monitored`);
// } else {
//   console.log(`More room to grow plants`);
// }

// Part 2 - Thinking Bigger
plantStart = 100;
weeks = 10;
let plants2 = plantStart * 2 ** weeks;
let overallSpace2 = plants2 * 0.8;
let newRadius = overallSpace2 / (PI * radius);

console.log(`The new radius is ${newRadius}`);

// Part 3 - Errors in judgement
try {
} catch (err) {
  console.log(err);
} else {
  
}
