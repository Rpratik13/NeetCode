function isValidSudoku(board) {
  const rows = new Map();
  const cols = new Map();
  const squares = new Map();

  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      const value = board[row][col];

      if (value === '.') {
        continue;
      }

      if (rows.has(row) && rows.get(row).has(value)) {
        return false;
      }

      if (cols.has(col) && cols.get(col).has(value)) {
        return false;
      }

      const squareKey = `(${Math.floor(row / 3)},${Math.floor(col / 3)})`;

      if (squares.has(squareKey) && squares.get(squareKey).has(value)) {
        return false;
      }

      if (!rows.has(row)) {
        rows.set(row, new Set());
      }

      if (!cols.has(col)) {
        cols.set(col, new Set());
      }

      if (!squares.has(squareKey)) {
        squares.set(squareKey, new Set());
      }

      rows.get(row).add(value);
      cols.get(col).add(value);
      squares.get(squareKey).add(value);
    }
  }

  return true;
}

console.log(
  isValidSudoku([
    ['1', '2', '.', '.', '3', '.', '.', '.', '.'],
    ['4', '.', '.', '5', '.', '.', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '.', '3'],
    ['5', '.', '.', '.', '6', '.', '.', '.', '4'],
    ['.', '.', '.', '8', '.', '3', '.', '.', '5'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '.', '.', '.', '.', '.', '2', '.', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '8'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
  ]),
);
