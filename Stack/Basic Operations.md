# **Stack**

A **stack** is a linear data structure that follows the **Last In, First Out (LIFO)** principle. This means that the last element added to the stack will be the first one to be removed. Stacks are used in various applications, including function call management, expression evaluation, and backtracking algorithms.

## **1. Basic Operations of a Stack**

### **1.1 Creation: Initializing a Stack**

Stacks can be implemented using arrays or linked lists. Here’s how you can initialize a stack in JavaScript using an array:

```javascript
class Stack {
    constructor() {
        this.items = []; // Array to hold stack elements
    }
}
```

### **1.2 Push: Adding Elements to the Stack**

The `push` operation adds an element to the top of the stack. This operation has a time complexity of \(O(1)\).

```javascript
push(element) {
    this.items.push(element); // Add the element to the end of the array
}
```

**Example:**

```javascript
let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.items); // Output: [10, 20, 30]
```

### **1.3 Pop: Removing Elements from the Stack**

The `pop` operation removes the element from the top of the stack and returns it. If the stack is empty, it should handle that case appropriately. The time complexity for this operation is \(O(1)\).

```javascript
pop() {
    if (this.isEmpty()) {
        return null; // Handle empty stack
    }
    return this.items.pop(); // Remove and return the last element
}
```

**Example:**

```javascript
let stack = new Stack();
stack.push(10);
stack.push(20);
console.log(stack.pop()); // Output: 20
console.log(stack.items); // Output: [10]
```

### **1.4 Peek: Accessing the Top Element**

The `peek` operation returns the top element of the stack without removing it. This operation also has a time complexity of \(O(1)\).

```javascript
peek() {
    if (this.isEmpty()) {
        return null; // Handle empty stack
    }
    return this.items[this.items.length - 1]; // Return the last element
}
```

**Example:**

```javascript
let stack = new Stack();
stack.push(10);
stack.push(20);
console.log(stack.peek()); // Output: 20
console.log(stack.items); // Output: [10, 20]
```

### **1.5 Check if the Stack is Empty**

It's often useful to check if the stack is empty before performing pop or peek operations.

```javascript
isEmpty() {
    return this.items.length === 0; // Return true if stack is empty
}
```

**Example:**

```javascript
let stack = new Stack();
console.log(stack.isEmpty()); // Output: true
stack.push(10);
console.log(stack.isEmpty()); // Output: false
```

## **2. Summary of Stack Operations**

| **Operation** | **Description**                      | **Time Complexity** |
|---------------|--------------------------------------|---------------------|
| Creation      | Initializing the stack               | \(O(1)\)            |
| Push          | Adding an element to the top         | \(O(1)\)            |
| Pop           | Removing the top element             | \(O(1)\)            |
| Peek          | Accessing the top element            | \(O(1)\)            |
| Is Empty      | Checking if the stack is empty       | \(O(1)\)            |

## **3. Conclusion**

Stacks are a fundamental data structure used in various algorithms and applications. They provide efficient operations for adding, removing, and accessing elements based on the LIFO principle. Understanding how to implement and manipulate stacks is essential for solving problems that require a controlled access order to data.
