/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// in numbers format
(l1 = 243), (l2 = 564);

// let l1 = [2, 4, 3]; // This is NOT a linked list
// let l2 = [5, 6, 4];

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}
var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  const dummyHead = new ListNode(0);
  let current = dummyHead;

  while (l1 !== null || l2 !== null || carry > 0) {
    const val1 = l1 !== null ? l1.val : 0;
    const val2 = l2 !== null ? l2.val : 0;

    const newNode = new ListNode((val1 + val2 + carry) % 10);
    console.log(newNode);
    current.next = newNode;
    current = current.next;

    if (l1 !== null) l1 = l1.next;
    if (l2 !== null) l2 = l2.next;

    //
    carry = Math.floor((val1 + val2 + carry) / 10);
    const sum = val1 + val2 + carry;
    console.log("sum", sum);

    return sum;
  }

  return dummyHead.next;
  // const
};
// @lc code=end

console.log("two-num: ", addTwoNumbers(l1, l2));

// The time complexity of this solution is O(max(m, n)), where m and n are the lengths of the two linked lists. This is because we traverse each list once.
// The space complexity is O(max(m, n)) as well, due to the space needed for the output linked list.

/*

  Arrays to Linked Lists

*/

let arr1 = [2, 4, 3]; // This is NOT a linked list
let arr2 = [5, 6, 4];

// so i need to convert to linked lists first
function arrayToList(arr) {
  let dummyNode = new ListNode(0); // intializing a dummy node to give [0] as the first node
  let current = dummyNode; // this serves as ( pointer to traverse or build/construct/link the new list) or add new nodes to the list

  for (let num of arr) {
    //so i iterate through each number in the array
    let newNode = new ListNode(num); // create a new node with the current number and link it to the 'next' of the current node Create ======= [2|→], [4|→], [3|→]
    current.next = newNode; // Link current node to new node ===== [0|→][2|→], [4|→], [3|→]. basically connecting the new node to the 'next' of the current node (conect)
    current = current.next; // move the current pointer to the new node.  basically advancing the current pointer to the newly added node so that we can continue building the list in the next iteration
  }
  return dummyNode.next;
}

function listToArray(node) {
  let arr = [];
  while (node) {
    arr.push(node.val);
    node = node.next;
  }
  return arr;
}

// so the first node is a dummy node, and the actual head of the linked list is dummy.next
// this is because the dummy node is just a placeholder to make it easier to build the list, and we don't want to include it in the final output

// which is it [0] -> [2] -> [4] -> [3] -> null

let l3 = arrayToList([2, 4, 3]);
let l4 = arrayToList([5, 6, 4]);

console.log(l3);
console.log(l4);
