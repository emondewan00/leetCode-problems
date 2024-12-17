// 523. Continuous Subarray Sum

function checkSubarraySum(nums, k) {
  const remainderMap = new Map();
  remainderMap.set(0, -1);
  let cumulativeSum = 0;

  for (let i = 0; i < nums.length; i++) {
    cumulativeSum += nums[i];
    let remainder = k !== 0 ? cumulativeSum % k : cumulativeSum;

    if (remainder < 0) {
      remainder += Math.abs(k);
    }
    if (remainderMap.has(remainder)) {
      if (i - remainderMap.get(remainder) > 1) {
        return true;
      }
    } else {
      remainderMap.set(remainder, i);
    }
  }
  return false;
}

// Example usage

const nums1 = [23, 2, 4, 6, 7];
const k1 = 7;
console.log(checkSubarraySum(nums1, k1)); // Output: true

const nums2 = [23, 2, 6, 4, 7];

console.log(checkSubarraySum(nums2, 13)); // Output: true
