// 125. Valid Palindrome

var isPalindrome = function (s) {
  s = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  let left = 0;
  let right = s.length - 1;
  const arr = s.split("");

  while (left <= right) {
    if (arr[left] === arr[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
};

// Test cases

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
