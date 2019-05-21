/* Store the first element as the smallest value you've seen so far.
    Compare this item to the next item in the array until you find a 
smaller value.
    If a smaller is found, designate that smaller number to be the new
"minimum" and continue until the end of the array.
    If the "minimum" is not the value (index) you initially began
with, swap the two values.
    Repeat this with the next element until the array is sorted. 
*/

function selectionSort(arr) {
    // loop through the array
    for (let i = 0; i < arr.length; i++) {
        // initialize smallest as the start of the array/where to begin
        let smallest = i;
        console.log('smallest = i', smallest)
        // loop through the array as i+1
        for (let j = i + 1; j < arr.length; j++) {
            /* if the value of arr[j] is smaller than arr[smallest]
                smallest = j // smallest now switches places with j not i
            */
            console.log('j', j)
            if (arr[j] < arr[smallest]) {
                smallest = j;
                console.log('smallest = j', smallest)
            }
        }
        console.log(arr);
        console.log('Swapping to: ')
        // if i is no longer = to smallest, smallest holds a lesser value
        if (i !== smallest) {
            // placeholder for the value of i before the swap
            let temp = arr[i];
            // swap the values of i with the smaller value
            arr[i] = arr[smallest];
            // smallest know holds the larger value
            arr[smallest] = temp;
            console.log(arr)
            console.log('*********')
        }
    }
    return arr;
}

console.log('selectionSort', selectionSort([34, 22, 10, 19, 17]))

// O(N^2)