// 2181. Merge Nodes in Between Zeros

function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

var mergeNodes = function (head) {
  let dummy = new ListNode();
  let curr = dummy;
  let sum = 0;

  head = head.next;

  while (head !== null) {
    if (head.val !== 0) {
      sum += head.val;
    } else {
      curr.next = new ListNode(sum);
      curr = curr.next;
      sum = 0;
    }
    head = head.next;
  }

  return dummy.next;
};
