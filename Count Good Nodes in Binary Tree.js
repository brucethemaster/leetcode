/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function (root) {
  let sum = 0;

  if ((root.left === null) & (root.right === null)) {
    return 1;
  }

  sum = isGoodNode(root, 0, root.val);

  return sum;
};

var isGoodNode = (root, sum, val) => {
  if (root.val >= val) {
    sum = sum + 1;
  }
  let valuToPass = Math.max(root.val, val);

  if (root.left !== null) {
    sum = isGoodNode(root.left, sum, valuToPass);
  }

  if (root.right !== null) {
    sum = isGoodNode(root.right, sum, valuToPass);
  }

  return sum;
};
