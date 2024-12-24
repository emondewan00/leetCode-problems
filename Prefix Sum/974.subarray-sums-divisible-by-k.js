/*
 * @lc app=leetcode id=974 lang=javascript
 *
 * [974] Subarray Sums Divisible by K
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var subarraysDivByK = function (nums, k) {
//   const prefixSum = new Array(nums.length + 1).fill(0);
//   const count = new Map();
//   count.set(0, 1);
//   let res = 0;
//   for (let i = 0; i < nums.length; i++) {
//     prefixSum[i + 1] = (prefixSum[i] + nums[i]) % k;
//     res += count.get(prefixSum[i + 1]) || 0;
//     count.set(prefixSum[i + 1], (count.get(prefixSum[i + 1]) || 0) + 1);
//   }
//   return res;
// };

var subarraysDivByK = function (nums, k) {
  const reminderCount = {
    0: 1, // this is for base case
  };
  let prefixSum = 0;
  let count = 0;

  for (const num of nums) {
    prefixSum += num;

    let reminder = prefixSum % k;

    if (reminder < 0) {
      reminder += k;
    }

    if (reminderCount[reminder] !== undefined) {
      console.log(reminderCount[reminder], reminder);
      count += reminderCount[reminder];
    }

    reminderCount[reminder] = (reminderCount[reminder] || 0) + 1;
  }
  return count;
};
const nums = [4, 5, 0, -2, -3, 1],
  k = 5;
console.log(subarraysDivByK(nums, k));
// @lc code=end
