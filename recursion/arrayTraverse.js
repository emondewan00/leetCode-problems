// array traverse

const arr = [1, 2, 3, 4, 5];

function traverseArray(arr, i) {
  // Base case - Top - (U-turn)
  if (arr.length === i) {
    return;
  }
  console.log(arr[i]);
  traverseArray(arr, i + 1); // Recursive call
}

traverseArray(arr, 0); // Recursive call
