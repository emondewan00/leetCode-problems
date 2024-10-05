// 83. Remove Duplicates from Sorted List

function deleteDuplicates(list) {
  if (list === null || list.next === null) return list;
  let current = list;
  while (current.next !== null) {
    if (current.next.data === current.data) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return list;
}
