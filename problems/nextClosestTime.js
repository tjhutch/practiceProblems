const maxes = [2, 9, 5, 9];

/**
 * https://leetcode.com/problems/next-closest-time/description/
 * @param {string} time
 * @return {string}
 */
var nextClosestTime = function(time) {
  const regex = /(\d):(\d)/;
  // split the time into characters
  let chars = time.split(regex);
  // create a set with the characters. This will remove duplicates
  const digits = new Set(time.split(regex).sort());
  const minVal = [...digits][0];
  let found = false;
  for(let i = chars.length - 1; i > 0; i--) {
    // get the max value for this spot. Special case is when 1st digit is '2' the 2nd can only be 0-3
    let max = maxes[i];
    if (i === 1 && chars[0] === '2') {
      max = 3;
    }
    for(let digit of digits.values()) {
      // if we have a higher digit which is valid, replace it and we're done.
      if (digit <= max && digit > chars[i]) {
        chars[i] = digit;
        found = true;
        break;
      }
    }
    if (found) {
      break;
    }
    // if we made it here, replace the current spot with the minimum value
    chars[i] = minVal;
  }
  return `${chars[0]}${chars[1]}:${chars[2]}${chars[3]}`
};

console.log(nextClosestTime('12:22'));
console.log(nextClosestTime('18:42'));
console.log(nextClosestTime('00:59'));
console.log(nextClosestTime('23:59'));
