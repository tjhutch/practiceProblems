// Given a positive integer n, find the least number of perfect square numbers (for example, 1, 4, 9, 16, ...) which sum to n.

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  if (!n || Math.sqrt(n) % 1 === 0) {
    return 1;
  }
  let sum = sumOfSquares(n);
  if (sum) {
    return sum;
  }

  let temp = n - 1;
  let count = 0;

  while (temp > 0) {
    if (!(Math.sqrt(temp) % 1 === 0)) {
      temp -= 1;
    } else {
      count += 1;
      n -= temp;
      temp = n;
      sum = sumOfSquares(n);
      if (sum) {
        count += sum;
        temp = 0;
      }
    }
  }
  return count;
};

const sumOfSquares = function(n) {
  let temp = n -1;
  let multiplier = 2;
  while (temp > 1) {
    if (!(Math.sqrt(temp) % 1 === 0)) {
      temp -= 1;
    } else {
      while (temp * multiplier < n) {
        multiplier += 1;
      }
      if (temp * multiplier === n) {
        return multiplier;
      }
      temp -= 1;
      multiplier = 2;
    }
  }
  return 0;
};

console.log(numSquares(19));