import Node from "./node-class";

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  add(value) {
    if (this.isEmpty()) {
      this.head = new Node(value);
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = new Node(value);
    }

    this.length++;
  } 

  addAtPosition(position, value) {
    if (position < 0 || this.length < position || !isFinite(position)) {
      throw new Error('Invalid position');
    }
    let node = new Node(value);

    if (position === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      let current = this.head;
      let prev = null;
      let index = 0;

      while (index < position) {
        prev = current;
        current = current.next;
        index++;
      }

      prev.next = node;
      node.next = current;
    }

    this.length++;
  } 

  removeAtPosition(position) {
    if (
      position < 0 ||
      this.length <= position ||
      !isFinite(position) ||
      this.isEmpty()
    ) {
      throw new Error('Invalid position or list is empty');
    }

    let current = this.head;

    if (position === 0) {
      this.head = current.next;
    } else {
      let prev = null;
      let index = 0;

      while (index < position) {
        prev = current;
        current = current.next;
        index++;
      }

      prev.next = current.next;
    }

    this.length--;
    return current.value;
  }

  removeElement(element) {
    this.removeAtPosition(this.indexOf(element));
  }

  indexOf(element) {
    let current = this.head;
    let index = 0;

    while (current) {
      if (current.value === element) {
        return index;
      }

      current = current.next;
      index++;
    }

    throw new Error('There is no such element');
  }

  isEmpty() {
    return this.length === 0;
  }
}
