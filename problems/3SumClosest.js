// Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest
// to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function threeSumClosest (nums, target) {
  nums.sort((num1, num2) => num1 - num2);
  let closest = 0;
  let minDistance = null;
  for (let i = 0; i < nums.length - 2; i++) {
    // always check 0, otherwise skip if we just checked the same number
    if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
      let low = i + 1;
      let high = nums.length - 1;
      while (high > low) {
        // see how close we got to target
        const sum = nums[low] + nums[high] + nums[i];
        const distance = sum - target;
        const absDistance = Math.abs(distance);
        // fill in minDistance if null
        if (minDistance === null) {
          minDistance = absDistance;
          closest = sum;
        } else if (absDistance < minDistance) { // check if this sum is closer
          minDistance = absDistance;
          closest = sum;
        }
        if (distance === 0) {
          // we got an exact match!
          return sum;
        } else if (distance < 0) {
          // we were too low, need to find a larger value for low
          low++;
        } else {
          // we were too high, need to find a smaller value for high
          high--;
        }
      }
    }
  }
  return closest;
}

console.log(threeSumClosest([0,2,1,-3], 1));