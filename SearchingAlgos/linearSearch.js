/* Linear Search, this function accepts an array and a value.
Loop through the array and check if the current array element is 
equal to the value. If it is, return the index at which the element
is found. If the value is never found, return -1.
*/

function linearSearch(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (num === arr[i]) {
            return i;
        }
    }
    return -1
}

console.log('linearSearch', linearSearch([10, 15, 20, 25, 30], 20))