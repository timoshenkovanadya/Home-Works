import Node from "./node-class";

class Stack {
  constructor(maxLength = 10) {
    if (
      !isFinite(maxLength) ||
      maxLength <= 0
    ) {
      throw new Error('Invalid maximum stack size');
    }
    this.maxLength = maxLength;
    this.head = null;
    this.length = 0;
  }

  push(value) {
    if (this.length >= this.maxLength) {
      throw new Error('Stack is full');
    }
    const node = new Node(value);

    if (this.head) {
      node.next = this.head;
      this.head = node;
    } else {
      this.head = node;
    }

    this.length++;
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error('Stack is empty');
    }
    const current = this.head;
    this.head = this.head.next;
    this.length--;

    return current.value;
  }

  peek() {
    return this.isEmpty() ? null : this.head.value;
  }

  isEmpty() {
    return this.length === 0;
  }

  toArray() {
    let current = this.head;
    const result = [];
    while (current !== null) {
      result.push(current.value);
      current = current.next;
    }
    return result;
  }

  static fromIterable(iterable) {
    if (iterable == null || typeof iterable[Symbol.iterator] !== 'function') {
      throw new Error('Entity is not iterable');
    }
    const stack = new Stack(iterable.length);
    for (let item of iterable) {
      stack.push(item);
    }
    return stack;
  }
}
