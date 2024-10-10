// 61. Rotate List

var rotateRight = function (head, k) {
  if (!head || !head.next || k === 0) return head;

  // Step 1: Calculate the length of the list
  let length = 1;
  let tail = head;
  while (tail.next) {
    tail = tail.next;
    length++;
  }

  // Step 2: Make the list circular
  tail.next = head;

  // Step 3: Find the new tail position after rotation
  let rotateSteps = length - (k % length);
  let newTail = tail;
  while (rotateSteps--) {
    newTail = newTail.next;
  }

  // Step 4: Break the circular list to form the rotated list
  const newHead = newTail.next;
  newTail.next = null;

  return newHead;
};
