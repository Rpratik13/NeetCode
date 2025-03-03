class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function reverseList(head) {
  let prev = null;
  let current = head;

  while (current) {
    let temp = current.next;
    current.next = prev;
    prev = current;
    current = temp;
  }

  return prev;
}

const values = [0, 1, 2, 3];
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

console.log(reverseList(head));
