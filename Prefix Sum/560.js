// 560. Subarray Sum Equals K

var subarraySum = function (nums, k) {
  const prefixSum = {
    0: 1,
  };
  let currentSum = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i];
    if (prefixSum[currentSum - k] !== undefined) {
      count += prefixSum[currentSum - k];
    }
    prefixSum[currentSum] = (prefixSum[currentSum] || 0) + 1;
  }
  return count;
};

const nums = [1, 1, 1],
  k = 2;
console.log(subarraySum(nums, k));

const nums2 = [1, 2, 3],
  k2 = 3;
console.log(subarraySum(nums, k));
