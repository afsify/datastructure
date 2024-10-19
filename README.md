# Data Structures in JavaScript

Data structures are ways of organizing, managing, and storing data in a computer program. They facilitate efficient data manipulation and retrieval, making them essential for developing efficient algorithms. JavaScript provides several built-in data structures, and understanding them is key to writing optimized code.

## Core Data Structures

### 1. **Array**
- **Description**: An ordered collection of elements identified by index or key. Arrays can store multiple values in a single variable.
- **Usage**: Useful for storing lists of items, such as numbers, strings, or objects.
- **Example**:
  ```javascript
  const fruits = ['apple', 'banana', 'cherry'];
  ```

#### Operations
- **Insertion**: `array.push(value)` to add an element to the end.
- **Deletion**: `array.pop()` to remove the last element.
- **Traversal**: Use loops (e.g., `for`, `forEach`) to access each element.

### 2. **Object**
- **Description**: Unordered collections of key-value pairs. Keys are strings (or Symbols), and values can be of any data type.
- **Usage**: Ideal for representing structured data like user profiles or settings.
- **Example**:
  ```javascript
  const person = {
      name: 'John',
      age: 30,
      isStudent: false
  };
  ```

#### Operations
- **Access**: `person.name` or `person['name']`.
- **Modification**: `person.age = 31;`.

### 3. **Set**
- **Description**: A collection of unique values. A Set allows you to store values without duplicates.
- **Usage**: Useful for tasks that require uniqueness, such as tracking distinct items.
- **Example**:
  ```javascript
  const uniqueNumbers = new Set([1, 2, 3, 2, 1]); // {1, 2, 3}
  ```

#### Operations
- **Add**: `set.add(value)`.
- **Delete**: `set.delete(value)`.
- **Check existence**: `set.has(value)`.

### 4. **Map**
- **Description**: A collection of key-value pairs where keys can be of any data type, and insertion order is maintained.
- **Usage**: Suitable for mapping data, where order and uniqueness of keys matter.
- **Example**:
  ```javascript
  const map = new Map();
  map.set('name', 'Alice');
  map.set('age', 25);
  ```

#### Operations
- **Access**: `map.get(key)`.
- **Delete**: `map.delete(key)`.

### 5. **Linked List**
- **Description**: A linear collection of elements (nodes), where each node points to the next node. It allows for dynamic memory allocation.
- **Usage**: Efficient for insertions and deletions at any position.
- **Example**: Requires a custom implementation.

#### Operations
- **Insertion**: Add nodes at the beginning, end, or middle.
- **Deletion**: Remove nodes by updating references.

### 6. **Stack**
- **Description**: A collection that follows the Last In, First Out (LIFO) principle. The last added element is the first to be removed.
- **Usage**: Useful for managing function calls (call stack) or undo mechanisms.
- **Example**:
  ```javascript
  class Stack {
      constructor() {
          this.items = [];
      }
      push(element) {
          this.items.push(element);
      }
      pop() {
          return this.items.pop();
      }
  }
  ```

### 7. **Queue**
- **Description**: A collection that follows the First In, First Out (FIFO) principle. The first added element is the first to be removed.
- **Usage**: Useful for scheduling tasks or managing requests.
- **Example**:
  ```javascript
  class Queue {
      constructor() {
          this.items = [];
      }
      enqueue(element) {
          this.items.push(element);
      }
      dequeue() {
          return this.items.shift();
      }
  }
  ```

### 8. **Tree**
- **Description**: A hierarchical data structure consisting of nodes, with a root node and subtrees. Each node can have multiple children.
- **Usage**: Useful for representing hierarchical data, such as file systems or organizational structures.
- **Example**: Binary trees, where each node has at most two children.

### 9. **Graph**
- **Description**: A collection of nodes (vertices) connected by edges. Graphs can be directed or undirected.
- **Usage**: Useful for representing networks, such as social networks or routing paths.
- **Example**: Implementing a graph typically requires an adjacency list or matrix.

### 10. **HashTable**
- **Description**: A data structure that maps keys to values for efficient lookup, using a hash function.
- **Usage**: Useful for fast data retrieval and management.
- **Example**: JavaScript's `Object` can act as a hash table.

### 11. **Heap**
- **Description**: A specialized tree-based data structure where the parent node is greater (or smaller) than its children, commonly used in priority queues.
- **Usage**: Useful for algorithms that require frequent access to the maximum or minimum element.
- **Example**: Binary heap implementations for priority queues.

### 12. **Trie**
- **Description**: A tree-like data structure where keys are usually strings, often used for storing and searching strings efficiently.
- **Usage**: Useful in applications like autocomplete and spell-checking.
- **Example**: Requires a custom implementation with nodes representing characters.

### 13. **String**
- **Description**: A sequence of characters used to represent text data.
- **Usage**: Commonly used for manipulation, searching, and comparison in applications.

## Search Algorithms
### Common Search Algorithms
- **Linear Search**: Iterates through each element in the array to find a target value.
- **Binary Search**: Efficiently finds a target value in a sorted array by repeatedly dividing the search interval in half.

### Example of Binary Search:
```javascript
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        }
        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1; // Not found
}
```

## Sort Algorithms
### Common Sorting Algorithms
- **Bubble Sort**: Simple sorting algorithm that repeatedly steps through the list, comparing adjacent elements.
- **Merge Sort**: A divide-and-conquer algorithm that divides the list into halves and merges them in a sorted manner.
- **Quick Sort**: A divide-and-conquer algorithm that selects a pivot element and partitions the array around it.

### Example of Quick Sort:
```javascript
function quickSort(arr) {
    if (arr.length <= 1) return arr;

    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}
```

## Best Practices for Using Data Structures

### Choosing the Right Data Structure
- **Understand Requirements**: Analyze the types of operations required (insertions, deletions, searches) and choose a structure that optimizes those operations.
- **Consider Space Complexity**: Assess the memory requirements of each structure.
- **Evaluate Time Complexity**: Understand the time complexity of operations like insertion, deletion, and retrieval.

### Memory Management
- **Avoid Memory Leaks**: Ensure that references are removed when no longer needed, especially in linked structures.
- **Use Built-in Structures When Possible**: JavaScript's built-in arrays, objects, sets, and maps are optimized for performance.

### Code Organization
- **Modular Design**: Implement data structures in a modular fashion for easier maintenance and testing.
- **Documentation**: Comment on the purpose of each structure and its intended use to improve code readability.

## Common JavaScript Commands for Data Structures

- **Array Operations**:
  ```javascript
  const arr = [1, 2, 3, 4];
  arr.push(5); // Add to the end
  arr.pop();   // Remove from the end
  ```

- **Object Operations**:
  ```javascript
  const obj = { key1: 'value1', key2: 'value2' };
  obj.key3 = 'value3'; // Add new key-value pair
  delete obj.key1;     // Remove a key
  ```

- **Set Operations**:
  ```javascript
  const mySet = new Set();
  mySet.add(1);
  mySet.add(2);
  mySet.has(1); // true
  ```

- **Map Operations**:
  ```javascript
  const myMap = new Map();
  myMap.set('a', 1);
  myMap.get('a'); // 1
  ```

## Clone the Repository

In the terminal, use the following command:

```bash
git clone https://github.com/mhdafs/datastructure.git
