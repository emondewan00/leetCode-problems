// 367. Valid Perfect Square

var isPerfectSquare = function (num) {
  let left = 0;
  let right = num;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const squareMid = mid * mid;
    if (squareMid === num) {
      return true;
    } else if (squareMid > num) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return false;
};

const num = 1;
const result = isPerfectSquare(num);
console.log(result);
