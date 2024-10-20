# **Hashtable**

A hashtable is a data structure that stores key-value pairs for efficient data retrieval. It uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found.

---

## **1. Basic Structure**

### **Key-Value Pairs**
- **Definition**: In a hashtable, data is stored as pairs of keys and values, allowing for efficient access to data using a unique identifier (the key).
  
- **Example**: Consider a simple hashtable storing information about users:
  - Key: "user123"
  - Value: { name: "Alice", age: 25, email: "alice@example.com" }

- **Characteristics**:
  - **Uniqueness**: Each key must be unique within the hashtable. If a duplicate key is added, it may either overwrite the existing value or cause an error, depending on the implementation.
  - **Access**: Values can be accessed or modified efficiently using their corresponding keys.

### **Hashtable Structure**

- **Components**:
  - **Array**: The underlying array where values are stored.
  - **Buckets**: Each index in the array can hold one or more key-value pairs, typically implemented as a linked list or another array (to handle collisions).

- **Example Structure**:
  ```plaintext
  Index | Key       | Value
  ----------------------------
  0     | "user123" | { name: "Alice", age: 25 }
  1     | "user456" | { name: "Bob", age: 30 }
  2     | "user789" | { name: "Charlie", age: 22 }
  ```

---

## **2. Hash Function**

### **Definition**
- A hash function is a function that takes an input (or "key") and produces a fixed-size string of bytes (typically an integer), which is usually a hash code or index used to determine where to store the associated value in the hashtable.

### **Characteristics of a Good Hash Function**:
- **Deterministic**: The same input should always produce the same output.
- **Uniform Distribution**: It should minimize collisions, meaning that it should spread keys evenly across the available indices.
- **Efficiency**: The function should be computationally efficient, providing a fast way to compute the hash value.

### **How Hash Functions Work**
1. **Input**: The key is passed to the hash function.
2. **Processing**: The hash function processes the key (e.g., by applying mathematical operations).
3. **Output**: The output is an index calculated as follows:
   ```javascript
   index = hashFunction(key) % arraySize;
   ```
   - Here, `arraySize` is the length of the underlying array to ensure the index is within bounds.

### **Collision Handling**
- **Collisions**: When two keys hash to the same index, a collision occurs.
- **Collision Resolution Strategies**:
  - **Chaining**: Store multiple key-value pairs at the same index using a linked list or another collection.
  - **Open Addressing**: Find another index within the array using a probing sequence (e.g., linear probing, quadratic probing) until an empty slot is found.

### **Example of a Simple Hash Function**:
Here's a basic hash function that sums the character codes of a string and returns an index:
```javascript
function simpleHash(key, arraySize) {
    let hash = 0;
    for (let char of key) {
        hash += char.charCodeAt(0);
    }
    return hash % arraySize; // Ensure the index is within bounds
}
```

### **Example of a Hashtable Implementation**:
Here is a basic implementation of a hashtable in JavaScript:
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
            this.table[index] = [];
        }
        // Check for existing key and update value
        for (let i = 0; i < this.table[index].length; i++) {
            if (this.table[index][i][0] === key) {
                this.table[index][i][1] = value;
                return;
            }
        }
        // If key does not exist, add new key-value pair
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

    delete(key) {
        const index = this.hash(key);
        if (this.table[index]) {
            for (let i = 0; i < this.table[index].length; i++) {
                if (this.table[index][i][0] === key) {
                    this.table[index].splice(i, 1); // Remove the key-value pair
                    return true;
                }
            }
        }
        return false; // Key not found
    }
}
```

---

## **Conclusion**
Hashtables are powerful data structures that provide fast access to data through key-value pairs. The hash function is essential for mapping keys to indices efficiently while managing potential collisions is crucial for maintaining performance. Understanding these concepts lays the foundation for implementing and utilizing hashtables in various applications.
