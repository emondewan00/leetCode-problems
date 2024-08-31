//69. Sqrt(x)

var mySqrt = function (x) {
  let left = 0;
  let right = x;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (mid * mid < x) {
      left = mid + 1;
    } else if (mid * mid > x) {
      right = mid - 1;
    } else {
      return mid;
    }
  }
  return right;
};

const x = 4;
const result = mySqrt(x);
console.log(result);
console.log(mySqrt(8));
