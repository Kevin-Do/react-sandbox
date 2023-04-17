class PriorityQueue<T> {
  private items: Array<{ value: T; priority: number }> = [];

  enqueue(item: T, priority: number): void {
    const newItem = { value: item, priority };
    let inserted = false;

    for (let i = 0; i < this.items.length; i++) {
      if (priority < this.items[i].priority) {
        this.items.splice(i, 0, newItem);
        inserted = true;
        break;
      }
    }

    if (!inserted) {
      this.items.push(newItem);
    }
  }

  dequeue(): T | undefined {
    return this.items.shift()?.value;
  }

  peek(): T | undefined {
    return this.items[0]?.value;
  }

  size(): number {
    return this.items.length;
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  // Implement other PriorityQueue methods if necessary.
}
