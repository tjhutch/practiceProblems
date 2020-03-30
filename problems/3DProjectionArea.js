/*
On a N * N grid, we place some 1 * 1 * 1 cubes that are axis-aligned with the x, y, and z axes.
Each value v = grid[i][j] represents a tower of v cubes placed on top of grid cell (i, j).
Now we view the projection of these cubes onto the xy, yz, and zx planes.
A projection is like a shadow, that maps our 3 dimensional figure to a 2 dimensional plane.
Here, we are viewing the "shadow" when looking at the cubes from the top, the front, and the side.
Return the total area of all three projections.
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
function projectionArea(grid) {
  let xTotal = 0; // area when viewing from x axis
  // x total will be the sum of all max columns
  let yTotal = 0; // area when viewing from y axis
  // y total will be the sum of all max rows
  let zTotal = 0; // area when viewing from above
  // z total will be total number of columns

  for (let x = 0; x < grid.length; x++) {
    let colMax = 0;
    let rowMax = 0;
    for (let y = 0; y < grid[x].length; y++) {
      if (grid[x][y] > 0) {
        zTotal++;
      }
      if (grid[x][y] > colMax) {
        colMax = grid[x][y];
      }
      if (grid[y][x] > rowMax) {
        rowMax = grid[y][x];
      }
    }
    yTotal += colMax;
    xTotal += rowMax;
  }
  return xTotal + yTotal + zTotal;
}

