class Heap<T> {
  private items: T[] = [];

  constructor(private compareFn: (a: T, b: T) => number) {}

  insert(value: T): void {
    this.items.push(value);
    this.heapifyUp();
  }

  extract(): T | undefined {
    if (this.items.length === 0) return undefined;
    const root = this.items[0];
    const last = this.items.pop()!;
    if (this.items.length > 0) {
      this.items[0] = last;
      this.heapifyDown();
    }
    return root;
  }

  private heapifyUp(): void {
    let index = this.items.length - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.compareFn(this.items[index], this.items[parentIndex]) <= 0)
        break;
      [this.items[index], this.items[parentIndex]] = [
        this.items[parentIndex],
        this.items[index],
      ];
      index = parentIndex;
    }
  }

  private heapifyDown(): void {
    let index = 0;
    const length = this.items.length;
    while (true) {
      const leftIndex = 2 * index + 1;
      const rightIndex = 2 * index + 2;
      let swapIndex = index;

      if (
        leftIndex < length &&
        this.compareFn(this.items[leftIndex], this.items[swapIndex]) > 0
      ) {
        swapIndex = leftIndex;
      }

      if (
        rightIndex < length &&
        this.compareFn(this.items[rightIndex], this.items[swapIndex]) > 0
      ) {
        swapIndex = rightIndex;
      }

      if (swapIndex === index) break;

      [this.items[index], this.items[swapIndex]] = [
        this.items[swapIndex],
        this.items[index],
      ];

      index = swapIndex;
    }
  }

  // Implement other Heap methods like size, peek, etc.
}
