function rightSideView(root) {
  if (!root) {
    return [];
  }

  const output = [];

  let queue = [[root, 0]];
  let prevHeight = -1;

  while (queue.length) {
    const [node, height] = queue.shift();

    if (height !== prevHeight) {
      prevHeight = height;
      output.push(node.val);
    }

    if (node.right) {
      queue.push([node.right, height + 1]);
    }

    if (node.left) {
      queue.push([node.left, height + 1]);
    }
  }

  return output;
}
