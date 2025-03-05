function reorderList(head) {
  let slow = head;
  let fast = head.next;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let second = slow.next;
  let prev = null;
  slow.next = null;

  while (second) {
    let temp = second.next;
    second.next = prev;
    prev = second;
    second = temp;
  }

  let first = head;
  second = prev;

  while (second) {
    let temp1 = first.next;
    let temp2 = second.next;
    first.next = second;
    second.next = temp1;
    first = temp1;
    second = temp2;
  }
}

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

const values = [0, 1, 2, 3, 4, 5, 6];
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

console.log(reorderList(head));
