// 525. Contiguous Array

var findMaxLength = function (nums) {
  const uniqueSumValue = new Map();
  let sum = 0;
  let longestSubArr = 0;

  // Initialize map with sum 0 at index -1
  uniqueSumValue.set(0, -1);

  for (let i = 0; i < nums.length; i++) {
    // Treat 0 as -1
    sum += nums[i] === 0 ? -1 : 1;

    if (uniqueSumValue.has(sum)) {
      const length = i - uniqueSumValue.get(sum);
      longestSubArr = Math.max(longestSubArr, length);
    } else {
      uniqueSumValue.set(sum, i);
    }
  }

  return longestSubArr;
};

// Example:
const nums = [1, 1, 0, 0, 1, 1, 0];
console.log(findMaxLength(nums)); // Output: 6
