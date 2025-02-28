function backtrack(n, open, close, output, current) {
  if (open === close && open === n) {
    output.push(current);

    return;
  }

  if (open < n) {
    backtrack(n, open + 1, close, output, current + '(');
  }

  if (close < open) {
    backtrack(n, open, close + 1, output, current + ')');
  }
}

function generateParenthesis(n) {
  const output = [];
  backtrack(n, 0, 0, output, '');

  return output;
}

console.log(generateParenthesis(2));
