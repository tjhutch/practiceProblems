/**
 * @param {number[]} height
 * @return {number}
 */
function maxArea(height) {
  let max = 0;
  let i = 0;
  let j = height.length - 1;
  while (j > i) {
    const area = min(height[i], height[j]) * (j - i);
    if (area > max) {
      max = area;
    }
    if (height[i] > height[j]) {
      j--;
    } else {
      i++;
    }
  }
  return max;
}

function min(n1, n2) {
  return n1 > n2 ? n2 : n1;
}

console.log(maxArea([1,8,6,2,5,4,8,3,7]));
