# **Search Algorithms**

## **1. Definition**
Search algorithms are methods used to locate a specific element or a set of elements within a data structure. They can be classified into linear and non-linear searches based on the data structure's organization.

## **2. Types of Search Algorithms**

### **2.1 Linear Search**
- **Description**: A sequential search algorithm that checks each element in the list until the desired element is found or the end of the list is reached.
- **Time Complexity**: \(O(n)\), where \(n\) is the number of elements in the list.
- **Best Use Case**: Suitable for unsorted or small datasets.

**Example: Linear Search**
```javascript
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Target found
        }
    }
    return -1; // Target not found
}

console.log(linearSearch([5, 3, 8, 4, 2], 8)); // Output: 2
```

### **2.2 Binary Search**
- **Description**: An efficient algorithm that divides a sorted array in half to locate a target value. It eliminates half of the search space with each comparison.
- **Time Complexity**: \(O(\log n)\).
- **Best Use Case**: Requires a sorted array.

**Example: Binary Search**
```javascript
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) {
            return mid; // Target found
        } else if (arr[mid] < target) {
            left = mid + 1; // Search in the right half
        } else {
            right = mid - 1; // Search in the left half
        }
    }
    return -1; // Target not found
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 5)); // Output: 4
```

## **3. Search in Different Data Structures**

### **3.1 Arrays**
- **Linear Search** and **Binary Search** are primarily used for arrays.
- Arrays allow for indexed access, making searching straightforward but require sorting for binary search.

### **3.2 Linked Lists**
- **Linear Search** is used since linked lists do not allow indexed access.
- **Example: Linear Search in Linked List**
```javascript
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    add(value) {
        const newNode = new Node(value);
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

    linearSearch(target) {
        let current = this.head;
        while (current) {
            if (current.value === target) {
                return current; // Target found
            }
            current = current.next;
        }
        return null; // Target not found
    }
}

const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
console.log(list.linearSearch(2)); // Output: Node { value: 2, next: Node { value: 3, next: null } }
```

### **3.3 Binary Trees**
- **In-Order, Pre-Order, and Post-Order Traversal** can be used to search for a value in binary trees.
- **Binary Search Trees (BST)** allow for efficient searching using binary search principles.
  
**Example: Searching in a BST**
```javascript
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
            return;
        }
        let current = this.root;
        while (true) {
            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    return;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    return;
                }
                current = current.right;
            }
        }
    }

    search(value) {
        let current = this.root;
        while (current) {
            if (value === current.value) {
                return current; // Target found
            } else if (value < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return null; // Target not found
    }
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
console.log(bst.search(5)); // Output: TreeNode { value: 5, left: null, right: null }
```

### **3.4 Hash Tables**
- **Direct Access**: Hash tables use keys to access values directly, providing \(O(1)\) average time complexity for search operations.
  
**Example: Search in Hash Table**
```javascript
class HashTable {
    constructor(size) {
        this.table = new Array(size);
    }

    hash(key) {
        let hash = 0;
        for (let char of key) {
            hash += char.charCodeAt(0);
        }
        return hash % this.table.length;
    }

    set(key, value) {
        const index = this.hash(key);
        this.table[index] = value; // Simple implementation, no collision handling
    }

    get(key) {
        const index = this.hash(key);
        return this.table[index]; // Returns undefined if key not found
    }
}

const ht = new HashTable(10);
ht.set('name', 'John');
console.log(ht.get('name')); // Output: John
```

### **3.5 Graphs**
- **Breadth-First Search (BFS)** and **Depth-First Search (DFS)** are used to explore graph nodes.
  
**Example: BFS**
```javascript
class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1); // Undirected graph
    }

    bfs(start) {
        const queue = [start];
        const result = [];
        const visited = new Set();
        visited.add(start);

        while (queue.length) {
            const vertex = queue.shift();
            result.push(vertex);

            for (const neighbor of this.adjacencyList[vertex]) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }
        return result;
    }
}

const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
console.log(graph.bfs('A')); // Output: [ 'A', 'B', 'C' ]
```

## **4. Conclusion**
Search algorithms are fundamental to data structures, enabling efficient data retrieval. The choice of algorithm often depends on the data structure used and the specific requirements of the application. Understanding these algorithms and their implementations is crucial for effective programming and algorithm design.
