class ListNode {
  constructor(val = 0, next = null, random = null) {
    this.val = val;
    this.next = next;
    this.random = random;
  }
}

function copyRandomList(head) {
  const map = new Map();

  if (!head) {
    return head;
  }

  let curr = head;

  while (curr) {
    map.set(curr, new ListNode(curr.val));
    curr = curr.next;
  }

  curr = head;

  while (curr) {
    let node = map.get(curr);
    node.next = map.get(curr.next) || null;
    node.random = map.get(curr.random) || null;

    curr = curr.next;
  }

  return map.get(head);
}

const values = [
  [3, null],
  [7, 3],
  [4, 0],
  [5, 1],
];
let current;
let head;

values.forEach((value) => {
  if (!current) {
    current = new ListNode(value[0], null, value[1]);
    head = current;
  } else {
    current.next = new ListNode(value[0], null, value[1]);
    current = current.next;
  }
});

// console.log(head);

console.log(copyRandomList(head));
