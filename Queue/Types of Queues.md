# **Types of Queues**

A **queue** is a linear data structure that stores elements in a specific order. Different types of queues are used depending on the specific needs and performance requirements. Let’s explore the three common types of queues: **Simple Queue**, **Circular Queue**, and **Priority Queue**.

---

## **1. Simple Queue**

### **Definition:**
A **Simple Queue** is the basic form of a queue that follows the **First In, First Out (FIFO)** principle. Elements are inserted at the **rear** and removed from the **front**. Once an element is removed, the position it occupied cannot be reused.

### **Key Characteristics:**
- Elements are enqueued at the end (rear) and dequeued from the front.
- Fixed size (if using an array).
- Space is not reused once an element is dequeued.
  
### **Example:**
```javascript
let queue = [];

// Enqueue operation
queue.push(10);
queue.push(20);
queue.push(30);

// Dequeue operation
let removedElement = queue.shift(); // Removes 10
console.log(removedElement); // Output: 10
console.log(queue); // Output: [20, 30]
```

### **Use Cases:**
- Task scheduling systems.
- Printer job queue.
- Customer service ticketing systems.

---

## **2. Circular Queue**

### **Definition:**
A **Circular Queue** is an advanced form of a simple queue that efficiently utilizes space by treating the queue as a circular structure. When the rear of the queue reaches the end, it wraps around to the front if space is available (i.e., there are empty slots at the beginning).

### **Key Characteristics:**
- Fixed size, but it **reuses** space that becomes available after dequeue operations.
- The rear pointer wraps around to the beginning when the end of the queue is reached.
- Efficient in memory utilization, especially when space is limited.

### **Example: Circular Queue Using Arrays**
```javascript
class CircularQueue {
  constructor(size) {
    this.queue = new Array(size);
    this.size = size;
    this.front = -1;
    this.rear = -1;
  }

  // Enqueue
  enqueue(element) {
    if ((this.rear + 1) % this.size === this.front) {
      console.log("Queue is full");
    } else {
      if (this.front === -1) this.front = 0;
      this.rear = (this.rear + 1) % this.size;
      this.queue[this.rear] = element;
    }
  }

  // Dequeue
  dequeue() {
    if (this.front === -1) {
      console.log("Queue is empty");
    } else {
      const removedElement = this.queue[this.front];
      if (this.front === this.rear) {
        this.front = this.rear = -1;
      } else {
        this.front = (this.front + 1) % this.size;
      }
      return removedElement;
    }
  }
}

let cq = new CircularQueue(3);
cq.enqueue(10);
cq.enqueue(20);
cq.enqueue(30);
console.log(cq.dequeue()); // Output: 10
cq.enqueue(40); // Adds 40 after dequeue (reuse space)
```

### **Use Cases:**
- Memory management in resource-limited systems.
- Circular buffers for streaming data (e.g., media players).
- CPU scheduling in operating systems.

---

## **3. Priority Queue**

### **Definition:**
A **Priority Queue** is a special type of queue where each element is associated with a **priority**. In a priority queue, elements are dequeued based on their priority, not just the order in which they were added. Higher priority elements are dequeued before lower priority ones, even if they were enqueued later.

### **Key Characteristics:**
- Each element has an associated priority.
- Elements with higher priority are dequeued before elements with lower priority.
- Can be implemented using arrays, heaps, or binary trees.
  
### **Types of Priority Queues:**
- **Min-Priority Queue**: Elements with the smallest priority are dequeued first.
- **Max-Priority Queue**: Elements with the largest priority are dequeued first.

### **Example: Priority Queue Using Arrays (Max-Priority Queue)**
```javascript
class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  // Enqueue with priority
  enqueue(element, priority) {
    const node = { element, priority };
    let added = false;
    
    for (let i = 0; i < this.queue.length; i++) {
      if (this.queue[i].priority < priority) {
        this.queue.splice(i, 0, node);
        added = true;
        break;
      }
    }
    
    if (!added) {
      this.queue.push(node);
    }
  }

  // Dequeue
  dequeue() {
    if (this.queue.length > 0) {
      return this.queue.shift().element; // Remove the highest priority element
    }
  }
}

let pq = new PriorityQueue();
pq.enqueue("Low Priority Task", 1);
pq.enqueue("High Priority Task", 3);
pq.enqueue("Medium Priority Task", 2);

console.log(pq.dequeue()); // Output: High Priority Task (Priority 3)
console.log(pq.dequeue()); // Output: Medium Priority Task (Priority 2)
```

### **Use Cases:**
- CPU scheduling with different priority levels for processes.
- Dijkstra’s shortest path algorithm.
- Event-driven simulations where events with higher priority occur sooner.

---

### **Summary of Queue Types**

1. **Simple Queue**:
   - Basic FIFO structure.
   - Easy to implement, but space isn't reused after dequeue.
  
2. **Circular Queue**:
   - Efficient use of space.
   - Circular structure allows reuse of available space.

3. **Priority Queue**:
   - Elements are dequeued based on priority, not order.
   - Useful for tasks where certain elements need to be processed first.

Each type of queue serves different purposes, and understanding when to use each is crucial in optimizing data flow, memory utilization, and task processing.
