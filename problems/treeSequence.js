/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestConsecutive = function (root) {
  if (!root) {
    return 0;
  }
  let left = 1;
  let right = 1;
  if (root) {
    if (root.left) {
      left = lc(root.left, root.val, left);
    }
    if (root.right) {
      right = lc(root.right, root.val, right);
    }
  }
  return left > right ? left : right;
};

const lc = function(root, lastVal, len) {
  // if current node val is 1 greater than previous, increment. Otherwise reset to 1
  const current = root.val === lastVal + 1 ? len + 1 : 1;
  let left = 0;
  let right = 0;
  if (root.left) {
    // get left sub-tree value
    left = lc(root.left, root.val, current);
  }
  if (root.right) {
    // get right sub-tree value
    right = lc(root.right, root.val, current);
  }
  // return the greatest of the 3
  // checking individually is slightly faster than Math.max
  if (current > left && current > right) {
    return current;
  } else if (left > right) {
    return left
  } else {
    return right;
  }
};

const root = new TreeNode(1);
let ref = root;
ref = root.right = new TreeNode(2);
ref.left = new TreeNode(3);
ref = ref.right = new TreeNode(3);
ref = ref.right = new TreeNode(4);
console.log(longestConsecutive(root));
