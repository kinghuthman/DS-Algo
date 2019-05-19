/* Write a function called maxSubarraySum which accepts 
an array of integers and a number called n. The function should
calculate the maxiumum sum of n consecutive elements in the array */

// examples
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)) // 10
// console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)) // 17
// console.log(maxSubarraySum([4, 2, 1, 6], 1)) // 6


// naive solution
// O(N^2)

// function maxSubarraySum(arr, num) {
//     // if num is larger than the array return null
//     if (num > arr.length) {
//         return null;
//     }
//     // if array is all negatives, starting at 0 doesnt help
//     var max = -Infinity;
//     // loop ends at the last place to get sum
//     for (let i = 0; i < arr.length - num + 1; i++) {
//         // temp stores sum each time through
//         temp = 0;
//         // nested loop adds elements and stores in temp
//         for (let j = 0; j < num; j++) {
//             temp += arr[i + j];
//         }
//         // if temp is greater than max, max obtains temps value
//         if (temp > max) {
//             max = temp;
//         }
//         console.log(temp, max);
//     }
//     return max;
// }

// Efficient Solution
// O(N)

function maxSubarraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    // edge case, if array is less than num return null
    if (arr.length < num) return null;
    // create first sum of num and store in maxSum
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    // start at end of n elements
    for (let i = num; i < arr.length; i++) {
        // subtract/remove the first element of sum add end element
        tempSum = tempSum - arr[i - num] + arr[i];
        // if tempSum is greater than maxSum, maxSum is updated
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}