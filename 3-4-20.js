//Reverse the Odd Length Words
//Given a string, reverse all the words which have odd length. The even length words are not changed

function reverseOdd(str) {
    let words = str.split(' ');
    words = words.map(word => {
        return (word.length % 2) ? word.split('').reverse().join('') : word
    })
    return words.join(" ")
}


//Broken Keyboard
//str1 is correct, str2 is incorrect
function findBrokenKeys(str1, str2) {
    let brokenLetters = [];
    for (let i = 0; i < str1.length; i++) {
        if (!(str1[i] === str2[i]) && !brokenLetters.includes(str1[i])) {
            brokenLetters.push(str1[i])
        }
    }
    return brokenLetters;
}  