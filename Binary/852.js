//852. Peak Index in a Mountain Array

var peakIndexInMountainArray = function (arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    const nextValue = arr[mid + 1];

    if (arr[mid] < nextValue) {
      left = mid + 1;
    } else if (arr[mid] > nextValue) {
      right = mid - 1;
    }
  }
  return left;
};

const arr = [0, 10, 5, 2];

const result = peakIndexInMountainArray(arr);
console.log(result);
