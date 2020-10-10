/* Write a function called sumZero which accepts a sorted array
of integers. The function should find the first pair where
the sum is 0. Return an array that includes both values that
sum to zero or undefined if a pair does not exist.
*/

// examples


// sumZero([-2, 0, 1, 3]); // undefined

// Naive Solution
// Time complexity - O(N^2)
// Space complexity - O(1)

// function sumZero(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === 0) {
//                 return [arr[i], arr[j]];
//             }
//         }
//     }
// }

// my refactor ..looking at the code beforehand didnt help...
const sumZero = (arr) => {
    let left = 0
    let right = arr.length - 1

    while (left < arr.length) {
        let sum = arr[left] + arr[right]
        if (sum  === 0) {
            return [arr[left], arr[right]]
        }
        else if (sum > 0) {
            right--
        }
        else left++
    }
    return undefined
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 4,5,6])); // [-3, 3]