//! ========================================= Set =========================================

// A Set in JavaScript is a data structure that stores unique values,
// allowing you to efficiently manage a collection of elements with no duplicates.

// Creating a Set
const mySet = new Set();

// Adding elements to the Set
mySet.add(1);
mySet.add("Hello");
mySet.add(true);
mySet.add({ name: "Alice" });

// Adding a duplicate element (ignored because Sets only store unique values)
mySet.add(1);

console.log(mySet);
// Output: Set { 1, 'Hello', true, { name: 'Alice' } }

// Iterating over the Set using forEach
mySet.forEach((value) => {
  console.log(value);
});

//? add(value): Adds a new unique element to the set.
mySet.add(5);

//? delete(value): Removes a specified element from the set.
mySet.delete("Hello");

//? has(value): Checks if a specific value is present in the set.
console.log(mySet.has(true)); // Output: true

//? size: Returns the number of elements in the set.
console.log(mySet.size); // Output: 4

//? clear(): Removes all elements from the set.
mySet.clear();
