function addTwoNumbers(l1, l2) {
  let carry = 0;
  let prev = null;
  let output = l1;

  while (l1 || l2 || carry) {
    let l1Val = l1?.val || 0;
    let l2Val = l2?.val || 0;
    let sum = l1Val + l2Val + carry;

    carry = sum > 9 ? 1 : 0;
    sum %= 10;

    if (l1) {
      l1.val = sum;
      prev = l1;
      l1 = l1.next;
    } else {
      prev.next = new ListNode(sum);
      prev = prev.next;
    }

    if (l2) {
      l2 = l2.next;
    }
  }

  return output;
}

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

const l1Values = [3, 1];
const l2Values = [6, 8, 8, 8];
let l1;
let l2;
let head;

l1Values.forEach((value) => {
  if (!l1) {
    l1 = new ListNode(value);
    head = l1;
  } else {
    l1.next = new ListNode(value);
    l1 = l1.next;
  }
});

l1 = head;
head = null;

l2Values.forEach((value) => {
  if (!l2) {
    l2 = new ListNode(value);
    head = l2;
  } else {
    l2.next = new ListNode(value);
    l2 = l2.next;
  }
});

l2 = head;

console.log(addTwoNumbers(l1, l2));
