function diameterOfBinaryTree(root) {
  const map = new Map();
  map.set(null, [0, 0]);

  const stack = [root];

  while (stack.length) {
    let node = stack[stack.length - 1];

    if (node.left && !map.get(node.left)) {
      stack.push(node.left);
    } else if (node.right && !map.get(node.right)) {
      stack.push(node.right);
    } else {
      node = stack.pop();

      const [leftHeight, leftDiameter] = map.get(node.left);
      const [rightHeight, rightDiameter] = map.get(node.right);

      const height = 1 + Math.max(leftHeight, rightHeight);
      const diameter = Math.max(
        leftHeight + rightHeight,
        leftDiameter,
        rightDiameter,
      );

      map.set(node, [height, diameter]);
    }
  }

  return map.get(root)[1];
}
