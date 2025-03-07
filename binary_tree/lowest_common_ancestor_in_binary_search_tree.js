function lowestCommonAncestor(root, p, q) {
  let current = root;

  while (current) {
    if (p.val < current.val && q.val < current.val) {
      current = current.left;
    } else if (p.val > current.val && q.val > current.val) {
      current = current.right;
    } else {
      return current;
    }
  }

  return null;
}
