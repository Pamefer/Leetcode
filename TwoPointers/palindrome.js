//  A word that can be read the same starting on any side:oso
var isPalindrome = function (s) {
    let str1 = s.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, "").replace(/\s+/g, '');
    var word = str1.split("");
    let newWord = [];
    for (let i = word.length - 1; i >= 0; i--) {
        newWord.push(word[i])
    }
    console.log(newWord.join(''), "===", str1)
    return newWord.join('') === str1;
};

isPalindrome("dsfd fsdf fds");