/* Implement a function called countUniqueValues, 
which accepts a sorted array, and counts the unique values in the 
array. There can be negative numbers in the array, but it will always
sorted. 
*/

console.log(countUniqueValues([1, 1, 3, 4, 5, 7, 7])) // 3
// countUniqueValues([1, 2, 3, 3, 4, 4]) // 4
// countUnqiueValues([]) // 0

// 1st attempt
// function countUniqueValues(arr) {
//     arrHolder = {}
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== arrHolder[i]) {
//             arr[i] = arrHolder
//         }
//         return arrHolder;
//     }
// }

// Solution

function countUniqueValues(arr) {
    let i = 0;
    for (var j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j]
        }
        console.log(i, j)
    }
    return i + 1
}