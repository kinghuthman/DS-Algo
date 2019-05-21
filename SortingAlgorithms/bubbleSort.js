// Bubble Sort

function swap(arr, idx1, idx2) {
    // temp value to hold whats in first element
    var temp = arr[idx1];
    // swap whats in first element with second element
    arr[idx1] = arr[idx2];
    // second element takes that temp value
    arr[idx2] = temp;
}
// es6
// const swap = (arr, idx1, idx2) => {
//     // first element swaps values with second element
//     // second element swaps values first element
//     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
// }

/* Define a function bubbleSort that takes in an array consisting 
of all numbers. 
    Start looping from with a variable called i, at the end of the array 
towards the beginning 
    Start an inner loop with a variable called j from the beginning 
until, i - 1.
    If arr[j] is greater than arr[j+1], swap those two values. 
    Return the sorted array. */

// not following pseudocode also running into errors
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr
}

console.log('bubbleSort', bubbleSort([1, 21, 3, 5, 2, 12, 55, 4]))

function bubbleSort2(arr) {
    var noSwaps;
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            noSwaps = true;
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    return arr
}

console.log('bubbleSort2', bubbleSort2([1, 21, 3, 5, 2, 12, 55, 4]))

// O(N^2) worst scenario, O(N) best scenario.. depends on data