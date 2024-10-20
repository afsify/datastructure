# **Hashtable Operations**

A hashtable allows for efficient storage and retrieval of key-value pairs through three primary operations: insertion, deletion, and search. These operations leverage the underlying hash function and collision resolution strategies to manage data effectively.

---

## **1. Insertion: Adding Key-Value Pairs**

### **Process**
- **Step 1**: Compute the hash code for the key using the hash function.
- **Step 2**: Determine the index by taking the modulus of the hash code with the size of the underlying array.
- **Step 3**: Insert the key-value pair at the computed index.
  - If the index is empty, simply add the pair.
  - If a collision occurs (i.e., the index already contains one or more key-value pairs):
    - **Chaining**: Append the new pair to the list of pairs at that index.
    - **Open Addressing**: Use probing to find the next available index.

### **Example**
```javascript
let hashTable = new HashTable(10); // Create a hashtable of size 10
hashTable.set("name", "Alice"); // Inserting key-value pair
hashTable.set("age", 25); // Inserting another key-value pair
hashTable.set("name", "Bob"); // Updating existing key
```

### **Time Complexity**
- **Average Case**: O(1) for insertion when the load factor is low.
- **Worst Case**: O(n) when many collisions occur (e.g., all keys map to the same index).

---

## **2. Deletion: Removing Key-Value Pairs**

### **Process**
- **Step 1**: Compute the hash code for the key using the hash function.
- **Step 2**: Determine the index.
- **Step 3**: Remove the key-value pair from the index:
  - If the index contains multiple pairs (in the case of chaining), search for the specific key and remove it.
  - If using open addressing, mark the slot as deleted, or use another technique to maintain the probing sequence.

### **Example**
```javascript
hashTable.delete("age"); // Removes the key-value pair for "age"
```

### **Time Complexity**
- **Average Case**: O(1) for deletion when the load factor is low.
- **Worst Case**: O(n) when many collisions occur or in the case of probing.

---

## **3. Search: Retrieving Values Based on Keys**

### **Process**
- **Step 1**: Compute the hash code for the key using the hash function.
- **Step 2**: Determine the index.
- **Step 3**: Retrieve the value:
  - If the index contains multiple pairs (due to chaining), iterate through the list to find the key and return its corresponding value.
  - For open addressing, follow the probing sequence until the key is found or an empty slot is reached.

### **Example**
```javascript
let name = hashTable.get("name"); // Retrieves the value for key "name"
console.log(name); // Outputs: "Bob"
```

### **Time Complexity**
- **Average Case**: O(1) for search when the load factor is low.
- **Worst Case**: O(n) when all keys collide and must be searched through.

---

## **Summary**
- **Insertion**, **deletion**, and **search** are fundamental operations in hashtables, each relying on the hash function to determine the appropriate index for the key-value pairs.
- Efficient management of collisions is critical for maintaining optimal performance across all operations.
- The average time complexity for these operations is O(1), but can degrade to O(n) in scenarios with many collisions. Understanding these operations helps in effectively utilizing hashtables for various applications.
