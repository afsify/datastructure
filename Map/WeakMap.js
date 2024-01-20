//! ========================================= WeakMap =========================================

// A WeakMap in JavaScript is a collection of key-value pairs where the keys must be objects,
// and it holds weak references to these keys. Unlike a regular Map, a WeakMap doesn't prevent
// its keys from being garbage collected. This makes it useful when you want to associate auxiliary
// data with objects without preventing those objects from being reclaimed when they are no longer used.

// Creating a WeakMap
const weakMap = new WeakMap();

// Creating some objects (keys)
let key1 = {};
let key2 = {};
let key3 = {};

// Adding key-value pairs to the WeakMap
weakMap.set(key1, "Value for key1");
weakMap.set(key2, "Value for key2");
weakMap.set(key3, "Value for key3");

// Retrieving values using keys
console.log(weakMap.get(key1)); // Output: 'Value for key1'

// Checking if a key is in the WeakMap
console.log(weakMap.has(key2)); // Output: true

// Removing a key-value pair from the WeakMap
weakMap.delete(key3);

// Checking again
console.log(weakMap.has(key3)); // Output: false
