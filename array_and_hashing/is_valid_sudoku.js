function isValidSudoku(board) {
  const rows = new Map();
  const cols = new Map();
  const squares = new Map();

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      if (board[r][c] === '.') {
        continue;
      }

      const value = board[r][c];

      if (rows.get(r) && rows.get(r).has(value)) {
        return false;
      }

      if (cols.get(c) && cols.get(c).has(value)) {
        return false;
      }

      const squareKey = `${Math.floor(r / 3)},${Math.floor(c / 3)}`;

      if (squares.get(squareKey) && squares.get(squareKey).has(value)) {
        return false;
      }

      if (!rows.has(r)) {
        rows.set(r, new Set());
      }
      if (!cols.has(c)) {
        cols.set(c, new Set());
      }
      if (!squares.has(squareKey)) {
        squares.set(squareKey, new Set());
      }

      rows.get(r).add(value);
      cols.get(c).add(value);
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
