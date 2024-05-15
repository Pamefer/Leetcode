// Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

const twoSum = (nums, target) => {
  const newHashmap = new Map();
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i]
    if (newHashmap.has(diff)) {
      return [i, newHashmap.get(diff)]
    }
    newHashmap.set(nums[i], i)
    console.log(newHashmap)
  }
}
console.log("two sum=>", twoSum([11, 2, 7, 15], 9)) 