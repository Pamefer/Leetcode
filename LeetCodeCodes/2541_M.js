//Minimum Operations to Make Array Equal II
//https://leetcode.com/problems/minimum-operations-to-make-array-equal-ii/description/
/**
 * You are given two integer arrays nums1 and nums2 
 * of equal length n and an integer k. 
 * You can perform the following operation on nums1:

Choose two indexes i and j and increment nums1[i] by k and decrement nums1[j] by k.
 In other words, nums1[i] = nums1[i] + k and nums1[j] = nums1[j] - k.
nums1 is said to be equal to nums2 if for all indices i such that 0 <= i < n, nums1[i] == nums2[i].

Return the minimum number of operations required to make nums1 equal to nums2. If it is impossible to make them equal, return -1.
O(n)
O(1)
*
/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */

var minOperations = function (nums1, nums2, k) {
  let pos = 0;
  let neg = 0;
  for (let i = 0; i < nums1.length; i++) {
    if (nums1[i] === nums2[i]) continue;
    let diff = Math.abs(nums1[i] - nums2[i]);
    if (diff % k !== 0) {
      return -1;
    }
    if (nums1[i] < nums2[i]) {
      pos += diff / k;
    } else {
      neg += diff / k;
    }
  }
  if (pos == neg) return pos;
  return -1;
};

minOperations([3, 8, 5, 2], [2, 4, 1, 6], 1)