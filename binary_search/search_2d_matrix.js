function search(matrix, target) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  let top = 0;
  let bottom = rows - 1;
  let middle;

  while (top <= bottom) {
    middle = Math.floor((top + bottom) / 2);

    if (target < matrix[middle][0]) {
      bottom = middle - 1;
    } else if (target > matrix[middle][cols - 1]) {
      top = middle + 1;
    } else {
      break;
    }
  }

  if (top > bottom) {
    return -1;
  }

  let left = 0;
  let right = cols - 1;

  while (left <= right) {
    const m = Math.floor((left + right) / 2);

    if (matrix[middle][m] === target) {
      return [middle, m];
    } else if (matrix[middle][m] > target) {
      right = m - 1;
    } else {
      left = m + 1;
    }
  }

  return -1;
}

console.log(
  search(
    [
      [1, 2, 4, 8],
      [10, 11, 12, 13],
      [14, 20, 30, 40],
    ],
    8,
  ),
);
