/*
A string S of lowercase letters is given. We want to partition this string into as many parts as possible so that each letter appears in at most one part, and return a list of integers representing the size of these parts.
 */

function partitionLabels(s) {
  const letters = {};
  for (let i = 0; i < s.length; i++) {
    letters[s.charAt(i)] = i;
  }
  let first = 0;
  let last = 0;
  const parts = [];
  for (let i = 0; i < s.length; i++) {
    if (letters[s.charAt(i)] > last) {
      last = letters[s.charAt(i)];
    }
    if (last === i) {
      parts.push(last - first + 1);
      first = last + 1;
    }
  }
  return parts;
}




/*****
 * This was my first attempt, without looking up any information about how to handle this problem.
 *
 *****/
/**
 * @param {string} s
 * @return {number[]}
 */
function partitionLabelsFirst(s) {
  // idea: Make a map of all characters and their locations,
  // then use that map to decide how we can partition the list
  const letters = {};
  const partitions = [];
  for (let i = 0; i < s.length; i++) {
    if (letters[s.charAt(i)]) {
      letters[s.charAt(i)].push(i);
    } else {
      letters[s.charAt(i)] = [i];
    }
  }
  for (let i = 0; i < s.length; i++) {
    const c = s.charAt(i);
    if (letters[c].length === 1) {
      partitions.push(1);
    } else {
      const end = checkPartition(i, letters[c][letters[c].length - 1], s, letters);
      partitions.push((end - i) + 1);
      i = end;
    }
  }
  return partitions;
}

function checkPartition(start, end, s, letters) {
  let ourEnd = end;
  for (let i = start; i <= ourEnd; i++) {
    const locations = letters[s.charAt(i)];
    if (locations.length > 1) {
      const last = locations[locations.length - 1];
      if (!(start < last && last <= ourEnd)) {
        ourEnd = locations[locations.length - 1];
      }
    }
  }
  return ourEnd;
}

console.log(partitionLabels('ababcbacadefegdehijhklij'));
