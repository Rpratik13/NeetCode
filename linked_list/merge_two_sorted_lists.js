function mergeTwoLists(list1, list2) {
  const dummy = { val: 0, next: null };
  let head = dummy;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      head.next = list1;
      list1 = list1.next;
    } else {
      head.next = list2;
      list2 = list2.next;
    }

    head = head.next;
  }

  head.next = list1 ? list1 : list2;

  return dummy.next;
}
