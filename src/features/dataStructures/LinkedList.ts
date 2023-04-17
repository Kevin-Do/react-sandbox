class LinkedListNode<T> {
  value: T;
  next: LinkedListNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList<T> {
  head: LinkedListNode<T> | null;

  constructor() {
    this.head = null;
  }

  append(value: T): void {
    const newNode = new LinkedListNode(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  insert(value: T, position: number): boolean {
    if (position < 0) return false;

    const newNode = new LinkedListNode(value);
    let current = this.head;
    let previous: LinkedListNode<T> | null = null;
    let index = 0;

    if (position === 0) {
      newNode.next = current;
      this.head = newNode;
    } else {
      while (index < position) {
        if (!current) return false;
        previous = current;
        current = current.next;
        index++;
      }
      newNode.next = current;
      if (previous) previous.next = newNode;
    }
    return true;
  }

  remove(value: T): T | null {
    let current = this.head;
    let previous: LinkedListNode<T> | null = null;

    while (current) {
      if (current.value === value) {
        if (previous) {
          previous.next = current.next;
        } else {
          this.head = current.next;
        }
        return current.value;
      }
      previous = current;
      current = current.next;
    }

    return null;
  }

  find(value: T): LinkedListNode<T> | null {
    let current = this.head;

    while (current) {
      if (current.value === value) {
        return current;
      }
      current = current.next;
    }

    return null;
  }

  // You can also implement other LinkedList methods like size, isEmpty, etc.
}
