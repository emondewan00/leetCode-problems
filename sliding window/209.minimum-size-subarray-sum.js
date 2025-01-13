/*
 * @lc app=leetcode id=209 lang=javascript
 *
 * [209] Minimum Size Subarray Sum
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let minLength = Infinity;
  let sum = 0;
  let n = nums.length;
  let left = 0;
  for (let i = 0; i < n; i++) {
    sum += nums[i];

    while (sum >= target) {
      minLength = Math.min(minLength, i - left + 1);
      sum -= nums[left];
      left++;
    }
  }
  return minLength === Infinity ? 0 : minLength;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])); // Output: 2
console.log(minSubArrayLen(4, [1, 4, 4])); // Output: 1
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1])); // Output: 0
// @lc code=end
