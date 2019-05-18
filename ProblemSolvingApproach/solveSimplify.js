/* Write a function which takes in a string and returns 
    counts of each character in the string */

charCount("aaaa"); // {a:4}
charCount("hello"); // {h:1, e:1, l:2, o:1}
charCount("My PIN number is 183232"); // 
/*{
    1: 1,
    2: 2,
    3: 2,
    8: 1,
    b: 1,
    e: 1,
    i: 2,
    m: 2,
    n: 2,
    p: 1,
    r: 1,
    s: 1,
    u: 1,
    y: 1,
}*/

function charCount(str) {
    // make object to return at end
    var result = {};
    // loop over string, for each character...
    for (var i = 0; i < str.length; i++) {
        // var char = str[i] / first solution without worrying about alphanumeric
        var char = str[i].toLowerCase()
        // - if the char is number/letter AND is a key in object, add one to count
        if (result[char] > 0) {
            result[char]++
            // - if the char is number/letter AND not in object, add it and set value to one    
        } else {
            result[char] = 1;
        };
    }
    // - if char is something else (space, period, etc.) don't do anything
    // return object at end
    return result;
}
console.log(charCount("Hi, hello!"));