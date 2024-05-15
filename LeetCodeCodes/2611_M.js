//https://leetcode.com/problems/mice-and-cheese/description/
/**Mice and Cheese
 * There are two mice and n different types of cheese, each type of cheese should be eaten by exactly one mouse.

A point of the cheese with index i (0-indexed) is:

reward1[i] if the first mouse eats it.
reward2[i] if the second mouse eats it.
You are given a positive integer array reward1, a positive integer array reward2, and a non-negative integer k.

Return the maximum points the mice can achieve if the first mouse eats exactly k types of cheese.
Example 1:

Input: reward1 = [1,1,3,4], reward2 = [4,4,1,1], k = 2
Output: 15
Explanation: In this example, the first mouse eats the 2nd (0-indexed) and the 3rd types of cheese, and the second mouse eats the 0th and the 1st types of cheese.
The total points are 4 + 4 + 3 + 4 = 15.
It can be proven that 15 is the maximum total points that the mice can achieve.
 */
var miceAndCheese = function (reward1, reward2, k) {
    //r1=[6, 1, 1,3,4]
    //r2=[4, 9, 1,1,5]
    //2 -8 0 2-1 resta

    //-8 -1 0 2 2 orden
    //.     1 6 3  sumar r1 

    if (reward1.length === k) {
        let sum = reward1.reduce((a, b) => a + b);
        return sum;
    }
    let temp = [];
    let sum = 0;
    for (let i = 0; i < reward1.length; i++) {
        let diff = reward1[i] - reward2[i];
        temp.push([i, reward1[i], reward2[i], diff]);
    }
    temp.sort((a, b) => b[3] - a[3]);
    console.log(temp)
    for (let i = 0; i < reward1.length; i++) {
        console.log(temp[0][1])
        if (i < k) {
            sum += temp[i][1];
        }
        else {
            sum += temp[i][2];
        }
    }
    return sum;
};

console.log(miceAndCheese([6, 1, 1, 3, 4], [4, 9, 1, 1, 5], 3));
// Not resolved