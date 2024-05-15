const findUniqueSum = (nums) => {

    /* with object */
    const uniqueNums = {};
    for (let num of nums) {
        uniqueNums[num] = true;
    }
    let sum = 0;
    for (let i in uniqueNums) {
        sum += parseInt(i);
    }
    console.log("=uniqueNums", uniqueNums)
    /* with set */
    let setUniqueNums = new Set(nums);
    let sumSet = 0;
    for (let i of setUniqueNums) {
        sumSet += i;
    }
    console.log(setUniqueNums)
    console.log(sumSet)
    return sum;
};
console.log(findUniqueSum([1, 2, 3, 2, 4, 5, 4, 7]));