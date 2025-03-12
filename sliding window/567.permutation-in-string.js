/*
 * @lc app=leetcode id=567 lang=javascript
 *
 * [567] Permutation in String
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  const s1Count = new Array(26).fill(0);
  const s2Count = new Array(26).fill(0);
  const base = "a".charCodeAt(0);

  for (let i = 0; i < s2.length; i++) {
    // updating the counters past
    if (i < s1.length) {
      s1Count[s1[i].charCodeAt(0) - base]++;
    }
    s2Count[s2[i].charCodeAt(0) - base]++;

    
    // sliding window part
    if (i >= s1.length - 1) {
      // remove fast most window element
      s2Count[s2.charCodeAt(i - s1.length) - base]--;
      if (s1Count.join("") === s2Count.join("")) {
        return true;
      }
    }
  }
  return false;
};

const s1 = "ab",
  s2 = "eidbaooo";
console.log(checkInclusion(s1, s2));

// @lc code=end
