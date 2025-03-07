function goodNodes(root) {
  let output = 0;

  if (!root) {
    return output;
  }

  const queue = [[root, -Infinity]];

  while (queue.length) {
    const [node, maxSoFar] = queue.shift();

    if (node.val >= maxSoFar) {
      output += 1;
    }

    const max = Math.max(maxSoFar, node.val);

    if (node.left) {
      queue.push([node.left, max]);
    }

    if (node.right) {
      queue.push([node.right, max]);
    }
  }

  return output;
}
