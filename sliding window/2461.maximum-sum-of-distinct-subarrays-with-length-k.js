/*
 * @lc app=leetcode id=2461 lang=javascript
 *
 * [2461] Maximum Sum of Distinct Subarrays With Length K
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function (nums, k) {
  if (nums.length < k) return 0; // Edge case: no valid subarray

  let currentSum = 0;
  const frequencyMap = {}; // Tracks frequency of elements in the current window
  let uniqueCount = 0; // Tracks the number of unique elements in the current window
  let result = 0;

  // Initialize the first window
  for (let i = 0; i < k; i++) {
    const element = nums[i];
    currentSum += element;
    if (!frequencyMap[element]) {
      frequencyMap[element] = 1;
      uniqueCount++;
    } else {
      frequencyMap[element]++;
    }
  }

  // If the first window has all unique elements, update the result
  if (uniqueCount === k) {
    result = currentSum;
  }

  // Slide the window
  for (let i = k; i < nums.length; i++) {
    const element = nums[i];
    const removedElement = nums[i - k];

    // Remove the leftmost element of the window
    frequencyMap[removedElement]--;
    if (frequencyMap[removedElement] === 0) {
      uniqueCount--;
    }

    // Add the new element to the window
    if (!frequencyMap[element]) {
      frequencyMap[element] = 1;
      uniqueCount++;
    } else {
      frequencyMap[element]++;
    }

    // Update the current sum
    currentSum = currentSum + element - removedElement;

    // If the current window has all unique elements, update the result
    if (uniqueCount === k) {
      result = Math.max(result, currentSum);
    }
  }

  return result;
};

// const nums = [1, 5, 4, 2, 9, 9, 9],
//   k = 3;

// console.log(maximumSubarraySum(nums, k));

const nums2 = [1, 2, 2],
  k2 = 2;

console.log(maximumSubarraySum(nums2, k2));

// @lc code=end
