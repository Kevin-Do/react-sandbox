class BinaryTreeNode<T> {
  value: T;
  left: BinaryTreeNode<T> | null;
  right: BinaryTreeNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree<T> {
  root: BinaryTreeNode<T> | null;

  constructor(private compareFn: (a: T, b: T) => number) {
    this.root = null;
  }

  insert(value: T): void {
    if (this.root === null) {
      this.root = new BinaryTreeNode(value);
    } else {
      this.insertNode(this.root, value);
    }
  }

  private insertNode(node: BinaryTreeNode<T>, value: T): void {
    if (this.compareFn(value, node.value) < 0) {
      if (node.left === null) {
        node.left = new BinaryTreeNode(value);
      } else {
        this.insertNode(node.left, value);
      }
    } else {
      if (node.right === null) {
        node.right = new BinaryTreeNode(value);
      } else {
        this.insertNode(node.right, value);
      }
    }
  }

  // Implement other BST methods like search, delete, traverse, etc.
}
