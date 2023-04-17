class HashMap<K, V> {
  private items: Map<K, V> = new Map<K, V>();

  set(key: K, value: V): void {
    this.items.set(key, value);
  }

  get(key: K): V | undefined {
    return this.items.get(key);
  }

  delete(key: K): boolean {
    return this.items.delete(key);
  }

  has(key: K): boolean {
    return this.items.has(key);
  }

  size(): number {
    return this.items.size;
  }

  clear(): void {
    this.items.clear();
  }
}
