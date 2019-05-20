// Factorial Iteratively
function factorial(num) {
    let total = 1;
    for (let i = num; i > 1; i--) {
        total *= i;
    }
    return total;
}

// Factorial Recursively
function factorialR(num) {
    if (num === 1) return 1;
    return num * factorialR(num - 1);
}

console.log(factorialR(4)) // 24
//  4 * factorialR(3)'6' // 4 * 6 = 24
//  3 * factorialR(2)'2' // 3 * 2 = 6
//  2 * factorialR(1)'1' // 2 * 1 = 2