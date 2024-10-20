# **Queue Implementations**

Queues can be implemented in different ways depending on the specific use case and performance needs. Two common implementations are **Array-based** queues and **Linked list-based** queues.

## **1. Array-based Queues**

In an **array-based** implementation, a queue is represented using a fixed-size or dynamic array. The **front** of the queue is typically at index 0, while elements are enqueued at the **rear** of the array.

### **1.1 Characteristics**
- **Simple to implement**: JavaScript arrays have built-in methods (`push()` and `shift()`) that make it easy to implement a queue.
- **Fixed or dynamic size**: Arrays can be resized dynamically (in languages like JavaScript), but resizing arrays in some other languages may require manual handling.
- **Efficient at the rear**: Adding elements to the end of the array (enqueue operation) is constant time `O(1)`.

### **1.2 Drawbacks**
- **Inefficient at the front**: Removing elements from the front (`shift()`) can be expensive because all other elements must be shifted to fill the gap. This results in a time complexity of `O(n)` for dequeue operations.
- **Space waste**: Once elements are removed, their space isn't reused unless explicitly handled (e.g., by resizing the array).

### **1.3 Example: Array-based Queue in JavaScript**
```javascript
class ArrayQueue {
  constructor() {
    this.queue = [];
  }

  // Add element to the queue (enqueue)
  enqueue(element) {
    this.queue.push(element);
  }

  // Remove element from the queue (dequeue)
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.queue.shift(); // Removes the first element
  }

  // Get the front element
  peek() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.queue[0]; // Returns the first element
  }

  // Check if the queue is empty
  isEmpty() {
    return this.queue.length === 0;
  }

  // Get the size of the queue
  size() {
    return this.queue.length;
  }
}
```

### **1.4 Performance**
- **Enqueue (`push`)**: `O(1)` – Adding to the end of the array is fast.
- **Dequeue (`shift`)**: `O(n)` – Removing the first element requires shifting all other elements to the left.
- **Peek**: `O(1)` – Accessing the front element is constant time.

---

## **2. Linked List-based Queues**

In a **linked list-based** implementation, a queue is represented as a **singly linked list** where each node contains data and a pointer to the next node. The **head** of the linked list represents the front of the queue, and the **tail** represents the rear.

### **2.1 Characteristics**
- **Efficient operations at both ends**: Enqueuing at the tail and dequeuing from the head are both `O(1)` operations because no shifting is needed.
- **Dynamic size**: Linked lists grow and shrink dynamically, so there’s no need for resizing or managing fixed array sizes.

### **2.2 Drawbacks**
- **Extra memory overhead**: Each element (node) in a linked list requires extra memory for the pointer to the next node.
- **Cache inefficiency**: Elements are not stored in contiguous memory, which can lead to slower access times compared to arrays, especially for large queues.

### **2.3 Example: Linked List-based Queue in JavaScript**
```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedListQueue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Add element to the queue (enqueue)
  enqueue(element) {
    const newNode = new Node(element);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  // Remove element from the queue (dequeue)
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    const dequeuedValue = this.head.value;
    this.head = this.head.next;
    this.length--;
    if (this.isEmpty()) {
      this.tail = null;
    }
    return dequeuedValue;
  }

  // Get the front element
  peek() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.head.value;
  }

  // Check if the queue is empty
  isEmpty() {
    return this.length === 0;
  }

  // Get the size of the queue
  size() {
    return this.length;
  }
}
```

### **2.4 Performance**
- **Enqueue (`push` at tail)**: `O(1)` – Inserting at the end of the linked list is constant time.
- **Dequeue (`shift` at head)**: `O(1)` – Removing the front element is constant time.
- **Peek**: `O(1)` – Accessing the front element is constant time.

---

## **3. Comparison: Array-based vs. Linked List-based Queues**

| Feature                        | Array-based Queue       | Linked List-based Queue  |
|---------------------------------|-------------------------|--------------------------|
| **Enqueue Time Complexity**     | `O(1)`                  | `O(1)`                   |
| **Dequeue Time Complexity**     | `O(n)` (due to shifting) | `O(1)`                   |
| **Memory Efficiency**           | More efficient for small sizes | More overhead due to extra pointers |
| **Dynamic Sizing**              | Arrays can be resized    | Dynamic size by default  |
| **Ease of Implementation**      | Easy, built-in methods   | Requires custom implementation |
| **Use Case**                    | Small queues or frequent enqueue | Large queues, frequent dequeue |

### **When to Use Array-based Queues:**
- When the queue size is relatively small, and you don’t frequently remove elements from the front.
- When you want quick access to array methods and prefer simplicity.

### **When to Use Linked List-based Queues:**
- When there are frequent enqueue and dequeue operations, especially for larger queues.
- When you need to avoid the performance hit of shifting elements in an array.

---

### **Summary of Key Points:**
- **Array-based queues** are simple to implement but can be inefficient for frequent dequeue operations.
- **Linked list-based queues** offer constant time enqueue and dequeue operations but require more memory.
- Choose the implementation based on the performance needs of your specific application.

---

This should give you a solid understanding of how queues can be implemented using arrays and linked lists, along with their respective advantages and drawbacks!
