# **Stack Implementations**

Stacks can be implemented using two primary approaches: **array-based** and **linked list-based**. Both methods provide the same basic functionality but differ in structure, memory usage, and performance characteristics.

## **1. Array-Based Stack**

### **1.1 Implementation**

In an array-based stack, the stack is represented using a fixed-size array. The top of the stack is tracked using an index variable.

```javascript
class ArrayStack {
    constructor(size) {
        this.items = new Array(size); // Create a fixed-size array
        this.top = -1; // Initialize top index
    }
}
```

### **1.2 Basic Operations**

#### **Push Operation**

- Increment the top index and add the new element at that position.
- Handle overflow if the stack is full.

```javascript
push(element) {
    if (this.top === this.items.length - 1) {
        throw new Error('Stack Overflow'); // Handle overflow
    }
    this.items[++this.top] = element; // Add the element
}
```

#### **Pop Operation**

- Return the element at the top index and decrement the index.
- Handle underflow if the stack is empty.

```javascript
pop() {
    if (this.isEmpty()) {
        throw new Error('Stack Underflow'); // Handle underflow
    }
    return this.items[this.top--]; // Return and remove the top element
}
```

#### **Peek Operation**

- Return the top element without removing it.

```javascript
peek() {
    if (this.isEmpty()) {
        throw new Error('Stack is empty'); // Handle empty stack
    }
    return this.items[this.top]; // Return the top element
}
```

#### **Check if the Stack is Empty**

```javascript
isEmpty() {
    return this.top === -1; // Return true if stack is empty
}
```

### **1.3 Advantages and Disadvantages**

#### **Advantages**
- **Fast Access**: Array-based stacks offer fast access to elements since they are stored in contiguous memory locations.
- **Simple Implementation**: The implementation is straightforward and easy to understand.

#### **Disadvantages**
- **Fixed Size**: The stack size must be defined at the time of creation, leading to possible overflow if the stack grows beyond its size.
- **Memory Waste**: If the stack is not full, memory may be wasted, as the array reserves space regardless of how many elements are in the stack.

---

## **2. Linked List-Based Stack**

### **2.1 Implementation**

In a linked list-based stack, each element (node) contains the data and a reference (pointer) to the next node. The top of the stack is tracked using a pointer to the head of the linked list.

```javascript
class Node {
    constructor(data) {
        this.data = data; // Store data
        this.next = null; // Pointer to the next node
    }
}

class LinkedListStack {
    constructor() {
        this.top = null; // Initialize top to null
    }
}
```

### **2.2 Basic Operations**

#### **Push Operation**

- Create a new node and make it the new top node, pointing it to the previous top node.

```javascript
push(element) {
    const newNode = new Node(element); // Create a new node
    newNode.next = this.top; // Point to the previous top
    this.top = newNode; // Update top to new node
}
```

#### **Pop Operation**

- Remove the top node and return its data.

```javascript
pop() {
    if (this.isEmpty()) {
        throw new Error('Stack Underflow'); // Handle underflow
    }
    const poppedNode = this.top; // Get the top node
    this.top = this.top.next; // Update top to the next node
    return poppedNode.data; // Return the data of the popped node
}
```

#### **Peek Operation**

- Return the data of the top node without removing it.

```javascript
peek() {
    if (this.isEmpty()) {
        throw new Error('Stack is empty'); // Handle empty stack
    }
    return this.top.data; // Return the data of the top node
}
```

#### **Check if the Stack is Empty**

```javascript
isEmpty() {
    return this.top === null; // Return true if stack is empty
}
```

### **2.3 Advantages and Disadvantages**

#### **Advantages**
- **Dynamic Size**: The stack can grow and shrink dynamically, as nodes are created and destroyed as needed, without predefined limits.
- **No Wasted Memory**: Memory is used efficiently since only the required nodes are allocated.

#### **Disadvantages**
- **Extra Memory Usage**: Each node requires additional memory for storing pointers, which can lead to overhead.
- **Slower Access**: Accessing elements can be slower due to non-contiguous memory allocation and pointer traversal.

---

## **3. Summary of Implementations**

| **Aspect**              | **Array-Based Stack**               | **Linked List-Based Stack**       |
|-------------------------|-------------------------------------|-----------------------------------|
| **Memory Allocation**   | Fixed size                          | Dynamic size                      |
| **Memory Overhead**     | Less (no pointers)                 | More (pointers for each node)     |
| **Access Speed**        | Faster (contiguous memory)         | Slower (pointer traversal)        |
| **Implementation Ease** | Simple                             | More complex                      |
| **Overflow Handling**   | Can overflow if full               | No overflow; can grow indefinitely |

## **4. Conclusion**

Choosing between an array-based and a linked list-based stack depends on the specific use case. Array-based stacks are efficient for fixed sizes and simpler implementations, while linked list-based stacks are more flexible and prevent overflow. Understanding both implementations is crucial for selecting the right stack type for your application.
