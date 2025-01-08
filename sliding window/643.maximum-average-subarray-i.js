/*
 * @lc app=leetcode id=643 lang=javascript
 *
 * [643] Maximum Average Subarray I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  if (nums.length < k) {
    throw new Error("The array length must be greater than or equal to k");
  }

  let maxAverage = -Infinity;
  let currentSum = 0;

  for (let i = 0; i < k; i++) {
    currentSum += nums[i];
  }
  maxAverage = currentSum / k;

  for (let i = k; i < nums.length; i++) {
    currentSum = currentSum - nums[i - k] + nums[i];
    const currentAverage = currentSum / k;
    if (maxAverage < currentAverage) {
      maxAverage = currentAverage;
    }
  }

  // Return the maximum average found for any subarray of length k.
  return maxAverage;
};

const nums = [5],
  k = 1;
// console.log(findMaxAverage(nums, k));
// @lc code=end
