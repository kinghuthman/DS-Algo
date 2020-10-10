/* Implement a function called countUniqueValues, 
which accepts a sorted array, and counts the unique values in the 
array. There can be negative numbers in the array, but it will always
sorted. 
*/


// countUniqueValues([1, 2, 3, 3, 4, 4]) // 4
// countUnqiueValues([]) // 0

//brute force, not ideal whatsoever and should return total not actual #s but will try both
// const countUniqueValues = (arr) => {
//     let first = 0
//     let second = 1
//     let storage = []
//     while (first < arr.length - 1) {
//         console.log(arr[first], arr[second], 'fs')
//         console.log(storage);
//         if (second === arr.length - 1){
//             return storage
//         }
//         if (arr[second] !== arr[first]) {
//             console.log(arr[second], '4')
//             if(arr[second + 1] !== arr[second]) {
//                 storage.push(arr[second])
//                 first = second
//                 second++
//             }
//             second++
//         }
//         else if (arr[second] === arr[first]) {
//             second++
//             first++
//         }
//         if (arr[second] === arr.length -1){
//             return storage
//         }
//     }
//     return storage
// }

console.log(countUniqueValues([1, 1, 1, 3, 4, 5, 7, 7, 8])) // 5

// Solution

function countUniqueValues(arr){
    var i = 0;
    for(var j = 1; j < arr.length; j++) {
        // not the same
        if(arr[i] !== arr[j]){
            i++;
            // swap what i was to the new unique value
            arr[i]=arr[j]
        }
    }
    return i + 1
}

































// function countUniqueValues(arr) {
//     let i = 0;
//     for (var j = 1; j < arr.length; j++) {
//         if (arr[i] !== arr[j]) {
//             i++;
//             arr[i] = arr[j]
//         }
//         console.log(i, j)
//     }
//     return i + 1
// }