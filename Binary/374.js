// 374. Guess Number Higher or Lower

const pick = 1099;
function guess(num) {
  if (num > pick) {
    return -1;
  } else if (num < pick) {
    return 1;
  } else {
    return 0;
  }
}

var guessNumber = function (n) {
  let left = 1;
  let right = n;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const response = guess(mid);
    if (response === -1) {
      right = mid - 1;
    } else if (response === 1) {
      left = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
};

const n = 10;

const result1 = guessNumber(pick);

console.log(result1); 
