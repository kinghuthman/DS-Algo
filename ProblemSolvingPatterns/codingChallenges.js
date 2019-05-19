/* Write a function called sameFrequency. Given two positive 
integers, find out if the two numbers have the same 
frequency of digits.
*/

// loop through the first integer and store them in an array
// loop through the second integer and check if they are 
// in the array

// Examples

console.log('sameFrequency1 ', sameFrequency(182, 281)); // true
console.log('sameFrequency2 ', sameFrequency(34, 344)); // false

function sameFrequency(int1, int2) {
    // convert the number into a string 
    let strInt1 = int1.toString();
    let strInt2 = int2.toString();
    console.log('strInt1 Length ', strInt1.length,
        'strInt2 Length ', strInt2.length)
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
    // loops through both objects and compares if their keys 
    // are the same
    for (let k = 0; k < holder1.length; k++) {
        if (holder1[k] !== holder2[k]) return false;
    }
    return true
}

/* Implement a function called, areThereDuplicates which accepts 
a variable number of arguments, and checks whether there are any
duplicates among the arguments passed in. You can solve this using
the frequency counter pattern OR the multiple pointers pattern.  
 */

console.log(areThereDuplicates(
    'areThereDuplicates1', 1, 2, 3)) // false
console.log(areThereDuplicates(
    'areThereDuplicates2', 1, 2, 3, 3)) // true
console.log(areThereDuplicates(
    'areThereDuplicates3', 'a', 'b', 'c', 'c')) // true

// turn the numbers into a string
// one argument which will be set to an empty object
// loop through the argument and store the keys and values
// if any of the keys are greater than one return true

function areThereDuplicates() {
    // initialize an empty object
    let collection = {}
    // loop through the arguments
    for (let i = 0; i < arguments.length; i++) {
        // assign the arguments as keys, add a 1 if it already exists
        collection[arguments[i]] = (collection[arguments[i]] || 0) + 1
    }
    // if a key's value from collection is more than 1 return true
    for (let j in collection) {
        if (collection[j] > 1) return true
    }
    return false
}