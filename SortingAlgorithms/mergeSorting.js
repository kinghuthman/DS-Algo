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

console.log('mergeSort', mergeSort2([3, 5, 8, 10], [1, 2, 4, 6, 7, 9]));

function mergeSort(arr1, arr2) {
    var emptyArr = [];
    while (arr1.length >= 0 && arr2.length >= 0) {
        for (var i = 0; i <= arr1.length; i++) {
            for (var j = 0; j <= arr2.length; j++) {
                if (arr1[i] > arr2[j]) {
                    emptyArr.push(arr1[i]);
                }
                emptyArr.push(arr2[j]);
            }

        }
    }
    return emptyArr;
}

function mergeSort2(arr1, arr2) {
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