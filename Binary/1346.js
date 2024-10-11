function checkIfExist(arr) {
  arr.sort((a, b) => a - b); // Sort the array

  const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] === target) return true;
      else if (arr[mid] < target) left = mid + 1;
      else right = mid - 1;
    }
    return false;
  };

  for (let i = 0; i < arr.length; i++) {
    const target = arr[i] * 2;
    if (binarySearch(arr, target) && arr.indexOf(target) !== i) {
      return true;
    }
  }

  return false;
}

// Example test cases
console.log(checkIfExist([10, 2, 5, 3])); // true
console.log(checkIfExist([7, 1, 14, 11])); // true
console.log(checkIfExist([3, 1, 7, 11])); // false
