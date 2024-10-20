# **Tree**

A **tree** is a hierarchical data structure composed of nodes, where each node contains a value and references to its children. It is widely used in computer science for organizing and storing data, with applications ranging from file systems to databases and parsers.

### **1. Basic Structure of a Tree**

A tree consists of the following basic elements:

- **Node**: Each element of the tree. A node contains data and pointers (or references) to its child nodes.
- **Root**: The topmost node of the tree. It has no parent.
- **Edge**: The connection between two nodes.
- **Parent**: A node that has one or more child nodes.
- **Child**: A node that is directly connected to another node when moving away from the root.
- **Leaf**: A node with no children. It is the end node of a path.
- **Subtree**: A tree that consists of a node and all of its descendants.
- **Height**: The number of edges on the longest path from the root to a leaf.

### **1.1. Node: Understanding Nodes with Children and Parent References**

A **node** in a tree consists of:
- **Value/Data**: The information or value stored in the node.
- **Children**: A list of child nodes that the current node is connected to.

#### **Example Node Representation:**
```javascript
class TreeNode {
  constructor(value) {
    this.value = value;       // Data stored in the node
    this.left = null;         // Reference to the left child
    this.right = null;        // Reference to the right child (for binary trees)
  }
}
```

In this example, the `TreeNode` class represents a simple node in a tree, with data (`value`) and pointers to left and right children (for a binary tree).

---

### **2. Types of Trees**

#### **2.1. Binary Tree**
A **binary tree** is a tree data structure where each node has at most two children, typically referred to as the **left** child and the **right** child.

#### **Example:**
```javascript
class BinaryTree {
  constructor() {
    this.root = null; // Initialize the root as null
  }

  insert(value) {
    const newNode = new TreeNode(value);

    if (!this.root) {
      this.root = newNode;
    } else {
      // Logic for inserting the new node in the binary tree
    }
  }
}
```

#### **Characteristics**:
- Every node has at most two children.
- The left child is typically less than the parent node, and the right child is greater (in binary search trees).

---

#### **2.2. Binary Search Tree (BST)**
A **binary search tree (BST)** is a binary tree with the additional property that:
- For each node, all the values in its left subtree are less than the node’s value.
- All the values in its right subtree are greater than or equal to the node’s value.

#### **Example:**
```javascript
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      this._insertNode(this.root, newNode);
    }
  }

  _insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this._insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this._insertNode(node.right, newNode);
      }
    }
  }
}
```

#### **Characteristics**:
- Efficient searching, insertion, and deletion (on average, in **O(log n)** time).
- Used in many applications where fast lookups are necessary, like database indexing.

---

#### **2.3. AVL Tree**
An **AVL tree** is a self-balancing binary search tree where the difference between heights of left and right subtrees for any node is less than or equal to 1.

#### **Characteristics**:
- Self-balancing property ensures O(log n) time complexity for search, insertion, and deletion.
- Balance is maintained through **rotations** during insertions and deletions.

#### **Example of AVL Rotations**:
- **Single Rotation (Left/Right)**: Adjusts nodes to ensure balance when the tree becomes unbalanced after insertion.
- **Double Rotation (Left-Right / Right-Left)**: A combination of rotations to restore balance when two levels are unbalanced.

---

#### **2.4. Other Types of Trees**
- **N-ary Tree**: A tree where each node can have at most **N children**.
- **Balanced Tree**: A tree where the height difference between the left and right subtrees of every node is minimal.
- **Red-Black Tree**: A self-balancing binary search tree with additional properties to ensure balance.
- **Heap Tree**: A complete binary tree that maintains the heap property, used in implementing priority queues.
  
---

## **3. Common Operations on Trees**

- **Insertion**: Adding a node to the tree while maintaining its properties (e.g., in a binary search tree, inserting in the correct order).
- **Deletion**: Removing a node while restructuring the tree to preserve its properties.
- **Search**: Finding a node with a given value.
- **Traversal**: Visiting all nodes in a specific order.
  - **In-order Traversal**: Visit the left subtree, root node, and then right subtree.
  - **Pre-order Traversal**: Visit the root node, left subtree, and then right subtree.
  - **Post-order Traversal**: Visit the left subtree, right subtree, and then the root node.

#### **Example of Tree Traversal**:
```javascript
function inOrderTraversal(node) {
  if (node !== null) {
    inOrderTraversal(node.left);  // Traverse the left subtree
    console.log(node.value);      // Visit the root node
    inOrderTraversal(node.right); // Traverse the right subtree
  }
}
```

---

### **Summary of Key Concepts**

- **Tree Structure**: Hierarchical arrangement with nodes, children, and parents.
- **Binary Tree**: A tree where each node has at most two children.
- **Binary Search Tree (BST)**: A binary tree that maintains sorted order.
- **AVL Tree**: A self-balancing BST where the height difference between left and right subtrees is ≤ 1.
- **Traversal**: Methods for visiting all nodes in a tree (in-order, pre-order, post-order).

---

Trees are fundamental data structures in computer science, widely used in areas like data storage, retrieval systems, compilers, and artificial intelligence. Understanding their structure and different types is essential for designing efficient algorithms and data models.
