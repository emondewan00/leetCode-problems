// 917. Reverse Only Letters

var reverseOnlyLetters = function (s) {
  const arr = s.split("");
  let left = 0;
  let right = arr.length - 1;

  function isLetter(char) {
    return /[a-zA-Z]/.test(char);
  }

  while (left < right) {
    if (!isLetter(arr[left])) {
      left++;
      continue;
    }
    if (!isLetter(arr[right])) {
      right--;
      continue;
    }

    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr.join("");
};

const s = "a-bC-dEf-ghIj";

const result = reverseOnlyLetters(s);

console.log(result); // "j-Ih-gf-dE-cB-a"
