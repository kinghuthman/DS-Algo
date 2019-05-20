// Just a pattern

// outer function
function outer(input) {
    var outerScopedVariable = []
    // recursive function
    function helper(helperInput) {
        // modify the outerScopedVariable
        helper(helperInput--)
    }
    helper(helperInput)
    return outerScopedVariable;
}

// Collect all the odd values in an array

function collectOddValues(arr) {
    // an empty array where we will store our data
    let result = []

    function helper(helperInput) {
        // base case if helperInput length is 0 return
        if (helperInput.length === 0) {
            return;
        }
        // if the first element is not divisible by two it's odd
        if (helperInput[0] % 2 !== 0) {
            // push that odd number into result
            result.push(helperInput[0])
        }
        // helper is called including the input except 1st input
        helper(helperInput.slice(1));
    }
    // called with the array inputed
    helper(arr);

    return result;
}

console.log('collectOddValues', collectOddValues([1, 2, 3, 4, 5]))

// Pure Recursion

function collectOddValues2(arr) {
    let newArr = [];
    // check if the array is empty
    if (arr.length === 0) {
        return newArr;
    }
    // check if the first number is odd
    if (arr[0] % 2 !== 0) {
        // add odd number to newArr
        newArr.push(arr[0]);
    }
    // takes the array from arr except for the 1st value 
    // newArr has to wait for collectOddValues2 to finish
    // concats all the arrays 
    newArr = newArr.concat(collectOddValues2(arr.slice(1)));
    return newArr;
}

console.log('collectOddValues2', collectOddValues2([1, 2, 3, 4, 5]))
// [1].concat(collectOddValues([2,3,4,5]))
// [].concat(collectOddValues([3,4,5]))
// [3].concat(collectOddValues([4,5]))
// [].concat(collectOddValues([5]))
// [5].concat(collectOddValues([]))
// 5
// 5
// 3,5
// 3,5
// 1,3,5