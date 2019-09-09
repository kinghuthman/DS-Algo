/* Create an empty array, take a look at the smallest values
in each input array.
    While there are still values we haven't look at...
    If the value in the first array is smaller than the value in 
the second array, push the value in the first array into our results
and move on to the next value in the first array.
    If the value in the first array is larger than the value in the 
second array, push the value in the second array into our results
and move on to the next value in the second array.
    Once we exhaust one array, push in all remaining values from
the other array.
*/

console.log('merge', merge([3, 5, 8, 10], [1, 2, 4, 6, 7, 9]));

function merge(arr1, arr2) {
    // initialize our pointers i, j
    let i = 0;
    let j = 0;
    // initialize an empty array
    let emptyArr = [];
    // while i less than the length of arr1, as well as j for arr2
    while (i < arr1.length && j < arr2.length) {
        // if value of arr2[j] > arr1[i]
        if (arr2[j] > arr1[i]) {
            // push arr1[i] into emptyArr
            emptyArr.push(arr1[i]);
            // increment i by 1, moving onto the next element in array
            i++
            // if arr1[i] is larger
        } else {
            // push value of arr2[j] into emptyArr
            emptyArr.push(arr2[j])
            // increment j by 1, moving onto the next element in array
            j++
        }
    }
    // while i is less than the length off arr1
    while (i < arr1.length) {
        // push the remaininng elements of arr1 into emptyArr
        emptyArr.push(arr1[i])
        i++;
    }
    // while j is less than the length of arr2
    while (j < arr2.length) {
        // push the remaining elements of arr2 into emptyArr
        emptyArr.push(arr2[j])
        j++
    }
    return emptyArr;
}

/* Break up the array into halves until you have arrays that are empty
or have one element.
    Once you have smaller sorted arrays, merge those arrays with other
sorted arrays until you are back at the full length of the array
    Once the array has been merged back together, return the merged
and sorted array.
*/
console.log('mergeSort', mergeSort([10, 3, 4, 6, 1, 9, 2, 8, 7, 5]))

function mergeSort(arr) {
    // if arr is 0 or 1 return array
    if (arr.length <= 1) return arr;
    // find the midpoint of the array
    let mid = Math.floor(arr.length / 2)
    console.log('mid', mid)
    // break the left side of the array down recursively to sort/merge
    let left = mergeSort(arr.slice(0, mid));
    console.log('left', left)
    // break the right side of the array down recursively to sort/merge
    let right = mergeSort(arr.slice(mid));
    console.log('right', right)
    // return the two sorted sides as one merged array that is sorted
    return merge(left, right)
}

// time = O(n log n), space = O(n)