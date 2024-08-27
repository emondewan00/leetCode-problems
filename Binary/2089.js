// 2089. Find Target Indices After Sorting Array

function targetIndices(nums, target) {
  nums.sort((a, b) => a - b);

  const binaryLeft = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return left;
  };

  const binaryRight = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] <= target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return right;
  };
  const leftIndex = binaryLeft(nums, target);
  const rightIndex = binaryRight(nums, target);

  return Array.from(
    { length: rightIndex - leftIndex + 1 },
    (_, i) => i + leftIndex
  );
}

const nums = [1, 2, 5, 2, 3, 5, 4, 6, 5, 7, 8, 5];

const target = 5;

console.log(targetIndices(nums, target)); // Output: [1, 2]
