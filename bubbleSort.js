// bubble sort

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      const temp = arr[i];
      if (arr[i] > arr[j]) {
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};

const arr = [5, 3, 8, 2, 1, 4];

console.log(bubbleSort(arr)); // [1, 2, 3, 4, 5, 8]
