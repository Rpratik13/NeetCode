class ListNode {
  /**
   *
   * @param {number} val
   * @param {ListNode} next
   */
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

/**
 *
 * @param {ListNode} node
 * @param {number} k
 */
function getKthNode(node, k) {
  let current = node;
  let kth = k;

  while (current && kth) {
    current = current.next;
    kth--;
  }

  return current;
}

/**
 *
 * @param {ListNode} head
 * @param {number} k
 */
function reverseKGroup(head, k) {
  const dummy = new ListNode(0, head);
  let groupPrev = dummy;

  while (true) {
    const kthNode = getKthNode(groupPrev, k);
    const kthNext = kthNode.next;

    if (!kthNode) {
      break;
    }

    const groupStart = groupPrev.next;
    let current = groupPrev.next;
    let prev = null;

    while (current !== kthNext) {
      const next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    groupPrev.next = kthNode;
    groupStart.next = kthNext;
    groupPrev = groupStart;
  }

  return dummy.next;
}

function print(head) {
  const output = [];

  let current = head;

  while (current) {
    output.push(current.val);
    current = current.next;
  }

  console.log(output.join(', '));
}

const values = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const dummy = new ListNode();
let current = dummy;

values.forEach((value) => {
  current.next = new ListNode(value);
  current = current.next;
});

const reversed = reverseKGroup(dummy.next, 2);

print(reversed);
