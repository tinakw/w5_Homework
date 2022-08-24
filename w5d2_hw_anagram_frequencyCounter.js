// Given two strings, write a function to determine if the second string is an anagram of the first.

// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// Answer must pass all tests below and have an On time complexity achieved by using 1 or more frequency counter

// function validAnagram(arr1, arr2){
// }
console.log(validAnagram('', '')); // true
console.log(validAnagram('aaz', 'zza')); // false (a:2; z:1) / (a:1; z:2)
console.log(validAnagram('anagram', 'nagaram')); // true
console.log(validAnagram("rat","car")); // false) // false
console.log(validAnagram('awesome', 'awesom')) // false
console.log(validAnagram('qwerty', 'qeywrt')); // true
console.log(validAnagram('texttwisttime', 'timetwisttext')); // true
console.log(validAnagram('aweso', 'awesom')) // false

function buildFrequency(word) {
    const frequencies = {};
    for (let i = 0; i < word.length; i++){
        let char = word[i];
        if (frequencies[char] == undefined) {
            frequencies[char] = 0;
        }
        frequencies[char]= frequencies[char] + 1;
    }
    return frequencies; 
}
function validAnagram(first, second) {
    if (first.length != second.length) {
        return false;
    }
    let frequency1 = buildFrequency(first);
    
    let frequency2 = buildFrequency(second);
    
    for (let i = 0; i < first.length; i++) {
        let char = first[i];
        
        if (frequency1[char] !== frequency2[char]) {
            return false;
        }
    }
    return true;
}