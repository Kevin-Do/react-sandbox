class UnionFind {
  private parents: number[];
  private ranks: number[];

  constructor(size: number) {
    this.parents = Array.from({ length: size }, (_, i) => i);
    this.ranks = Array(size).fill(0);
  }

  find(x: number): number {
    if (this.parents[x] !== x) {
      this.parents[x] = this.find(this.parents[x]);
    }
    return this.parents[x];
  }

  union(x: number, y: number): void {
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (rootX === rootY) return;

    if (this.ranks[rootX] > this.ranks[rootY]) {
      this.parents[rootY] = rootX;
    } else if (this.ranks[rootX] < this.ranks[rootY]) {
      this.parents[rootX] = rootY;
    } else {
      this.parents[rootY] = rootX;
      this.ranks[rootX]++;
    }
  }

  isConnected(x: number, y: number): boolean {
    return this.find(x) === this.find(y);
  }

  // Implement other Union-Find methods if necessary.
}
