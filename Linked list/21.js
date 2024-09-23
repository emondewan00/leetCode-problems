// 21. Merge Two Sorted Lists

var mergeTwoLists = function (list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;
  let lists = {
    data: 0,
    next: null,
  };
  let currentNode = lists;

  while (list1 && list2) {
    if (list1.data < list2.data) {
      currentNode.next = list1;
      list1 = list1.next;
    } else {
      currentNode.next = list2;
      list2 = list2.next;
    }
    currentNode = currentNode.next;
  }

  if (list1) {
    currentNode.next = list1;
  } else if (list2) {
    currentNode.next = list2;
  }
  return lists.next;
};
