//268. Missing Number

var missingNumber = function (nums = []) {
  nums.sort((a, b) => a - b);
  let left = 0;
  let right = nums.length;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === mid) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
};

// Example 1:
const nums = [3, 0, 1];
const result = missingNumber(nums);
console.log(result); // Output: 2

// Example 2:
const nums2 = [0, 1];
const result2 = missingNumber(nums2);
console.log(result2); // Output: 2

const nums3 = [9, 6, 4, 2, 3, 5, 7, 0, 1];
const result3 = missingNumber(nums3);

console.log(result3); // Output: 8
