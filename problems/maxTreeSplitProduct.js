/*
  Given a binary tree root. Split the binary tree into two subtrees by removing 1 edge such that the product of the sums of the subtrees are maximized.
  Since the answer may be too large, return it modulo 10^9 + 7.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function maxProduct(root) {
  let sumRoot = {
    val: 0,
  };
  const treeTotal = calcSubtreeWeight(root, sumRoot);
  sumRoot.val = treeTotal;
  return calcMaxSubtree(sumRoot, treeTotal, 0) % (10 ** 9 + 7);
}

function calcSubtreeWeight(root, sumRoot) {
  let rightTotal = 0;
  let leftTotal = 0;
  if (root.right) {
    sumRoot.right = {};
    rightTotal = calcSubtreeWeight(root.right, sumRoot.right);
  }
  if (root.left) {
    sumRoot.left = {};
    leftTotal = calcSubtreeWeight(root.left, sumRoot.left);
  }
  const sum = root.val + rightTotal + leftTotal;
  sumRoot.val = sum;
  return sum;
}

function calcMaxSubtree(root, total, max) {
  const current = (total - root.val) * root.val;
  let newMax = current > max ? current : max;
  if (root.left) {
    const left = calcMaxSubtree(root.left, total, newMax);
    newMax = left > newMax ? left : newMax;
  }
  if (root.right) {
    const right = calcMaxSubtree(root.right, total, newMax);
    newMax = right > newMax ? right : newMax;
  }
  return newMax;
}
