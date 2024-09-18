// 167. Two Sum II - Input Array Is Sorted
var twoSum = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];

    if (sum === target) {
      return [left + 1, right + 1];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
};

const numbers = [5, 25, 75];
const target = 100;
console.log(twoSum(numbers, target));
