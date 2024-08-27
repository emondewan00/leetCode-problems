// 34. Find First and Last Position of Element in Sorted Array
var searchRange = function (nums, target) {
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

  if (leftIndex <= rightIndex) {
    return [leftIndex, rightIndex];
  } else {
    return [-1, -1];
  }
};

const target = 6;
const nums = [5, 7, 7, 8, 8, 10];

// const target = 8;
// const nums = [5, 7, 7, 8, 8, 10];

const result = searchRange(nums, target);

console.log(result); // output : [-1,-1]
