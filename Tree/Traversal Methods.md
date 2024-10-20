# **Traversal Methods**

Tree traversal refers to the process of visiting all the nodes in a tree in a specific order. There are different traversal methods depending on the sequence in which nodes are visited. 

### **1. In-order Traversal (Left, Root, Right)**

In **in-order traversal**, the nodes are visited in the following sequence:
- Traverse the **left subtree**.
- Visit the **root** node.
- Traverse the **right subtree**.

#### **Steps**:
1. Recursively traverse the left subtree.
2. Process (visit) the current node (root).
3. Recursively traverse the right subtree.

#### **Use Case**:
- In a **binary search tree (BST)**, in-order traversal gives nodes in **sorted order**.

#### **Example**:
```javascript
function inOrderTraversal(node) {
  if (node !== null) {
    inOrderTraversal(node.left);  // Traverse left subtree
    console.log(node.value);      // Visit root node
    inOrderTraversal(node.right); // Traverse right subtree
  }
}
```

---

### **2. Pre-order Traversal (Root, Left, Right)**

In **pre-order traversal**, the nodes are visited in the following sequence:
- Visit the **root** node.
- Traverse the **left subtree**.
- Traverse the **right subtree**.

#### **Steps**:
1. Process (visit) the current node (root).
2. Recursively traverse the left subtree.
3. Recursively traverse the right subtree.

#### **Use Case**:
- Pre-order traversal is used to **create a copy** of a tree or to evaluate prefix expressions.

#### **Example**:
```javascript
function preOrderTraversal(node) {
  if (node !== null) {
    console.log(node.value);      // Visit root node
    preOrderTraversal(node.left); // Traverse left subtree
    preOrderTraversal(node.right);// Traverse right subtree
  }
}
```

---

### **3. Post-order Traversal (Left, Right, Root)**

In **post-order traversal**, the nodes are visited in the following sequence:
- Traverse the **left subtree**.
- Traverse the **right subtree**.
- Visit the **root** node.

#### **Steps**:
1. Recursively traverse the left subtree.
2. Recursively traverse the right subtree.
3. Process (visit) the current node (root).

#### **Use Case**:
- Post-order traversal is commonly used to **delete** or **free up nodes** and to evaluate postfix expressions.

#### **Example**:
```javascript
function postOrderTraversal(node) {
  if (node !== null) {
    postOrderTraversal(node.left);  // Traverse left subtree
    postOrderTraversal(node.right); // Traverse right subtree
    console.log(node.value);        // Visit root node
  }
}
```

---

### **4. Level-order Traversal (Breadth-First Traversal)**

In **level-order traversal**, the nodes are visited level by level, starting from the root and moving down to subsequent levels. This traversal is also known as **breadth-first traversal**.

#### **Steps**:
1. Visit all nodes on the current level before moving to the next level.
2. Use a **queue** to keep track of nodes at each level.

#### **Use Case**:
- Level-order traversal is useful for **searching** or **traversing** a tree by levels. It’s also used in algorithms like **breadth-first search (BFS)**.

#### **Example**:
```javascript
function levelOrderTraversal(root) {
  if (!root) return;

  const queue = [root];  // Start with the root node

  while (queue.length > 0) {
    const current = queue.shift(); // Dequeue the next node
    console.log(current.value);    // Visit the node

    if (current.left) queue.push(current.left);   // Enqueue left child
    if (current.right) queue.push(current.right); // Enqueue right child
  }
}
```

---

### **Summary of Traversal Methods**

- **In-order** (Left, Root, Right): Visits nodes in a sorted order in BST.
- **Pre-order** (Root, Left, Right): Used for copying or evaluating prefix expressions.
- **Post-order** (Left, Right, Root): Useful for node deletion or evaluating postfix expressions.
- **Level-order** (Breadth-first): Visits nodes level by level, used in breadth-first search.

---

These traversal methods provide different ways to visit and process nodes in a tree, depending on the use case or algorithm requirements.
