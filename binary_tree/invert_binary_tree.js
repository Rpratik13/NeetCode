class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function invertTree(root) {
  if (!root) {
    return root;
  }

  let temp = root.left;
  root.left = root.right;
  root.right = temp;

  root.left && invertTree(root.left);
  root.right && invertTree(root.right);

  return root;
}
