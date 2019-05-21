/* Start by picking the second element in the array
    Now compare the second element with the one before it 
and swap if necessary.
    Continue to the next element and if it is in the incorrect
order, iterate through the sorted portion(i.e. the left side) 
to place the element in the correct place.
    Repeat until the array is sorted.
*/

// My implementation 

/* Declare a lexical scope variable selecting the second element 
in the array
    Compare the second element with the one before it with an 
if statement. swap if necessary.
    Proceed to the next element with a for loop and if it's in 
the incorrect order with an if statement, sort through the sorted 
portion with a for loop and place in the right using an if statement. 

*/

console.log(insertionSort([2,1,9,76,4]));

function insertionSort(arr){
    // for loop where i starts with second element in array
    for(var i = 1; i < arr.length; i++){
        // current val is set to arr[i]
        var currentVal = arr[i];
        console.log('here','i = ',i, 'j = ', j, 'currentVal', currentVal)
        // loop through the array starting with the element before i 
        // only if j >= to 0 and the value of arr[j] is greater than 
        // current value. 
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--){
            // the element next to j/smaller value is set to the value of arr[j] 
            // or the elemenet before it. 
            arr[j+1] = arr[j]
            console.log('arr',arr)
            console.log('now here','i = ',i, 'j = ', j, 'currentVal', currentVal)
        }
        // the larger value moves up
        arr[j+1] = currentVal;
        console.log('currentVal', currentVal, j);
        console.log('arr', arr)
    }
    return arr;
}