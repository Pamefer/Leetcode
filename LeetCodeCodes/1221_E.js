/**
Balanced strings are those that have an equal quantity of 'L' and 'R' characters.
Given a balanced string s, split it into some number of substrings such that:
Each substring is balanced.
Return the maximum number of balanced strings you can obtain.
Input: s = "RLRRLLRLRL"
Output: 4
Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.
 */
var balancedStringSplit = function (s) {
    // iterar el string y contar cuantos tiene cada char
    // si tienen igual numero son balanced
    let lCount = 0;
    let rCount = 0;
    let count = 0;
    let arrInput = s.split("");
    for (let i = 0; i < arrInput.length; i++) {
        console.log(arrInput[i], "--", i)
        if (arrInput[i] === 'L') {
            lCount++;
        }
        else {
            rCount++
        }
        console.log("l", lCount)
        console.log("r", rCount)
        if (lCount === rCount) {
            count++;
            lCount = 0;
            rCount = 0;
        }
    }
    return count;
};