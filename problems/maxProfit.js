/*
  We have jobs: difficulty[i] is the difficulty of the ith job, and profit[i] is the profit of the ith job.
  Now we have some workers. worker[i] is the ability of the ith worker, which means that this worker can only complete a job with difficulty at most worker[i].
  Every worker can be assigned at most one job, but one job can be completed multiple times.
  For example, if 3 people attempt the same job that pays $1, then the total profit will be $3.  If a worker cannot complete any job, his profit is $0.
  What is the most profit we can make?
 */

/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
function maxProfitAssignment(difficulty, profit, worker) {
  const maxProfitPerDifficulty = [];
  // create array where each index contains the max profit for that difficulty
  // to start, fill in all the existing difficulty/profit pairs, taking the highest if there are duplicates
  for (let i = 0; i < difficulty.length; i++) {
    const oldVal = maxProfitPerDifficulty[difficulty[i]] ? maxProfitPerDifficulty[difficulty[i]] : 0;
    maxProfitPerDifficulty[difficulty[i]] = profit[i] > oldVal ? profit[i] : oldVal;
  }
  // fill in the rest of the array with the previous values
  if (!maxProfitPerDifficulty[0]) {
    maxProfitPerDifficulty[0] = 0;
  }
  for (let i = 1; i < maxProfitPerDifficulty.length; i++) {
    const previousProfit = maxProfitPerDifficulty[i - 1];
    const currentProfit = maxProfitPerDifficulty[i] ? maxProfitPerDifficulty[i] : 0;
    maxProfitPerDifficulty[i] = previousProfit > currentProfit ? previousProfit : currentProfit;
  }
  let total = 0;
  for (let i = 0; i < worker.length; i++) {
    if (worker[i] >= maxProfitPerDifficulty.length) {
      total += maxProfitPerDifficulty[maxProfitPerDifficulty.length - 1];
    } else {
      total += maxProfitPerDifficulty[worker[i]];
    }
  }
  return total;
}

console.log(maxProfitAssignment([64,88,97],
  [53,86,89],
  [98,11,6]));
