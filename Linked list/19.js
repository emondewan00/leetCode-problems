// 19. Remove Nth Node From End of List

function removeNthFromEnd(head, n) {
  let dummy = { next: head };
  let first = dummy;
  let second = dummy;

  for (let i = 0; i <= n; i++) {
    first = first.next;
  }

  while (first !== null) {
    first = first.next;
    second = second.next;
  }

  second.next = second.next.next;

  return dummy.next;
}
