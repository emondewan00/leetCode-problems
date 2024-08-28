// 744. Find Smallest Letter Greater Than Target

var nextGreatestLetter = function (letters, target) {
  let left = 0;
  let right = letters.length - 1;
  if (target >= letters[right]) {
    return letters[0];
  }
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (letters[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return letters[left];
};

const letters = ["c", "f", "j"];
const target = "e";

const result = nextGreatestLetter(letters, target);
console.log(result);
