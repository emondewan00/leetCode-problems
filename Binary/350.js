//350. Intersection of Two Arrays II

var intersect = function (nums1, nums2) {
  nums2.sort((a, b) => a - b);
  const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const midValue = arr[mid];
      if (midValue === target) {
        return mid;
      } else if (midValue > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return -1;
  };

  const result = [];

  for (let i = 0; i < nums1.length; i++) {
    const index = binarySearch(nums2, nums1[i]);
    if (index !== -1) {
      result.push(nums1[i]);
      nums2.splice(index, 1);
    }
  }
  return result;
};

const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2];

console.log(intersect(nums1, nums2)); // Output: [2, 2]
