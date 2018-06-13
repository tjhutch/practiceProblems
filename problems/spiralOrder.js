/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if (!matrix || matrix.length === 0) {
    return [];
  }
  let iterations;
  let result = [];
  // number of 'spirals' will be the smaller of the length and width - 1
  if (matrix.length > matrix[0].length) {
    iterations = matrix[0].length - 1;
  } else {
    iterations = matrix.length - 1;
  }
  if (iterations === 0) {
    iterations = 1;
  }
  let bottom = matrix.length - 1;
  let right = matrix[0].length - 1;
  let top = 0;
  let left = 0;
  for (let it = 0; it < iterations; it++) {
    // run across the top
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    top += 1;
    if (top > bottom) {
      // this is the last stretch on a spiral wider than it is tall or equal on both sides. Stop.
      break;
    }
    // run down the side
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }
    right -= 1;
    if (right < left) {
      // this is the last stretch on a spiral taller than it is wide. Stop.
      break;
    }
    // run across the bottom
    for (let i = right; i >= left; i--) {
      result.push(matrix[bottom][i]);
    }
    bottom -= 1;
    // run up the other side
    for (let i = bottom; i >= top; i--) {
      result.push(matrix[i][left])
    }
    left += 1;
  }
  return result;
};

console.log(spiralOrder([[7], [9], [6]]));
console.log(spiralOrder([[1, 2]]));
console.log(spiralOrder([[ 1,  2,  3,  4, 5],
                         [12, 13, 14, 15, 6],
                         [11, 10,  9,  8, 7]]));
console.log(spiralOrder([[ 1,  2, 3],
                         [12, 13, 4],
                         [11, 14, 5],
                         [10, 15, 6],
                         [ 9,  8, 7]]));
console.log(spiralOrder([[ 1,  2,  3,  4, 5],
                         [16, 17, 18, 19, 6],
                         [15, 24, 25, 20, 7],
                         [14, 23, 22, 21, 8],
                         [13, 12, 11, 10, 9]]));
