// Power Solution
function power(base, exponent) {
    if (exponent === 0) return 1;
    return base * power(base, exponent - 1)
}

console.log('power', power(12, 3));

// Factorial solution
function factorial(x) {
    if (x < 0) return 0;
    if (x <= 1) return 1;
    return x * factorial(x - 1);
}

console.log('factorial', factorial(4));

// Product of Array solution
function productOfArray(arr) {
    if (arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
}

console.log('productOfArray', productOfArray([1, 2, 3])); // 6

// Recursive Range Solution
function recursiveRange(x) {
    if (x === 0) return 0;
    return x + recursiveRange(x - 1);
}

console.log('recursiveRange', recursiveRange(6)); // 21

// Fibonacci Solution
function fib(n) {
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
}

console.log('fib', fib(6)); // 8