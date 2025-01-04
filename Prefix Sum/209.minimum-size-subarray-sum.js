var minSubArrayLen = function (target, nums) {
  let result = Infinity; // Initialize to a large value
  const prefixSum = [];
  prefixSum[0] = nums[0]; // Base case

  for (let i = 1; i < nums.length; i++) {
    prefixSum[i] = prefixSum[i - 1] + nums[i];
  }

  for (let i = 0; i < nums.length; i++) {
    if (prefixSum[i] >= target) {
      const requiredSum = prefixSum[i] - target;

      // Binary search to find the smallest prefix sum index
      let left = 0,
        right = i;
      while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (prefixSum[mid] <= requiredSum) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }

      // Calculate subarray length and update result
      result = Math.min(result, i - right);
    }
  }

  return result === Infinity ? 0 : result; // Return 0 if no valid subarray is found
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])); // Output: 2
console.log(minSubArrayLen(4, [1, 4, 4])); // Output: 1
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1])); // Output: 0
