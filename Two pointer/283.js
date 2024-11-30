// 283. Move Zeroes

var moveZeroes = function (nums) {
  let i = 0; // Pointer for the current position
  let j = 0; // Pointer to find non-zero elements

  while (j < nums.length) {
    if (nums[j] !== 0) {
      // Swap only if a non-zero is found after a zero
      if (i !== j) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
      }
      i++; // Increment the position for the next non-zero
    }
    j++; // Always move j to scan the entire array
  }

  return nums;
};

const nums = [1];

console.log(moveZeroes(nums)); // Output: [1, 3, 12, 0, 0]
