// palindrome

const string = "deified";

function isPalindrome(s) {
  if (s.length <= 1) {
    return true;
  }

  if (s[0] === s[s.length - 1]) {
    return isPalindrome(s.slice(1, s.length - 1));
  }
  return false;
}

console.log(isPalindrome(string));
