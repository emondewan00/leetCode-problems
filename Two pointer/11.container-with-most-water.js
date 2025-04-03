/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let i = 0;
  let j = height.length - 1;
  let result = 0;

  while (i < j) {
    const distance = j - i;
    if (height[i] < height[j]) {
      const water = height[i] * distance;
      if (water > result) {
        result = water;
      }
      i++;
    } else {
      const water = height[j] * distance;
      if (water > result) {
        result = water;
      }
      j--;
    }
  }
  return result;
};

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

console.log(maxArea(height));

// @lc code=end
