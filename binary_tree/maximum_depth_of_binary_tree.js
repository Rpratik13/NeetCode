function maxDepth(root) {
  if (!root) {
    return 0;
  }

  let output = 0;

  const stack = [[root, 0]];

  while (stack.length) {
    let [node, depth] = stack.pop();

    if (!node.left && !node.right) {
      output = Math.max(output, depth);

      continue;
    }

    if (node.left) {
      stack.push([node.left, depth + 1]);
    }

    if (node.right) {
      stack.push([node.right, depth + 1]);
    }
  }

  return output;
}
