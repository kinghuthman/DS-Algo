function fib(n) {
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}

console.log(fib(3))

// memo stores the answer at a certain index that we found to sub problems
function fibMem(n, memo=[]){
    // check if we already have something at the nth index, return that value
    if(memo[n] !== undefined) return memo[n];
    // base case
    if(n <= 2) return 1;
    // pass through memo to accumulate the data
    var res = fib(n-1, memo) + fib(n-2, memo);
    // store the calulation under that nth index
    memo[n] = res;
    return res;
}

console.log(fibMem(10))

function fibTab(n){
    if ( n<=2) return 1;
    var fibNums = [0,1,1];
    for(var i = 3; i <= n; i++){
        fibNums[1] = fibNums[i=1] + fibNums[i-2];
    }
    return fibNums[n]
}

console.log(fibTab(50))