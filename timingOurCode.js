const {
    performance
} = require('perf_hooks');

function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}


console.log(addUpTo(5)); //returns 15

/*
1 + 2 = 3
3 + 3 = 6
6 + 4 = 10
10 + 5 = 15 
*/

// addUpTo() Time performance with timers
let t1 = performance.now();
addUpTo(1000000000);
let t2 = performance.now();
console.log(`Time Elapsed addUpTo: ${(t2 - t1) / 1000}`)

// time performance of addUpTo() averages .99 seconds

function addUpToNew(n) {
    return n * (n + 1) / 2;
}
console.log(addUpToNew(5));

/*
5 * (5 + 1) / 2
-
5 * 6 / 2
-
30 / 2 = 15
 */

//addUpToNew() Time performance with timers
let test1 = performance.now();
addUpToNew(1000000000);
let test2 = performance.now();
console.log(`Time Elapsed addUpToNew: ${(test2 - test1) / 1000}`)

// time performance of addUpToNew() averages .000006 seconds

/* 
margins of time will change on different machines
for fast algorithms, speed measurements may not be precise enough and vice versa
*/