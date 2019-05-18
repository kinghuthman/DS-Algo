/* Write a function which takes in a string and returns 
    counts of each character in the string */

// needs to return an object
// should it return the letters in there or letters not there? 
// set every letter to 0?

// Simple example
charCount("aaaa"); // {a:4}
charCount("hello"); // {h:1, e:1, l:2, o:1}

// More complex

charCount("my phone number is 183232");
// do we want to count for spaces, symbols, numbers?

charCount("Hello hi");
// do we store uppercase and lower case or ignore casing?

// Empty inputs

charCount("")
// do we pass an empty object, null, false, or undefined?