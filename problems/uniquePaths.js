/*
A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).
The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).
How many possible unique paths are there?
 */

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
function uniquePaths(m, n) {
  const moves = [];
  for (let i = 0; i < n; i++) {
    moves[i] = [];
    for (let j = 0; j < m; j++) {
      if (i === 0 && j === 0) {
        moves[0][0] = 1;
        continue;
      }
      let count = 0;
      if (j > 0) {
        count += moves[i][j - 1];
      }
      if (i > 0) {
        count += moves[i - 1][j];
      }
      moves[i][j] = count;
    }
  }
  return moves[n - 1][m - 1];
}

console.log(uniquePaths(7, 3));
