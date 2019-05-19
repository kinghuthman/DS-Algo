/* Write a function called sameFrequency. Given two positive integers, 
find out if the two numbers have the same frequency of digits.
*/

// loop through the first integer and store them in an array
// loop through the second integer and check if they are in the array

// Examples

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 344)); // false

function sameFrequency(int1, int2) {
    // convert the number into a string 
    let strInt1 = int1.toString();
    let strInt2 = int2.toString();
    console.log(strInt1.length, strInt2.length)
    // check if the length of the strings are the same
    if (strInt1.length !== strInt2.length) {
        return false
    }
    //initialize empty objects
    let holder1 = {};
    let holder2 = {};
    // loop through the 1st string and store the values as keys
    // if the key is already there add one, if not initialize
    for (let i = 0; i < strInt1.length; i++) {
        holder1[strInt1[i]] = (holder1[strInt1[i]] || 0) + 1
    }
    console.log('holder1', holder1)
    // loop through the 1st string and store the values as keys
    // if the key is already there add one, if not initialize
    for (let j = 0; j < strInt2.length; j++) {
        holder2[strInt2[j]] = (holder2[strInt2[j]] || 0) + 1
    }
    console.log('holder2', holder2)
    // loops through both objects and compares if their keys are the same
    for (let k = 0; k < holder1.length; k++) {
        if (holder1[k] !== holder2[k]) return false;
    }
    return true
}