//! ========================================= Hash Table =========================================

// Hash Tables are a data structure that allow you to create a list of paired values.
// You can then retrieve a certain value by using the key for that value, which you
// put into the table beforehand.

class HashTable {
  constructor() {
    this.table = {};
  }

  // Hash function to generate an index from a key
  hash(key) {
    let hashValue = 0;
    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }
    return hashValue % 100; // Modulo operation to limit the hash to a reasonable range
  }

  // Insert a key-value pair into the hash table
  insert(key, value) {
    const index = this.hash(key);
    if (!this.table[index]) {
      this.table[index] = {};
    }
    this.table[index][key] = value;
  }

  // Retrieve the value associated with a key from the hash table
  get(key) {
    const index = this.hash(key);
    return this.table[index] ? this.table[index][key] : undefined;
  }

  // Check if a key exists in the hash table
  contains(key) {
    const index = this.hash(key);
    return this.table[index] && key in this.table[index];
  }

  // Remove a key-value pair from the hash table
  remove(key) {
    const index = this.hash(key);
    if (this.table[index] && key in this.table[index]) {
      delete this.table[index][key];
    }
  }
}

// Example usage:
const myHashTable = new HashTable();
myHashTable.insert("name", "John");
myHashTable.insert("age", 25);

console.log(myHashTable.get("name")); // Output: John
console.log(myHashTable.contains("age")); // Output: true

myHashTable.remove("age");
console.log(myHashTable.contains("age")); // Output: false

// The load factor of a hash table is a measure of how full or empty it is.
// It's the ratio of the number of stored elements to the total number of slots in the table.
// A higher load factor means the table is more crowded, potentially leading to performance issues,
// while a lower load factor suggests there is more available space.
