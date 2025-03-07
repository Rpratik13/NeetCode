function dfs(root) {
  if (!root) {
    return [true, 0];
  }

  const left = dfs(root.left);
  const right = dfs(root.right);

  const balanced = left[0] && right[0] && Math.abs(left[1] - right[1]) <= 1;

  return [balanced, 1 + Math.max(left[1], right[1])];
}

function isBalanced(root) {
  return dfs(root)[0];
}
