const i = [];
let currentArr = 0;
let arrs = [];

/**
 * @constructor
 * @param {[number []]} args
 */
var ZigzagIterator = function ZigzagIterator(...args) {
  for (let j = 0; j < args.length; j++) {
    if (args[j].length) {
      i[j] = 0;
      arrs[j] = args[j];
    } else {
      args.splice(j, 1);
      j -= 1;
    }
  }
};

/**
 * @this ZigzagIterator
 * @returns {boolean}
 */
ZigzagIterator.prototype.hasNext = function hasNext() {
  return arrs.length > 0;
};

/**
 * @this ZigzagIterator
 * @returns {number}
 */
ZigzagIterator.prototype.next = function next() {
  const ret = arrs[currentArr][i[currentArr]];
  i[currentArr] += 1;
  if (i[currentArr] === arrs[currentArr].length) {
    arrs.splice(currentArr, 1);
    i.splice(currentArr, 1);
    if (currentArr === arrs.length) {
      currentArr = 0;
    }
  } else {
    if (currentArr === arrs.length - 1) {
      currentArr = 0;
    } else {
      currentArr++;
    }
  }

  return ret;
};

/**
 * Your ZigzagIterator will be called like this:
 * var i = new ZigzagIterator(v1, v2), a = [];
 * while (i.hasNext()) a.push(i.next());
 */

const v1 = [];
const v2 = [5, 6, 7, 8];
//const v3 = [9, 10, 11];
const it1 = new ZigzagIterator(v1, v2);
let a = [];
while (it1.hasNext()) a.push(it1.next());
console.log(a);
