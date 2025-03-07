function isSame(tree1, tree2) {
  if (!tree1 && !tree2) {
    return true;
  }

  if (tree1 && tree2 && tree1.val === tree2.val) {
    return isSame(tree1.left, tree2.left) && isSame(tree1.right, tree2.right);
  }

  return false;
}

function isSubtree(root, subRoot) {
  const stack = [root];

  while (stack.length) {
    const node = stack.pop();

    if (isSame(node, subRoot)) {
      return true;
    }

    if (node.left) {
      stack.push(node.left);
    }

    if (node.right) {
      stack.push(node.right);
    }
  }

  return false;
}
