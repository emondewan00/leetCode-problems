/*
 * @lc app=leetcode id=724 lang=javascript
 *
 * [724] Find Pivot Index
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  const prefixSum = new Array(nums.length + 2);
  prefixSum[0] = 0;
  prefixSum[prefixSum.length - 1] = 0;

  for (let i = 0; i < nums.length; i++) {
    prefixSum[i + 1] = prefixSum[i] + nums[i];
  }

  for (let i = 1; i <= nums.length ; i++) {
    const currentSum = prefixSum[i];
    const leftSum = prefixSum[i - 1];
    const rightSum = prefixSum[nums.length] - currentSum;

    if (leftSum === rightSum) {
      return i - 1;
    }
  }

  return -1;
};

const nums = [-1, -1, 0, 1, 1, 0];
console.log(pivotIndex(nums));
// @lc code=end
