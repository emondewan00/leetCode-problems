// 2540. Minimum Common Value

const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return true;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
};

var getCommon = function (nums1, nums2) {
  for (let i = 0; i < nums1.length; i++) {
    if (binarySearch(nums2, nums1[i])) {
      return nums1[i];
    }
  }
  return -1;
};

const nums1 = [1, 2, 3];
const nums2 = [2, 4];

console.log(getCommon(nums1, nums2));
