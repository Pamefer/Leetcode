let isValid = function (s) {
    // Stack to store left symbols
    const leftSymbols = [];
    // Loop for each character of the string
    for (let i = 0; i < s.length; i++) {
        // If left symbol is encountered
        console.log("===",leftSymbols)

        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            leftSymbols.push(s[i]);
            console.log("in")

        }
        // If right symbol is encountered
        else if (s[i] === ')' && leftSymbols.length !== 0 && leftSymbols[leftSymbols.length - 1] === '(') {
            console.log("before",leftSymbols)

            leftSymbols.pop();
            console.log("after",leftSymbols)
        } else if (s[i] === '}' && leftSymbols.length !== 0 && leftSymbols[leftSymbols.length - 1] === '{') {
            leftSymbols.pop();
            console.log("2")

        } else if (s[i] === ']' && leftSymbols.length !== 0 && leftSymbols[leftSymbols.length - 1] === '[') {
            leftSymbols.pop();
            console.log("3")

        }
        // If none of the valid symbols is encountered
        else {
            return false;
        }
    }
    return leftSymbols.length === 0;
};
console.log(isValid("{()}")) 