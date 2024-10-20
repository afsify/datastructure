# **Queue**

A **queue** is a linear data structure that follows the **First In, First Out (FIFO)** principle. The first element added to the queue will be the first one to be removed, similar to a line of people waiting for a service. Queues are widely used in various programming scenarios, including scheduling, buffering, and breadth-first search algorithms.

## **1. Basic Operations**

### **1.1 Creation: Initializing a Queue**
There are several ways to initialize a queue in JavaScript, such as using arrays, custom classes, or even specialized libraries. 

#### **Example: Queue Initialization Using an Array**
```javascript
let queue = []; // Initializing an empty queue using an array
```

In this example, an array is used as a queue, but there are also more advanced ways to implement queues, especially for performance optimization (like circular queues or linked list-based queues).

---

### **1.2 Enqueue: Adding Elements to the Queue**
The enqueue operation adds an element to the **end** (rear) of the queue.

#### **Example:**
```javascript
queue.push(10); // Adds the number 10 to the end of the queue
queue.push(20); // Adds the number 20 to the end of the queue
console.log(queue); // Output: [10, 20]
```

In this example, the `push()` method adds elements to the queue, maintaining the FIFO principle.

---

### **1.3 Dequeue: Removing Elements from the Queue**
The dequeue operation removes an element from the **front** (beginning) of the queue.

#### **Example:**
```javascript
let removedElement = queue.shift(); // Removes the first element (10) from the queue
console.log(removedElement); // Output: 10
console.log(queue); // Output: [20]
```

Here, the `shift()` method removes the first element (the element that has been in the queue the longest) from the queue.

---

### **1.4 Peek: Accessing the Front Element Without Removing It**
The peek operation allows you to view the element at the **front** of the queue without removing it.

#### **Example:**
```javascript
let frontElement = queue[0]; // Accesses the first element without removing it
console.log(frontElement); // Output: 20
console.log(queue); // Output: [20] (unchanged)
```

The front element is simply accessed using array indexing. It provides insight into what will be dequeued next without modifying the queue.

---

## **2. Common Queue Use Cases**
Queues are often used in scenarios where ordering of tasks, resources, or data is important:

- **Task Scheduling**: Jobs are processed in the order they are received.
- **Print Queue**: Print jobs are queued, and the printer processes them one by one.
- **Breadth-First Search (BFS)**: A queue is used to explore nodes in a graph level by level.
- **Buffers**: Queues are used in buffering data streams, like audio and video data.

---

### **Summary of Key Queue Operations**

1. **Enqueue** (`push()`): Adds an element to the end of the queue.
2. **Dequeue** (`shift()`): Removes the element from the front of the queue.
3. **Peek** (`queue[0]`): Accesses the front element without removing it.

Queues are essential for managing ordered data in programming, and understanding their basic operations allows for efficient design of algorithms and applications.
