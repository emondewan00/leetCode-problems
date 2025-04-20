/*
 * @lc app=leetcode id=1047 lang=javascript
 *
 * [1047] Remove All Adjacent Duplicates In String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  let stack = [];

  for (let char of s) {
    if (stack.length && stack[stack.length - 1] === char) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.join("");
};

const s = "abbaca";
console.log(removeDuplicates(s));
// @lc code=end
