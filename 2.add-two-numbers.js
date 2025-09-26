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
// (l1 = 243), (l2 = 564);

let l1 = [2, 4, 3]; // This is NOT a linked list
let l2 = [5, 6, 4];

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}
var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  let dummyHead = new ListNode(0); // dummy node  start the list from [0|→ null]
  let current = dummyHead; //  current pointer to build the new list starting from the dummy node which is [0|→ null]

  while (l1 !== null || l2 !== null || carry > 0) {
    // continue if either list has nodes left or there's a carry
    let val1 = l1 !== null ? l1.val : 0; //
    let val2 = l2 !== null ? l2.val : 0;

    let sum = val1 + val2 + carry;
    carry = Math.floor(sum / 10); // calculate carryover for next digit
    let digit = sum % 10; // current digit to store in the node

    // create new node for this digit
    current.next = new ListNode(digit); // link new node to the 'next' of the current node

    // move pointers
    current = current.next;
    if (l1 !== null) l1 = l1.next;
    if (l2 !== null) l2 = l2.next;
  }

  return dummyHead.next; // skip dummy
};
// @lc code=end

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
  let current = dummyNode; // it is new Node(0) WHICH HAVE .next = null, so current = [0|→ null] so current is pointing to the dummy node

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
    arr.push(node.val); // push the current node's value to the array
    node = node.next; // move to the next node
  }
  return arr;
}

// so the first node is a dummy node, and the actual head of the linked list is dummy.next
// this is because the dummy node is just a placeholder to make it easier to build the list, and we don't want to include it in the final output

// which is it [0] -> [2] -> [4] -> [3] -> null

let l3 = arrayToList([2, 4, 3]);
let l4 = arrayToList([5, 6, 4]);

// console.log("l3: ", listToArray(l3));
// console.log("l4: ", listToArray(l4));

console.log("node format: ", addTwoNumbers(l3, l4));
console.log("node to array format: ", listToArray(addTwoNumbers(l3, l4)));

// so if the value is in integer format

// we will  convert it to linked list first
// then we will add the two linked lists
// then we will convert the result back to integer format

// so the final output should be in integer format

// (l1 = 342), (l2 = 465); output: 807

// (l1 = 0), (l2 = 0); output: 0

// (l1 = 9999999), (l2 = 9999); output: 10009998

// (l1 = 2 -> 4 -> 3), (l2 = 5 -> 6 -> 4); output: 7 -> 0 -> 8

// (l1 = 0), (l2 = 0); output: 0

// (l1 = 9 -> 9 -> 9 -> 9 -> 9 -> 9 -> 9), (l2 = 9 -> 9 -> 9 -> 9); output: 8 -> 9 -> 9 -> 9 -> 0 -> 0 -> 0 -> 1
