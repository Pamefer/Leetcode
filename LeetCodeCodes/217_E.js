// 217. Contains Duplicate
// Given an integer array nums, return true if any value appears at 
// least twice in the array, and return false if every element is distinct.
// Input: nums = [1,2,3,1]
// Output: true

const calculateDuplicate = (nums) => {
  let setNum = new Set();
  for (let i = 0; i <= nums.length; i++) {
    let currentNumber = nums[i];
    if (setNum.has(currentNumber)) {
      return true;
    } else {
      setNum.add(currentNumber);
      console.log("no esta", setNum.has(currentNumber))
    }
  }
  return false;
}
console.log("result=> ", calculateDuplicate([1, 2, 3, 1]))