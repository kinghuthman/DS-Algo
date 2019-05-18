/* Write a function called same, which accepts two arrays. The function
should return true if every value in the array has it's corresponding 
value squared in the second array. The frequency of values must be the
same. */

// same([1, 2, 3], [4, 1, 9]) // true
// same([1, 2, 3], [1, 9]) // false
// same([1, 2, 1][4, 4, 1]) // false (must be the same frequency)

// A naive solution 
// Nested loop
// Time complexitty - O(N^2)

// function same(arr1, arr2) {
//     if (arr1.length !== arr2.length) {
//         return false;
//     }
//     for (let i = 0; i < arr1.length; i++) {
//         let correctIndex = arr2.indexOf(arr1[i] ** 2)
//         console.log(correctIndex)
//         if (correctIndex === -1) {
//             return false;
//         }
//         console.log(arr2);
//         arr2.splice(correctIndex, 1)
//     }
//     return true;
// }


// same([1, 2, 3, 2], [9, 1, 4, 4])

/* 
arr2.indexOf is iterating over all or pontentially the entire 
array which is a nested loop, as n grows the length of the 
array grows(our for loop), as does the the indexOf method and the
nested arr[i] loop
*/

// REFACTORED

function same2(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for (let val of arr1) {
        // add one to the frequencyCounter or initialize it
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1

    }
    for (let key in frequencyCounter1) {
        // if not true return false
        if (!(key ** 2 in frequencyCounter2)) {
            return false
        }
        // if true does not equal true return false
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false
        }
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    return true
}

console.log(same2([1, 2, 3, 2], [9, 1, 4, 4]))

// Two separate loops are better than two nested loops
// Time complexity - O(n)