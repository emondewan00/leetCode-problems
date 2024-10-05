// 2095. Delete the Middle Node of a Linked List

var deleteMiddle = function (head) {
  if (head === null || head.next === null) {
    return null;
  }

  let slow = head;
  let fast = head;
  let prev = null;
  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  prev.next = slow.next;

  return head;
};
