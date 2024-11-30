// 387. First Unique Character in a String

var firstUniqChar = function (s) {
  const count = new Map();

  for (const char of s) {
    const value = count.get(char) || 0;
    count.set(char, value + 1);
  }

  for (let i = 0; i < s.length; i++) {
    if (count.get(s[i]) === 1) return i;
  }
  return -1;
};

const s = "leetcode";
console.log(firstUniqChar(s));

const s2 = "loveleetcode";
console.log(firstUniqChar(s2));
