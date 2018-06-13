/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return [Number]
 */
var addTwoNumbers = function(l1, l2) {
  let num = l1.val + l2.val;
  let remainder = num >= 10 ? 1 : 0;
  let result = [num % 10];
  while (l1.next && l2.next) {
    l1 = l1.next;
    l2 = l2.next;
    num = l1.val + l2.val + remainder;
    result.push(num % 10);
    remainder = num >= 10 ? 1 : 0;
  }
  while (l1.next) {
    l1 = l1.next;
    num = l1.val + remainder;
    result.push(num % 10);
    remainder = num >= 10 ? 1 : 0;
  }
  while (l2.next) {
    l2 = l2.next;
    num = l2.val + remainder;
    result.push(num % 10);
    remainder = num >= 10 ? 1 : 0;
  }
  if (remainder > 0) {
    result.push(remainder);
  }

  return result;
};

const LLFromArray = function(arr) {
  let list = {
    val: arr.splice(0, 1)[0],
  };
  let l = list;
  while (arr.length) {
    l.next = {
      val: arr.splice(0, 1)[0],
    };
    l = l.next;
  }
  return list;
};

let list1 = [3, 7]; // [2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,9];
let list2 = [9, 2]; // [5,6,4,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,9,9,9,9];

const l1 = LLFromArray(list1);
const l2 = LLFromArray(list2);
console.log(addTwoNumbers(l1, l2));
