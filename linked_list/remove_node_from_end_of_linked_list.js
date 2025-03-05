function removeNthFromEnd(head, n) {
  let fast = head;
  let slow = head;

  for (let i = 0; i <= n; i++) {
    if (!fast) {
      return slow.next;
    }

    fast = fast.next;
  }

  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }

  console.log(slow);

  slow.next = slow.next ? slow.next.next : null;

  return head;
}

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

const values = [5];
let current;
let head;

values.forEach((value) => {
  if (!current) {
    current = new ListNode(value);
    head = current;
  } else {
    current.next = new ListNode(value);
    current = current.next;
  }
});

console.log(removeNthFromEnd(head, 1));
