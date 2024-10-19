# **Linked List Operations in JavaScript**

Linked lists support several key operations that allow for efficient manipulation of nodes. Here, we will cover the following operations:

- Insertion (adding nodes at the beginning, end, or specific index)
- Deletion (removing nodes from the beginning, end, or specific index)
- Traversal (iterating through nodes)

## **1. Insertion Operations**

### **1.1 Adding Nodes at the Beginning**

To insert a new node at the beginning of the linked list, you need to:

1. Create a new node.
2. Set the new node's `next` pointer to the current head.
3. Update the head to point to the new node.

#### **Insert at Beginning Example**

```javascript
insertAtBeginning(value) {
    const newNode = new Node(value);
    newNode.next = this.head; // Point new node to the current head
    this.head = newNode;      // Update head to the new node
    if (!this.tail) {
        this.tail = newNode; // Update tail if the list was empty
    }
    this.length++;           // Increment length
}
```

### **1.2 Adding Nodes at the End**

Inserting a node at the end involves:

1. Creating a new node.
2. If the list is empty, set the new node as both head and tail.
3. Otherwise, attach the new node to the end of the list and update the tail.

#### **Insert at End Example**

```javascript
insertAtEnd(value) {
    const newNode = new Node(value);
    if (!this.head) {
        this.head = newNode; // If the list is empty, set head and tail
        this.tail = newNode;
    } else {
        this.tail.next = newNode; // Attach new node to the end
        this.tail = newNode;       // Update the tail
    }
    this.length++;               // Increment length
}
```

### **1.3 Adding Nodes at a Specific Index**

To insert a node at a specific index, you need to:

1. Create a new node.
2. If the index is `0`, use the insert-at-beginning method.
3. If the index is greater than the length, return.
4. Traverse to the node just before the desired index and update pointers.

#### **Insert at Index Example**

```javascript
insertAtIndex(value, index) {
    if (index < 0 || index > this.length) return; // Validate index
    if (index === 0) return this.insertAtBeginning(value); // Insert at beginning

    const newNode = new Node(value);
    let current = this.head;

    for (let i = 0; i < index - 1; i++) {
        current = current.next; // Move to the node before the index
    }

    newNode.next = current.next; // Link the new node to the next node
    current.next = newNode;       // Link the previous node to the new node
    this.length++;                // Increment length
}
```

## **2. Deletion Operations**

### **2.1 Removing Nodes from the Beginning**

To remove the first node:

1. Check if the list is empty.
2. Update the head to the next node.
3. If the list becomes empty, update the tail to `null`.

#### **Remove from Beginning Example**

```javascript
removeFromBeginning() {
    if (!this.head) return null; // If the list is empty, do nothing
    const removedNode = this.head; // Store the head to return if needed
    this.head = this.head.next;     // Move head to the next node
    if (!this.head) {
        this.tail = null;           // If the list is now empty, set tail to null
    }
    this.length--;                  // Decrement length
    return removedNode.data;       // Return the data of the removed node
}
```

### **2.2 Removing Nodes from the End**

To remove the last node:

1. Check if the list is empty.
2. If there’s only one node, remove it and set head and tail to `null`.
3. Otherwise, traverse to the second-to-last node, update its `next` pointer to `null`, and update the tail.

#### **Remove from End Example**

```javascript
removeFromEnd() {
    if (!this.head) return null; // If the list is empty, do nothing
    if (this.head === this.tail) { // If there is only one node
        const removedNode = this.head; // Store the head to return if needed
        this.head = null; // Set head and tail to null
        this.tail = null;
        this.length--; // Decrement length
        return removedNode.data; // Return the data of the removed node
    }

    let current = this.head;
    while (current.next !== this.tail) {
        current = current.next; // Move to the second-to-last node
    }

    const removedNode = this.tail; // Store the tail to return if needed
    this.tail = current; // Update tail to the second-to-last node
    this.tail.next = null; // Set the new tail's next to null
    this.length--; // Decrement length
    return removedNode.data; // Return the data of the removed node
}
```

### **2.3 Removing Nodes at a Specific Index**

To delete a node at a specific index:

1. Check if the index is valid.
2. If the index is `0`, use the remove-from-beginning method.
3. If the index is greater than or equal to the length, return.
4. Traverse to the node just before the desired index and update pointers.

#### **Remove at Index Example**

```javascript
removeAtIndex(index) {
    if (index < 0 || index >= this.length) return null; // Validate index
    if (index === 0) return this.removeFromBeginning(); // Remove from beginning

    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
        current = current.next; // Move to the node before the index
    }

    const removedNode = current.next; // Store the node to return if needed
    current.next = removedNode.next; // Bypass the node to be removed
    if (removedNode === this.tail) {
        this.tail = current; // Update tail if the removed node was the last one
    }
    this.length--; // Decrement length
    return removedNode.data; // Return the data of the removed node
}
```

## **3. Traversal Operations**

Traversal involves visiting each node in the linked list to access or manipulate data.

### **3.1 Iterating Through Nodes**

You can use a loop to iterate through each node, starting from the head until you reach the end (when `next` is `null`).

#### **Traverse Example**

```javascript
traverse() {
    let current = this.head; // Start from the head
    while (current) {
        console.log(current.data); // Print the data of the current node
        current = current.next;     // Move to the next node
    }
}
```

## **4. Summary of Key Operations**

- **Insertion**:
  - At the beginning: O(1)
  - At the end: O(1) (if you maintain a tail pointer)
  - At a specific index: O(n)

- **Deletion**:
  - From the beginning: O(1)
  - From the end: O(n) (if you don’t maintain a tail pointer)
  - From a specific index: O(n)

- **Traversal**: O(n) for accessing each node.
