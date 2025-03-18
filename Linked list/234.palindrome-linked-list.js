/*
 * @lc app=leetcode id=234 lang=javascript
 *
 * [234] Palindrome Linked List
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
 * @return {boolean}
 */
var isPalindrome = function (head) {
  const arr = [];

  let currentNode = head;
  while (currentNode) {
    arr.push(currentNode.val);
    currentNode = currentNode.next;
  }
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    if (arr[left] === arr[right]) {
      left++;
      right--;
      continue;
    } else {
      return false;
    }
  }
  return true;
};
// @lc code=end
