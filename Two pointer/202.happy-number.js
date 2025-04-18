/*
 * @lc app=leetcode id=202 lang=javascript
 *
 * [202] Happy Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const map = {};
  while (n > 1) {
    const numberS = n + "";
    let i = 0;
    let j = numberS.length - 1;
    let number = 0;
    while (i < j) {
      number += numberS[i] * numberS[i] + numberS[j] * numberS[j];
      i++;
      j--;
    }

    if (numberS.length % 2 !== 0) {
      number += numberS[i] * numberS[i];
    }

    if (map[n]) {
      return false;
    } else {
      map[n] = number;
    }

    n = number;
  }
  if (n === 1) return true;
  return false;
};

const n = 2;
// console.log(isHappy(n));

// @lc code=end
