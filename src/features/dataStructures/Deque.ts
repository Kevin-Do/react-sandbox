class Deque<T> {
  private items: T[] = [];

  addFront(item: T): void {
    this.items.unshift(item);
  }

  addBack(item: T): void {
    this.items.push(item);
  }

  removeFront(): T | undefined {
    return this.items.shift();
  }

  removeBack(): T | undefined {
    return this.items.pop();
  }

  size(): number {
    return this.items.length;
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }
}
