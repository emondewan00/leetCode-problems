/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let prev = null;
  let currentNode = head;
  let next = null;

  while (currentNode) {
    next = currentNode.next;// store next node
    currentNode.next = prev; //2>1 
    prev = currentNode; // store prev node 1
    currentNode = next; // 3 
  }
  return prev;
};
// @lc code=end
