class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(maxStackSize = 10) {
    if (
      typeof maxStackSize !== 'number' ||
      !isFinite(maxStackSize) ||
      maxStackSize <= 0
    ) {
      throw new Error('Invalid maximum stack size');
    }
    this.maxStackSize = maxStackSize;
    this.head = null;
    this.length = 0;
  }

  push(value) {
    if (this.length >= this.maxStackSize) {
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
