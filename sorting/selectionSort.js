// selection sort

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let minimumIndex = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[minimumIndex] > arr[j]) {
        minimumIndex = j;
      }
    }
    [arr[i], arr[minimumIndex]] = [arr[minimumIndex], arr[i]];
  }
  return arr;
};

const arr = [5, 3, 8, 2, 1, 4];

console.log(selectionSort(arr)); // [1, 2, 3, 4, 5, 8]
