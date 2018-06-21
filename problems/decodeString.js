/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  if (!s) {
    return '';
  }
  let stack = [];
  let subStart = 0;
  let numStart = -1;
  let repeat = 0;
  let result = '';
  let temp = '';
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    // start of sub-string OR sub-string of sub-string
    if (char === '[') {
      // if this is the first open, start a new sub string
      if (!stack.length) {
        subStart = i + 1;
        repeat = parseInt(s.substring(numStart, i));
        numStart = -1;
      }
      stack.push(char);
    } else if (char === ']') {
      // close of sub-string OR sub-string of sub-string
      stack.pop();
      if (!stack.length) {
        temp = decodeString(s.substring(subStart, i));
        for (let j = 0; j < repeat; j++) {
          result += temp;
        }
      }
    } else if (isNaN(parseInt(char))) {
      // not currently finding a substring
      if (!stack.length) {
        result += char;
      }
    } else {
      // denote the beginning of the repeat count if not already doing it or searching a sub-string
      if (!stack.length && numStart === -1) {
        numStart = i;
      }
    }
  }
  return result;
};

console.log(decodeString('1[a2[b3[c4[d]]]]'));
console.log(decodeString('3[a2[c]]'));
console.log(decodeString('2[abc]3[cd]ef'));
console.log(decodeString('z2[abc]3[cd]ef'));
console.log(decodeString('10[a]'));