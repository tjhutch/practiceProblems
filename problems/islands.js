/*
  Given a 2d grid map of '1's (land) and '0's (water), count the number of islands.
  An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
  You may assume all four edges of the grid are all surrounded by water.
 */

/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = function (grid) {
  let count = 0;

  for(let i = 0; i < grid.length; i++) {
    for(let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        visitNeighbors(i, j, grid);
        count += 1;
      }
    }
  }
  return count;
};

const visitNeighbors = function(i, j, grid) {
  // exit condition - current location is 0
  if (grid[i][j] === '0') {
    return;
  }
  grid[i][j] = '0';
  // check left
  if (j > 0) {
    visitNeighbors(i, j - 1, grid);
  }
  // check up
  if (i > 0) {
    visitNeighbors(i - 1, j, grid);
  }
  // check right
  if (j < grid[i].length - 1) {
    visitNeighbors(i, j + 1, grid);
  }
  // check down
  if (i < grid.length - 1) {
    visitNeighbors(i + 1, j, grid);
  }
};


let grid = [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]];
console.log(numIslands(grid));
