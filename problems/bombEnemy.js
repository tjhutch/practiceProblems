// Given a 2D grid, each cell is either a wall 'W', an enemy 'E' or empty '0' (the number zero), return the maximum
// enemies you can kill using one bomb.The bomb kills all the enemies in the same row and column from the planted point
// until it hits the wall since the wall is too strong to be destroyed. Note that you can only put the bomb at an empty cell.

// For the given grid
//
// 0 E 0 0
// E 0 W E
// 0 E 0 0
//
// return 3. (Placing a bomb at (1,1) kills 3 enemies)

/**
 * @param {character[][]} grid
 * @return {number}
 */
var maxKilledEnemies = function(grid) {
  if (!grid || !grid.length || !grid[0].length) {
    return 0;
  }
  let enemiesDestroyed = 0;
  let max = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '0') {
        enemiesDestroyed = checkDestruction(grid, i, j);
        if (enemiesDestroyed > max) {
          max = enemiesDestroyed;
        }
      }
    }
  }
  return max;
};


const checkDestruction = function(grid, x, y) {
  let count = 0;
  // check up!
  for (let i = x - 1; i >= 0 && grid[i][y] !== 'W'; i--) {
    if (grid[i][y] === 'E') {
      count += 1;
    }
  }
  // check down!
  for (let i = x + 1; i < grid.length && grid[i][y] !== 'W'; i++) {
    if (grid[i][y] === 'E') {
      count += 1;
    }
  }
  // check left!
  for (let j = y - 1; j >= 0 && grid[x][j] !== 'W'; j--) {
    if (grid[x][j] === 'E') {
      count += 1;
    }
  }
  // check right!
  for (let j = y + 1; j < grid[0].length && grid[x][j] !== 'W'; j++) {
    if (grid[x][j] === 'E') {
      count += 1;
    }
  }
  return count;
};

function strToGrid(s) {
  const grid = [];
  let j = 0;
  let k = 0;
  let row = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ',' || s[i] === '\n') {
      grid[k] = row;
      j = 0;
      k += 1;
      row = [];
    } else {
      row[j] = s[i].toUpperCase();
      j += 1;
    }
  }
  grid[k] = row;
  return grid;
}


let grid = strToGrid('0000w000\n' +
  '0ee0w000\n' +
  '0ee0w0e0\n' +
  '0wwww0e0\n' +
  'eee000w0');

console.log(maxKilledEnemies(grid));