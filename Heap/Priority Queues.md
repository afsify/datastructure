# **Priority Queues**

A **Priority Queue** is an abstract data type similar to a regular queue or stack data structure, but with an added feature: each element has a "priority" associated with it. Elements with higher priority are dequeued before those with lower priority, regardless of their order in the queue.

## **1. Basic Concepts**

### **Definition**
- **Priority Queue**: A collection of elements where each element has a priority. The element with the highest (or lowest) priority is served before elements with lower priority.

### **Operations**
- **Enqueue**: Add an element to the priority queue with an associated priority.
- **Dequeue**: Remove and return the element with the highest priority.
- **Peek**: Return the element with the highest priority without removing it.
- **Change Priority**: Update the priority of an existing element.

### **Use Cases**
- Task scheduling in operating systems.
- Simulation systems.
- Dijkstra’s algorithm for finding the shortest paths in graphs.
- Huffman coding for data compression.

---

## **2. Implementing Priority Queues Using Heaps**

Heaps provide an efficient way to implement priority queues due to their properties and operations. Here's how priority queues can be effectively implemented using heaps.

### **Choosing the Heap Type**
- **Max-Heap**: Use when higher numeric values represent higher priority. The maximum element (highest priority) is at the root.
- **Min-Heap**: Use when lower numeric values represent higher priority. The minimum element (highest priority) is at the root.

### **Heap Operations for Priority Queue**

1. **Enqueue (Insertion)**:
   - Insert the new element at the end of the heap (array).
   - Bubble up the element to maintain the heap property (i.e., parent node must be of higher priority than the child).

   **Time Complexity**: \(O(\log n)\)

2. **Dequeue (Removal)**:
   - Remove the root element (highest priority).
   - Replace the root with the last element in the heap.
   - Bubble down the new root to restore the heap property.

   **Time Complexity**: \(O(\log n)\)

3. **Peek**:
   - Return the root element without removing it.

   **Time Complexity**: \(O(1)\)

4. **Change Priority**:
   - Update the priority of an element (if the priority is increased, bubble up; if decreased, bubble down).

   **Time Complexity**: \(O(\log n)\)

---

## **3. Example Implementation in JavaScript**

Here's a basic example of a priority queue implementation using a max-heap:

```javascript
class MaxHeap {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        const element = this.heap[index];

        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.heap[parentIndex];

            if (element <= parent) break;

            this.heap[index] = parent;
            index = parentIndex;
        }
        this.heap[index] = element;
    }

    extractMax() {
        const max = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.bubbleDown();
        }
        return max;
    }

    bubbleDown() {
        let index = 0;
        const length = this.heap.length;
        const element = this.heap[0];

        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIndex < length) {
                leftChild = this.heap[leftChildIndex];
                if (leftChild > element) {
                    swap = leftChildIndex;
                }
            }

            if (rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex];
                if (
                    (swap === null && rightChild > element) ||
                    (swap !== null && rightChild > leftChild)
                ) {
                    swap = rightChildIndex;
                }
            }

            if (swap === null) break;

            this.heap[index] = this.heap[swap];
            index = swap;
        }

        this.heap[index] = element;
    }

    peek() {
        return this.heap[0];
    }
}

// Example usage:
const pq = new MaxHeap();
pq.insert(10);
pq.insert(20);
pq.insert(5);
console.log(pq.peek()); // 20
console.log(pq.extractMax()); // 20
console.log(pq.peek()); // 10
```

---

## **4. Performance Analysis**

### **Time Complexities**
- **Insertion (Enqueue)**: \(O(\log n)\)
- **Removal (Dequeue)**: \(O(\log n)\)
- **Peek**: \(O(1)\)
- **Change Priority**: \(O(\log n)\)

### **Space Complexity**
- The space complexity is \(O(n)\) since all elements are stored in the heap.

---

## **Conclusion**
Priority queues are crucial in many applications requiring elements to be processed based on their priority. By leveraging heaps, especially max-heaps or min-heaps, priority queues can be implemented efficiently, providing fast access to high-priority elements while maintaining the overall order of insertion. Understanding this data structure is essential for solving problems related to scheduling, pathfinding, and more.
