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
  // we will save a running sum of the length of each folder in the current path here
  let path = [];
  let leftover = '';
  for (let i = 0; i < splitInput.length; i++) {
    let val = splitInput[i];
    if (!val || val === 'undefined') {
      level = 0;
      continue;
    }
    // case for using tabs
    if (val.startsWith('\t')) {
      // edge case: spaces after a tab character should be considered part of next file name
      if (!/^\t+$/.test(val)) {
        leftover = val.slice(val.indexOf(' '));
        level = val.slice(0, val.indexOf(' ')).length;
      } else {
        level = val.length;
      }
      continue;
      // case for using spaces
    } else if (val.startsWith('    ')) {
      const levelTemp = val.length / 4;
      // if there are more spaces than there should be, they're part of a filename. save in leftover
      if (levelTemp > level + 1) {
        level += 1;
        leftover = val.slice(4);
      } else {
        level = levelTemp;
      }
      continue;
    }
    // if we have leftover spaces, prepend them
    if (leftover.length) {
      val = leftover + val;
      leftover = '';
    }
    // only check length of complete files (will have a suffix)
    if (val.includes('.')) {
      let runningTotal = path[0];
      // add all the slashes needed for the current file level
      for (let j = 1; j < level; j++) {
        runningTotal += `/${path[j]}`;
      }
      runningTotal += `/${val}`;
      // if the length is longer, we have a new longest file path
      if (runningTotal.length > longestFilePath.length) {
        longestFilePath = runningTotal;
      }
    } else {
      // if it's a folder, save it's length in the path
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
