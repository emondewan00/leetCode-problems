/*
 * @lc app=leetcode id=438 lang=javascript
 *
 * [438] Find All Anagrams in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const result = [];
  const pCount = Array(26).fill(0); // Frequency array for `p`
  const sCount = Array(26).fill(0); // Frequency array for current window in `s`
  const aCharCode = "a".charCodeAt(0); // Base char code for 'a'

  // Populate `pCount` with the frequency of each character in `p`
  for (const char of p) {
    pCount[char.charCodeAt(0) - aCharCode]++;
  }

  // Sliding window over `s`
  for (let i = 0; i < s.length; i++) {
    // Add current character to `sCount`
    sCount[s.charCodeAt(i) - aCharCode]++;

    // Remove character that is left out of the window
    if (i >= p.length) {
      sCount[s.charCodeAt(i - p.length) - aCharCode]--;
    }

    // Compare the frequency arrays
    if (pCount.join("") === sCount.join("")) {
      result.push(i - p.length + 1); // Add the starting index of the window
    }
  }

  return result;
};

const s = "abb",
  p = "bab";
console.log(findAnagrams(s, p));

// @lc code=end
