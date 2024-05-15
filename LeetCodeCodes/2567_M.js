//2567. Minimum Score by Changing Two Elements
/**
 * You are given a 0-indexed integer array nums.

The low score of nums is the minimum value of |nums[i] - nums[j]| over all 0 <= i < j < nums.length.
The high score of nums is the maximum value of |nums[i] - nums[j]| over all 0 <= i < j < nums.length.
The score of nums is the sum of the high and low scores of nums.
To minimize the score of nums, we can change the value of at most two elements of nums.

Return the minimum possible score after changing the value of at most two elements of nums.

Note that |x| denotes the absolute value of x.
 * 
 */
// link: https://leetcode.com/problems/minimum-score-by-changing-two-elements/solutions/3203217/ts-solution/
var minimizeSum = function(nums) {
    let arr = nums.sort((a,b) => a - b);
    let size=arr.length-1;
    console.log(size)

    let ans= Math.min(arr[size-2]-arr[0],arr[size-1]-arr[1],arr[size]-arr[2])
    return ans;
};
minimizeSum([1,4,3]);
minimizeSum([1,4,7,8,5]);

