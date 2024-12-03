// 392. Is Subsequence

var isSubsequence = function (s, t) {
  let i = 0;
  let j = 0;
  let ans = s.length ;
  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      ans--;
      i++;
    }
    j++;
  }
  return ans === 0;
};

const s = "abc",
  t = "ahbgdc";

console.log(isSubsequence(s, t));
