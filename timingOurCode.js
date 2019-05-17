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