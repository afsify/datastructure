# **Collision Resolution in Hash Tables**

When two keys hash to the same index in a hash table, a collision occurs. Collision resolution methods help manage these situations to ensure that all entries can be stored and accessed efficiently.

---

## **1. Chaining**

### **Definition**
Chaining is a collision resolution technique where each index in the hash table points to a linked list (or another collection) of entries that hash to the same index. When a collision occurs, the new entry is simply added to the linked list at that index.

### **Characteristics**
- **Dynamic Size**: The linked lists can grow dynamically, allowing for an arbitrary number of entries at each index.
- **Simpler Implementation**: It’s often easier to implement since the structure can grow as needed without resizing the entire hash table.

### **Advantages**
- **Flexibility**: Handles collisions gracefully; the number of collisions doesn't directly affect the capacity of the hash table.
- **Ease of Use**: Adding and deleting items is straightforward; simply modify the linked list at the corresponding index.

### **Disadvantages**
- **Space Overhead**: Requires additional memory for pointers in the linked list.
- **Performance**: Performance can degrade if many collisions occur, leading to longer linked lists. The average time complexity for lookup is \(O(n/k)\), where \(n\) is the number of keys and \(k\) is the number of slots in the hash table.

### **Example Implementation in JavaScript**
Here’s a simple example of how chaining can be implemented:
```javascript
class HashTable {
    constructor(size) {
        this.size = size;
        this.table = new Array(size);
    }

    hash(key) {
        let hash = 0;
        for (let char of key) {
            hash += char.charCodeAt(0);
        }
        return hash % this.size;
    }

    set(key, value) {
        const index = this.hash(key);
        if (!this.table[index]) {
            this.table[index] = []; // Initialize as an array for chaining
        }
        // Check for existing key and update value
        for (let i = 0; i < this.table[index].length; i++) {
            if (this.table[index][i][0] === key) {
                this.table[index][i][1] = value;
                return;
            }
        }
        // Add new key-value pair
        this.table[index].push([key, value]);
    }

    get(key) {
        const index = this.hash(key);
        if (this.table[index]) {
            for (let [k, v] of this.table[index]) {
                if (k === key) {
                    return v;
                }
            }
        }
        return undefined; // Key not found
    }
}
```

---

## **2. Open Addressing**

### **Definition**
Open addressing is another collision resolution method where all entries are stored directly in the hash table itself. When a collision occurs, the algorithm searches for the next available slot (or entry) within the table according to a probing sequence.

### **Probing Methods**
- **Linear Probing**: If a collision occurs, check the next index sequentially until an empty slot is found. 
- **Quadratic Probing**: The next slot to check is determined using a quadratic function (e.g., \(index + i^2\), where \(i\) is the number of attempts).
- **Double Hashing**: A second hash function is used to determine the increment to the next slot, providing better distribution.

### **Advantages**
- **Space Efficiency**: No additional data structures are needed (like linked lists), resulting in less memory overhead.
- **Locality of Reference**: Data is stored contiguously, which can lead to better cache performance.

### **Disadvantages**
- **Clustering**: Can lead to primary clustering (a cluster of filled slots), which degrades performance.
- **Complex Deletion**: Removing an item can be complex, as it may disrupt the probing sequence; this usually requires additional logic to handle.

### **Performance**
- The average time complexity for lookup, insertion, and deletion can be \(O(1)\) under ideal conditions but can degrade to \(O(n)\) in the worst-case scenarios, particularly with clustering.

### **Example Implementation in JavaScript**
Here's a simple implementation of open addressing using linear probing:
```javascript
class OpenAddressingHashTable {
    constructor(size) {
        this.size = size;
        this.table = new Array(size);
        this.deleted = Symbol("deleted"); // Special marker for deleted entries
    }

    hash(key) {
        let hash = 0;
        for (let char of key) {
            hash += char.charCodeAt(0);
        }
        return hash % this.size;
    }

    set(key, value) {
        let index = this.hash(key);
        let originalIndex = index; // Store original index to avoid infinite loops
        let i = 0;

        while (this.table[index] !== undefined && this.table[index] !== this.deleted) {
            if (this.table[index][0] === key) {
                this.table[index][1] = value; // Update value
                return;
            }
            index = (originalIndex + ++i) % this.size; // Linear probing
        }
        this.table[index] = [key, value]; // Insert new key-value pair
    }

    get(key) {
        let index = this.hash(key);
        let originalIndex = index;
        let i = 0;

        while (this.table[index] !== undefined) {
            if (this.table[index] === this.deleted) {
                index = (originalIndex + ++i) % this.size; // Skip deleted entries
                continue;
            }
            if (this.table[index] && this.table[index][0] === key) {
                return this.table[index][1]; // Return value
            }
            index = (originalIndex + ++i) % this.size; // Linear probing
        }
        return undefined; // Key not found
    }

    delete(key) {
        let index = this.hash(key);
        let originalIndex = index;
        let i = 0;

        while (this.table[index] !== undefined) {
            if (this.table[index] === this.deleted) {
                index = (originalIndex + ++i) % this.size; // Skip deleted entries
                continue;
            }
            if (this.table[index] && this.table[index][0] === key) {
                this.table[index] = this.deleted; // Mark as deleted
                return true;
            }
            index = (originalIndex + ++i) % this.size; // Linear probing
        }
        return false; // Key not found
    }
}
```

---

## **Conclusion**
Collision resolution is a crucial aspect of hash table implementation. Chaining and open addressing are two primary methods, each with its own advantages and disadvantages. Choosing the appropriate method depends on the specific use case, expected load factors, and performance requirements. Understanding these techniques helps in designing efficient hash table implementations that can handle collisions effectively.
