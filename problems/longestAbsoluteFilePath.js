/**
 * @param {string} input
 * @return {number}
 */
function lengthLongestPath(input) {
  if (!input) {
    return 0;
  }
  // split input into tokens (file/dir names & symbols 'n' and 't' for file structure)
  const splitInput = input.split(/\n((?:\t|    )+)?/); // alternative (maybe): /\n((?:\t|((?!\t) )+))?/
  if (splitInput.length === 1) {
    if (splitInput[0].includes('.')) {
      return input.length;
    } else {
      return 0;
    }
  }
  let level = 0;
  let longestFilePath = '';
  let path = [];
  let leftover = '';
  for (let i = 0; i < splitInput.length; i++) {
    let val = splitInput[i];
    if (!val || val === 'undefined') {
      level = 0;
      continue;
    }
    if (val.startsWith('\t')) {
      // edge case: spaces after max allowable indentation should be considered part of next file name
      if (!/^\t+$/.test(val)) {
        leftover = val.slice(val.indexOf(' '));
        level = val.slice(0, val.indexOf(' ')).length;
      } else {
        level = val.length;
      }
      continue;
    } else if (val.startsWith('    ')) {
      const levelTemp = val.length / 4;
      if (levelTemp > level + 1) {
        level += 1;
        leftover = val.slice(4);
      } else {
        level = levelTemp;
      }
      continue;
    }
    if (leftover.length) {
      val = leftover + val;
      leftover = '';
    }
    if (val.includes('.')) {
      let runningTotal = path[0];
      for (let j = 1; j < level; j++) {
        runningTotal += `/${path[j]}`;
      }
      runningTotal += `/${val}`;
      if (runningTotal.length > longestFilePath.length) {
        longestFilePath = runningTotal;
      }
    } else {
      path[level] = val;
    }
  }
  console.log(longestFilePath);
  return longestFilePath.length;
}


//const case1 = 'dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext';
//console.log(lengthLongestPath(case1));
const case2 = 'a\n\tb.txt\na2\n\tb2.txt';
console.log(case2);
console.log(lengthLongestPath(case2));
const case3 = 'dir\n\t        file.txt\n\tfile2.txt';
console.log(lengthLongestPath(case3));
