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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
function mergeKLists(lists) {
  const output = new ListNode();
  let current = output;

  while (lists.some((item) => item)) {
    let min = Infinity;
    let index = -1;

    for (let i = 0; i < lists.length; i++) {
      if (!lists[i]) {
        continue;
      }

      if (lists[i].val < min) {
        min = lists[i].val;
        index = i;
      }
    }

    current.next = new ListNode(min);
    current = current.next;
    lists[index] = lists[index].next;
  }

  return output.next;
}

const values = [
  [1, 2, 4],
  [1, 3, 5],
  [3, 6],
];

const input = [];

for (let i of values) {
  const list = new ListNode();
  let current = list;

  for (let j of i) {
    current.next = new ListNode(j);
    current = current.next;
  }

  input.push(list.next);
}

mergeKLists(input);
