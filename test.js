// var targetIndices = function (nums, target) {
//   nums.sort((a, b) => a - b);

//   const leftBinary = (nums, target) => {
//     let left = 0;
//     let right = nums.length - 1;

//     while (left <= right) {
//       const mid = Math.floor((left + right) / 2);
//       if (nums[mid] >= target) {
//         right = mid - 1;
//       } else {
//         left = mid + 1;
//       }
//     }
//     return left;
//   };
//   const rightBinary = (nums, target) => {
//     let left = 0;
//     let right = nums.length - 1;

//     while (left <= right) {
//       const mid = Math.floor((left + right) / 2);
//       if (nums[mid] <= target) {
//         left = mid + 1;
//       } else {
//         right = mid - 1;
//       }
//     }
//     return right;
//   };
//   const leftIndex = leftBinary(nums, target);
//   const rightIndex = rightBinary(nums, target);
//   console.log(leftIndex, rightIndex, nums);
//   return Array.from(
//     { length: rightIndex - leftIndex + 1 },
//     (_, i) => i + leftIndex
//   );
// };

var targetIndices = function (nums, target) {
  nums.sort((a, b) => a - b);
  whi
};

const nums = [1, 2, 5, 2, 3],
  target = 2;

console.log(targetIndices(nums, target));

// Output: [1, 2]
