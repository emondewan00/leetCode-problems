// 832. Flipping an Image

var flipAndInvertImage = function (imageMatrix) {
  const flipAndInvertRow = (row) => {
    let left = 0;
    let right = row.length - 1;

    while (left <= right) {
      let temp = row[left] === 0 ? 1 : 0;
      row[left] = row[right] === 0 ? 1 : 0;
      row[right] = temp;

      left++;
      right--;
    }
    return row;
  };

  for (let i = 0; i < imageMatrix.length; i++) {
    imageMatrix[i] = flipAndInvertRow(imageMatrix[i]);
  }

  return imageMatrix;
};

const image = [
  [1, 1, 0],
  [1, 0, 1],
  [0, 0, 0],
];
const result = flipAndInvertImage(image);
console.log(result); // [[1,0,0],[0,1,0],[1,1,1]]
