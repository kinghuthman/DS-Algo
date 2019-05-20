// Recursion solution

function countDown(num) {
    // if number is less than or equal to 0, we are done
    if (num <= 0) {
        console.log("All done!");
        // stops function when if statement is met
        return;
    }
    // print num if it's larger than 0
    console.log(num);
    // subtract 1 from num
    num--;
    // call countDown with num - 1
    countDown(num);
}
console.log(countDown(5));
// 5 // 4 // 3 // 2 // 1 // All done!

// Without Recursion
function countDown2(num) {
    for (var i = num; i > 0; i--) {
        console.log(i)
    }
    console.log("All done!")
}