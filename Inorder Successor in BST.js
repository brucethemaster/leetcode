/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function (root, p) {
  let array = [];
  array = inorder(root, array, p.val);
  p.val = !array[array.indexOf(p.val) + 1] ? null : array[array.indexOf(p.val) + 1];
  return p.val === null ? null : p;
};

var inorder = (root, array, p) => {
  if (root === null) {
    return;
  }
  inorder(root.left, array);

  array.push(root.val);

  inorder(root.right, array);

  return array;
};
