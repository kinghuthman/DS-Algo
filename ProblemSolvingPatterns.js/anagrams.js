/* Given two strings, write a function to determine if the second
string is an anagram of the first. An anagram is a word, phrase, or
name formed by rearranging the letters of another, such as cinema,
formed from iceman. 
*/
// all inputs will be single words, lowercase letters
//
// Examples

// validAnagram('', '') // true
// validAnagram('aaz', 'zza') // false
console.log(validAnagram('anagram', 'nagaram')) // true
// validAnagram('awesome', 'awesom') // false

// 1st attempt

// function validAnagram(str1, str2) {
//     let frequencyOne = {}
//     let frequencyTwo = {}
//     for (let i = 0; i < str1.length; i++) {
//         if (str1.charAt([i]) >= frequencyOne.indexOf(i)) {
//             str1.charAt([i]) = frequencyOne
//             console.log(str.charAt(i))
//         }
//         if (str2.charAt([i]) >= frequencyTwo.indexOf(i)) {
//             str2.charAt([i]) = frequencyTwo
//             console.log(frequencyTwo)
//         }
//     }
//     return true;
// }

function validAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    const lookup = {};
    for (let i = 0; i < str1.length; i++) {
        let letter = str1[i];
        // if letter exists, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    for (let i = 0; i < str2.length; i++) {
        let letter = str2[i];
        //can't find letter or letter is zero, then it's not an anagram
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }
    return true;
}