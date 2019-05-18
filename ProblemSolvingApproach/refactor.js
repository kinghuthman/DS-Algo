// function charCount(str) {
//     var result = {};
//     for (var i = 0; i < str.length; i++) {
//         var char = str[i].toLowerCase();
//         if (/[a-z0-9]/.test(char)) {
//             if (result[char] > 0) {
//                 result[char]++
//             } else {
//                 result[char] = 1;
//             };
//         }
//     }
//     return result;
// }
// console.log(charCount("Hi, hello!"));

function charCount(str) {
    var result = {};
    for (var char of str) {
        // if (/[a-z0-9]/.test(char)) { / regex is slower than using character code 
        if (isAplhaNumeric(char)) {
            char = char.toLowerCase();
            result[char] = ++result[char] || 1;
        }
    }
    return result;
}

function isAplhaNumeric(char) {
    var code = char.charCodeAt(0);
    if (!(code > 47 && code < 58) &&
        !(code > 64 && code < 91) &&
        !(code > 96 && code < 123)) {
        return false;
    }
    return true;
}

console.log(charCount("Hi, hello!"));