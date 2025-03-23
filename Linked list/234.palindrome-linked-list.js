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
var isPalindrome1 = function (head) {
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

const isPalindrome = function (head) {
  if (!head || !head.next) return true; // Empty or single-node list is a palindrome

  let reverse = null;
  let slow = head;
  let fast = head;

  // Find middle while reversing the first half
  while (fast && fast.next) {
    fast = fast.next.next; // Move fast pointer twice

    // Reverse the first half
    let next = slow.next;
    slow.next = reverse;
    reverse = slow;
    slow = next;
  }

  // If the list is odd-length, move slow one step further
  if (fast) {
    slow = slow.next;
  }

  // Compare reversed first half with the second half
  while (reverse && slow) {
    if (reverse.val !== slow.val) return false;
    reverse = reverse.next;
    slow = slow.next;
  }

  return true;
};

// @lc code=end
