//  marge sort

const arr = [5, 3, 8, 2, 1, 4];
const newArr = [];

function margeSort(arr, l, r) {
  if (l < r) {
    const mid = Math.floor((l + r) / 2);
    margeSort(arr, l, mid); // left
    margeSort(arr, mid + 1, r); // right

    margeSubArray(arr, l, mid, r);
  }
}

function margeSubArray(arr, l, mid, r) {
  let i = l;
  let j = mid + 1;
  let k = l;

  //  sort by mid and by right
  while (i <= mid && j <= r) {
    if (arr[i] <= arr[j]) {
      newArr[k++] = arr[i++];
    } else {
      newArr[k++] = arr[j++];
    }
  }

  // copy here rest of sub array array
  while (i <= mid) newArr[k++] = arr[i++];
  while (j <= r) newArr[k++] = arr[j++];

  // copy newArr to arr[] from l to r
  for (let m = l; m <= r; m++) {
    arr[m] = newArr[m];
  }
}

margeSort(arr, 0, arr.length - 1);

console.log(arr, "hello"); // [1, 2, 3, 4, 5, 8]
