function search(matrix, target) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  let top = 0;
  let bottom = rows - 1;

  while (top <= bottom) {
    const row = Math.floor((top + bottom) / 2);

    if (target > matrix[row][cols - 1]) {
      top = row + 1;
    } else if (target < matrix[row][0]) {
      bottom = row - 1;
    } else {
      break;
    }
  }

  if (top > bottom) {
    return false;
  }

  const row = Math.floor((top + bottom) / 2);

  let left = 0;
  let right = cols - 1;

  while (left <= right) {
    const m = Math.floor((left + right) / 2);

    if (target > matrix[row][m]) {
      left = m + 1;
    } else if (target < matrix[row][m]) {
      right = m - 1;
    } else {
      return true;
    }
  }

  return false;
}

console.log(
  search(
    [
      [1, 2, 4, 8],
      [10, 11, 12, 13],
      [14, 20, 30, 40],
    ],
    15,
  ),
);
