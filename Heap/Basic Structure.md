# **Heap**

Heaps are specialized tree-based data structures that satisfy the heap property, which makes them useful for implementing priority queues and efficient sorting algorithms.

## **1. Basic Structure**

### **Definition**
A heap is a complete binary tree where each node satisfies the heap property. There are two types of heaps:
- **Max-Heap**: The key of each parent node is greater than or equal to the keys of its children. The largest key is at the root.
- **Min-Heap**: The key of each parent node is less than or equal to the keys of its children. The smallest key is at the root.

### **Properties**
- **Complete Binary Tree**: A heap is always a complete binary tree, meaning all levels are fully filled except possibly for the last level, which is filled from left to right.
- **Heap Order Property**: In a max-heap, for any given node \( i \):
  \[
  \text{key}(i) \geq \text{key}(left(i)) \quad \text{and} \quad \text{key}(i) \geq \text{key}(right(i))
  \]
  For a min-heap:
  \[
  \text{key}(i) \leq \text{key}(left(i)) \quad \text{and} \quad \text{key}(i) \leq \text{key}(right(i))
  \]

### **Applications**
- **Priority Queues**: Heaps are often used to implement priority queues, where the highest (or lowest) priority item can be efficiently accessed.
- **Heap Sort**: Heaps can be used to sort elements efficiently by repeatedly removing the maximum (or minimum) element from the heap.

---

## **2. Heap Property**

### **Max-Heap vs. Min-Heap**
- **Max-Heap**:
  - The root node has the maximum value.
  - Every parent node has a value greater than or equal to its children.
  - Useful for implementing a priority queue where the highest priority element is served first.

- **Min-Heap**:
  - The root node has the minimum value.
  - Every parent node has a value less than or equal to its children.
  - Useful for implementing a priority queue where the lowest priority element is served first.

### **Heap Operations**
- **Insertion**: Add a new element to the heap while maintaining the heap property. This is done by placing the element at the end of the heap and then "bubbling up" to restore the heap property.
- **Deletion**: Typically, the maximum (or minimum) element is removed from the root. After removing it, the last element is placed at the root, and the "heapify" process is used to restore the heap property by "bubbling down."
- **Peek**: Accessing the root element (maximum in max-heap or minimum in min-heap) without removing it.

---

## **3. Tree Representation**

### **Array Representation of Heaps**
Heaps can be efficiently represented using arrays, which allows for easier implementation of the heap operations.

#### **Array Indexing**
- The root of the heap is stored at index 0.
- For any node at index \( i \):
  - The left child can be found at index \( 2i + 1 \)
  - The right child can be found at index \( 2i + 2 \)
  - The parent can be found at index \( \lfloor \frac{i - 1}{2} \rfloor \)

### **Example of Array Representation**
For the following max-heap:

```
       10
      /  \
     9    8
    / \  / \
   7  6 5   4
```
The corresponding array representation would be:
```
[10, 9, 8, 7, 6, 5, 4]
```

### **Advantages of Array Representation**
- **Space Efficiency**: Eliminates the need for pointers, reducing overhead.
- **Cache Efficiency**: Arrays are contiguous in memory, leading to better cache performance.

---

## **Conclusion**
Heaps are powerful data structures that efficiently support priority queue operations. Understanding the heap properties (max-heap and min-heap) and their array representation is essential for implementing algorithms that rely on these structures, such as heap sort and priority queue operations.
