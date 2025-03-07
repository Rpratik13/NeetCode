function levelOrder(root) {
  if (!root) {
    return [];
  }

  const queue = [[root, 0]];
  const output = [];

  while (queue.length) {
    const [node, height] = queue.shift();

    if (!output[height]) {
      output[height] = [];
    }

    output[height].push(node.val);

    if (node.left) {
      queue.push([node.left, height + 1]);
    }

    if (node.right) {
      queue.push([node.right, height + 1]);
    }
  }

  return output;
}
