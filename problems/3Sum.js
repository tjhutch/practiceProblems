// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum (nums) {
  nums.sort((num1, num2) => num1 - num2);
  const solutions = [];
  for (let i = 0; i < nums.length - 2; i++) {
    // always check 0, but skip if we just checked the same number
    if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
      // look for a compliment pair of nums[high] + nums[low]
      let low = i + 1;
      let high = nums.length - 1;
      const compliment = 0 - nums[i];
      while (high > low) {
        if (nums[low] + nums[high] === compliment) {
          solutions.push([nums[i], nums[low], nums[high]]);
          // push high/low to avoid duplicates
          while (nums[low] === nums[low + 1]) {
            low++;
          }
          while (nums[high] === nums[high - 1]) {
            high--;
          }
          low++;
          high--;
        } else if (nums[high] + nums[low] < compliment) {
          // we were too low, need to find a larger value for low
          low++;
        } else {
          // we were too high, need to find a smaller value for high
          high--;
        }
      }
    }
  }
  return solutions;
}

console.log(threeSum([-1,-1,0,1]));