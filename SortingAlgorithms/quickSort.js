/* In order to implement merge sort, it's useful to first implement
a function responsible for arranging elements in an array on 
either side of a pivot.
    Given an array, this helper function should designate an element
as the pivot.
    It should then rearrange elements in the array so that all values
less than the pivot are moved to the left side of the pivot, and all
values greater than the pivot are moved to the right of the pivot.
    The order of the elements on either side of the pivot doesn't matter.
    The helper should do this in place and not create a new array.
    When complete return the index of the pivot.

    The runtime of quick sort depends on how the pivot is selected.
    Ideally, the pivot should be chosen so that it's roughly the median
value in the data set being sorted
    For simplicity, the pivot will be the first element(consequences).
*/


// Pseudocode

/* Write a function called pivot, it will help to accept three arguments
an array, a start index and an end index(these can default to 0 and 
the array length minus 1, respectively).
    Grab the pivot from the start of the array.
    Store the current pivot index in a variable (this will keep track of 
where the pivot should end up).
    Loop through the array from the start until the end.
        If the pivot is greater than the current element, increment the 
    pivot index variable and then swap the current element with the 
    element at the pivot index. 
    Swap the starting element (i.e the pivot) with the pivot index
    Return the pivot index.
*/

console.log('pivot', pivot([4, 8, 2, 1, 5, 7, 6, 3]))

// 
function pivot(arr, start = 0, end = arr.length + 1) {
    // swap function, takes in an array and two points
    function swap(array, i, j) {
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    // pivot to start checking against other elements within array
    var pivot = arr[start];
    // the index to swap
    var swapIdx = start;
    // loop through the array
    for (var i = start + 1; i < arr.length; i++) {
        // if pivot is greater than arr[i] 
        if (pivot > arr[i]) {
            // increment swapIdx by 1
            swapIdx++;
            // swap swapIdx and i, larger element with smaller not pivot
            swap(arr, swapIdx, i);
        }
    }
    // swap starting index and swapIdx
    swap(arr, start, swapIdx);
    return swapIdx;
}

/* Call the pivot helper on the array.
    When the helper returns to you the updated pivot index, 
recursively call the pivot helper on the subarray to the left
of that index, and the subarray to the right of that index. 
    Base case occurs when you consider a subarray with less than two
elements.
*/

console.log('quickSort', quickSort([4, 6, 9, 1, 2, 5, 3]))

function quickSort(arr, left = 0, right = arr.length - 1) {
    // keep running if left is less than right
    if (left < right) {
        // initialize pivotIndex calling pivot on the array
        let pivotIndex = pivot(arr, left, right)
        // left side: recursively called quickSort on the left side
        quickSort(arr, 0, pivotIndex - 1)
        // right side: recursively call quickSort on the right side
        quickSort(arr, pivotIndex + 1, right)
    }
    return arr;
}

// O(n log n) // worst O(n^2)
// space O(log n)