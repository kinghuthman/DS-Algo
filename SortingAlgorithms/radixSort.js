/* Radix Sort Helpers
    Helpful to build a few helper functions first:

    getDigit(num, place) - returns the digit in num at the given place
value.
    Radix sort goes from right to left so getdigit(num, place) must 
find the num not using the normal way of finding an index of a number 
going from left to right.
ex: 123, 2 // 1
ex: 32453, 3 // 2
ex: 848394, 2 // 3 
*/

const getDigit = (num, i) => {
    // num divided by 10 to the power of i
    // abs is for negative numbers to return a positive integer?
    // after num is divided, then it is rounded down
    // then how many times can 10 go into the floored number 
    // return the remaining number
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

console.log('getDigit', getDigit(7323, 2)); // 3

/* Radix Sort Helper II
    digitCount(num) - returns the number of digits in num
ex: 323 // 3
ex: 4232342 // 7
*/

const digitCount = (num) => {
    if (num === 0) return 1;
    // 10 to what power gives us num
    // floor the number to remove decimal then add 1
    // return that number to give us the total number of integers in num
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

console.log('digitCount', digitCount(423)); // 3

/* Radix Sort Helper III
    mostDigits(nums) - given an array of numbers, returns the number
of digits in the largest numbers in the list using digitCount

ex: mostDigits([1234, 56, 5]) // 4
ex: mostDigits([12, 44, 55, 54]) // 2

*/

const mostDigits = (nums) => {
    // intialize a max number starting from 0
    let maxDigits = 0;
    // loop through the array
    for (let i = 0; i < nums.length; i++) {
        /* Math.max gives the larger number between maxDigits and 
        digitCount(nums[i])
        */
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

console.log('maxDigits', mostDigits([23, 45, 232323, 423])) // 6

// RADIX SORT PSEUDOCODE

/* Define a function that accepts list of numbers.
    Figure out how many digits the largest number has.
    Loop from k = 0 up to this largest number of digits.
    For each iteration of the loop:
        Create buckets for each digit(0 to 9).
        Place each number in the corresponding bucket based
    on its kth digit.
    Replace our existing array with valeus in our buckets, starting
with 0 and going up to 9.
    Return list at the end.
*/

const radixSort = (nums) => {
    /* Using our mostDigit(nums) helper intialize MaxDigitCount
    to find the amount of digits from the largest number 
    */
    let maxDigitCount = mostDigits(nums);
    // need to loop up to the largest number of digits
    for (let k = 0; k < maxDigitCount; k++) {
        /* make buckets, Array.from pass in a length set to 10, 
        set each slot an empty subarray 
        */
        let digitBuckets = Array.from({
            length: 10
        }, () => []);
        // loop over every number
        for (let i = 0; i < nums.length; i++) {
            // initialize digit to break up the code
            /* take each number in array, figure out at position k, what
            value do we get
            */
            let digit = getDigit(nums[i], k);
            /* take the number that we get and put it in the bucket
            at that index
            */
            digitBuckets[digit].push(nums[i]);
        }
        // after we put them in the right bucket, concat the array
        /* spread operator passes the elements in digitBuckets as
        individual arguments, into one array */
        nums = [].concat(...digitBuckets);
    }
    return nums;
}

console.log('radixSort', radixSort([345, 23, 5467, 2345, 9852]));

// time O(nk), space O(n+k)