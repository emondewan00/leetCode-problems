// quick sorting

const arr = [5, 3, 8, 2, 1, 4];

function quickSort(arr, l, r) {
  if (l < r) {
    const pivot = arr[l];
    const p = partition(arr, l, r, pivot);
    quickSort(arr, l, p); // left
    quickSort(arr, p + 1, r); // right
  }
}

function partition(arr, l, r, pivot) {
  let i = l + 1;
  for (let j = i; j <= r; j++) {
    if (arr[j] < pivot) {
      swap(arr, i, j);
      i++;
    }
  }
  swap(arr, l, i - 1);
  return i - 1;
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

quickSort(arr, 0, arr.length - 1);

console.log(arr); // [1, 2, 3, 4, 5, 8]
