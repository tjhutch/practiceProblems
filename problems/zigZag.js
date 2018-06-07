/**
 * @constructor
 * @param {[number []]} args
 */
var ZigzagIterator = function ZigzagIterator(...args) {
  this.currentArr = 0;
  this.arrs = [];
  this.i = [];
  for (let j = 0; j < args.length; j++) {
    // if the given array is empty, delete it and move on
    if (args[j].length) {
      this.i[j] = 0;
      this.arrs[j] = args[j];
    } else {
      args.splice(j, 1);
      // have to adjust for the new length of the args array after delete
      j -= 1;
    }
  }
};

/**
 * @this ZigzagIterator
 * @returns {boolean}
 */
ZigzagIterator.prototype.hasNext = function hasNext() {
  // we're done when we've deleted all arrays
  return this.arrs.length > 0;
};

/**
 * @this ZigzagIterator
 * @returns {number}
 */
ZigzagIterator.prototype.next = function next() {
  // grab the next item, the increment. Reset to 0 if we've gone through all arrays
  const ret = this.arrs[this.currentArr][this.i[this.currentArr]];
  this.i[this.currentArr] += 1;
  if (this.i[this.currentArr] === this.arrs[this.currentArr].length) {
    // delete the current array if it's empty
    this.arrs.splice(this.currentArr, 1);
    this.i.splice(this.currentArr, 1);
    if (this.currentArr === this.arrs.length) {
      // if it was the last array in the list, reset to 0
      this.currentArr = 0;
    }
  } else {
    if (this.currentArr === this.arrs.length - 1) {
      // if we just hit the last array, reset to 0
      this.currentArr = 0;
    } else {
      this.currentArr++;
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
const v3 = [9, 10, 11];
const it1 = new ZigzagIterator(v1, v2, v3);
let a = [];
while (it1.hasNext()) a.push(it1.next());
console.log(a);
