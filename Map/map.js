//! ========================================== Map ==========================================

// A Map in JavaScript is a data structure that associates unique keys with corresponding values,
// allowing you to store and retrieve data efficiently.

// Creating a Map
const myMap = new Map();

// Adding key-value pairs to the Map
myMap.set("name", "Alice");
myMap.set(1, "One");
myMap.set({ key: "customObject" }, "Value for customObject");

// Retrieving values from the Map
console.log(myMap.get("name")); // Output: 'Alice'
console.log(myMap.get(1)); // Output: 'One'

// Checking if a key exists in the Map
console.log(myMap.has(2)); // Output: false

// Deleting a key-value pair from the Map
myMap.delete("name");

// Iterating over the Map
myMap.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

//? set(key, value): Adds a new key-value pair to the map.
myMap.set("age", 30);

//? get(key): Retrieves the value associated with a specified key.
console.log(myMap.get("age")); // Output: 30

//? has(key): Checks if a key exists in the map.
console.log(myMap.has("name")); // Output: false (after deleting 'name')

//? delete(key): Removes a key-value pair from the map.
myMap.delete("age");
