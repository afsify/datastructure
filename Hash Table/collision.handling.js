//! ========================================= Collision Handling =========================================

// Collision handling is a crucial aspect of hash table implementation. Collisions occur when two or
// more keys hash to the same index in the hash table. There are several methods to handle collisions,
// and here are a few commonly used ones:

//? Separate Chaining:
// In separate chaining, each bucket in the hash table contains a linked list. When a collision occurs,
// new key-value pairs are appended to the linked list at the corresponding bucket.
{
  // Hash Table with Separate Chaining
  const hashTable = {
    0: { key: "a", value: 42 },
    1: { key: "b", value: 18 },
    2: { key: "c", value: 27 },
    3: [
      { key: "d", value: 39 },
      { key: "e", value: 56 },
    ],
    // ... other buckets
  };
}
// In this example, the bucket at index 3 contains a linked list to handle collisions.
// Keys 'd' and 'e' share the same index but are stored in a list.

//? Open Addressing (Linear Probing):
// In open addressing, when a collision occurs, the algorithm looks for the next available slot within the hash table.
// In linear probing, when a collision occurs, the algorithm searches for the next available slot linearly,
// moving to the next index until an empty slot is found.
{
  // Hash Table with Linear Probing
  const hashTable = {
    0: { key: "a", value: 42 },
    1: { key: "b", value: 18 },
    2: { key: "c", value: 27 },
    3: { key: "d", value: 39 }, // Collision at index 3
    4: { key: "e", value: 56 }, // Linear probing finds the next available slot
    // ... other slots
  };
}
// Here, when a collision occurs at index 3, linear probing searches for the next available slot,
// placing key 'e' at index 4.

//? Open Addressing (Quadratic Probing):
// Quadratic probing uses a quadratic function to determine the next slot during collisions,
// reducing clustering compared to linear probing.
{
  // Hash Table with Quadratic Probing
  const hashTable = {
    0: { key: "a", value: 42 },
    1: { key: "b", value: 18 },
    2: { key: "c", value: 27 },
    3: { key: "d", value: 39 }, // Collision at index 3
    7: { key: "e", value: 56 }, // Quadratic probing finds the next available slot
    // ... other slots
  };
}
// In this example, quadratic probing avoids placing key 'e' directly after 'd' by using
// a quadratic function to determine the next slot.

//? Open Addressing (Double Hashing):
// Double hashing involves using a secondary hash function to determine the step size
// during probing, offering better distribution of keys.
{
  // Hash Table with Double Hashing
  const hashTable = {
    0: { key: "a", value: 42 },
    1: { key: "b", value: 18 },
    2: { key: "c", value: 27 },
    5: { key: "d", value: 39 }, // Collision at index 5
    9: { key: "e", value: 56 }, // Double hashing finds the next available slot
    // ... other slots
  };
}
// Here, double hashing determines the step size using a secondary hash function, resulting
// in a better distribution of keys and avoiding immediate neighboring slots for collided keys.
