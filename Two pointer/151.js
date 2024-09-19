// 151. Reverse Words in a String
var reverseWords = function (s) {
  const arr = s.split(" ").filter(Boolean);
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr.join(" ");
};

const s = "a good   example";

console.log(reverseWords(s)); //"example good a"
