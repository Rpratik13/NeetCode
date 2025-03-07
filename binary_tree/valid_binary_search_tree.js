function isValidBST(root) {
  if (!root) {
    return true;
  }

  const queue = [[root, -Infinity, Infinity]];

  while (queue.length) {
    const [node, min, max] = queue.shift();

    if (node.val <= min || node.val >= max) {
      return false;
    }

    if (node.left) {
      queue.push([node.left, min, node.val]);
    }

    if (node.right) {
      queue.push([node.right, node.val, max]);
    }
  }

  return true;
}
