// 2000. Reverse Prefix of Word

var reversePrefix = function (word, ch) {
  let index = word.indexOf(ch);
  if (index === -1) return word;
  const arr = word.split("");
  let left = 0;
  let right = index;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr.join("");
};

const word = "abcdefd";
const ch = "d";

console.log(reversePrefix(word, ch)); // Output: "dcbaefd"
