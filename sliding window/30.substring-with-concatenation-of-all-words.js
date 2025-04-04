/*
 * @lc app=leetcode id=30 lang=javascript
 *
 * [30] Substring with Concatenation of All Words
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  const result = [];
  const wordMap = {};
  const wordLen = words[0].length;
  const totalLen = wordLen * words.length;

  for (const word of words) {
    wordMap[word] = (wordMap[word] || 0) + 1;
  }

  for (let i = 0; i < wordLen; i++) {
    let left = i;
    let right = i;
    let seen = {};

    while (right + wordLen <= s.length) {
      const word = s.slice(right, right + wordLen);
      right = right + wordLen;

      if (wordMap[word]) {
        seen[word] = (seen[word] || 0) + 1;

        while (seen[word] > wordMap[word]) {
          const leftWord = s.slice(left, left + wordLen);
          seen[leftWord]--;
          left += wordLen;
        }

        if (right - left === totalLen) {
          result.push(left);
        }
      } else {
        seen = {};
        left = right;
      }
    }
  }
  return result;
};

const s = "wordgoodgoodgoodbestword",
  words = ["word", "good", "best", "word"];

console.log(findSubstring(s, words));

// @lc code=end
