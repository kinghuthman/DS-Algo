/* This function accepts a sorted array and a value.
Create a left pointer at the start of the array, and a right
pointer at the end of the array.
While the left pointer comes before the right pointer:
create a pointer in the middle
if you find the value you want, return the index
if the value is too small, move the left pointer up
if the value is too large move the right pointer down
*/

// function binarySearch(arr, num) {
//     let center = 0;
//     center = (i + j) / 2;
//     for (let i = 0; i < arr.length; i++) {
//         if (i === num) {
//             return i
//         }
//     }
//     for (let j = arr.length - 1; j > arr.length; j++) {
//         if (j === num) {
//             return j
//         }
//     }
//     return -1

// }

// console.log(['binarySearch', binarySearch([1, 2, 3, 4, 5, 6, 7], 3)])

// Solution

function binarySearch2(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    console.log(start, middle, end)
    while (arr[middle] !== elem && start <= end) {
        if (elem < arr[middle]) {
            end = middle - 1
        } else {
            start = middle + 1
        }
        middle = Math.floor((start + end) / 2);

    }
    if (arr[middle] === elem) {
        return middle;
    }
    return -1;
}

console.log(['binarySearch2', binarySearch2([1, 2, 3, 4, 5, 6, 7], 50)])