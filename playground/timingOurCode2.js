const { performance } = require('perf_hooks');

/* Suppose we want to write a function that calculates the sum of all numbers from 1 up to 
(and including) some number n. */

const addUpTo = (n) => {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
};

console.log(addUpTo(21), 'addUpTo \n');

const addUpToPemdas = (n) => {
  return (n * (n + 1)) / 2;
};

console.log(addUpToPemdas(5), 'addUpToPemdas \n');

// number of milliseconds the document was created
let t1 = performance.now();
// billion
addUpTo(1000000000);
// check
let t2 = performance.now();
// subtract 1st time minuse second time
console.log(`T Time Elapsed: ${(t2 - t1) / 1000} seconds. \n`);

// number of milliseconds the document was created
let y1 = performance.now();
// billion
addUpToPemdas(1000000000);
// check
let y2 = performance.now();
// subtract 1st time minuse second time
console.log(`Y Time Elapsed: ${(y2 - y1) / 1000} seconds.`);
