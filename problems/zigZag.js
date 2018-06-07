/**
 * @constructor
 * @param {[number []]} args
 */
var ZigzagIterator = function ZigzagIterator(...args) {const i = [];
  this.currentArr = 0;
  this.arrs = [];
  this.i = [];
  for (let j = 0; j < args.length; j++) {
    if (args[j].length) {
      this.i[j] = 0;
      this.arrs[j] = args[j];
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
  return this.arrs.length > 0;
};

/**
 * @this ZigzagIterator
 * @returns {number}
 */
ZigzagIterator.prototype.next = function next() {
  const ret = this.arrs[this.currentArr][this.i[this.currentArr]];
  this.i[this.currentArr] += 1;
  if (this.i[this.currentArr] === this.arrs[this.currentArr].length) {
    this.arrs.splice(this.currentArr, 1);
    this.i.splice(this.currentArr, 1);
    if (this.currentArr === this.arrs.length) {
      this.currentArr = 0;
    }
  } else {
    if (this.currentArr === this.arrs.length - 1) {
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
//const v3 = [9, 10, 11];
const it1 = new ZigzagIterator(v1, v2);
let a = [];
while (it1.hasNext()) a.push(it1.next());
console.log(a);
