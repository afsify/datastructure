//! ========================================= WeakSet =========================================

// A WeakSet in JavaScript is a collection of objects where the objects must be unique, and it holds
// weak references to these objects. Unlike a regular Set, a WeakSet doesn't prevent its elements
// from being garbage collected. This makes it useful when you want to associate auxiliary data
// with objects without preventing those objects from being reclaimed when they are no longer used.

// Creating a WeakSet
const weakSet = new WeakSet();

// Creating some objects
let obj1 = { key: "obj1" };
let obj2 = { key: "obj2" };
let obj3 = { key: "obj3" };

// Adding objects to the WeakSet
weakSet.add(obj1);
weakSet.add(obj2);
weakSet.add(obj3);

// Checking if an object is in the WeakSet
console.log(weakSet.has(obj1)); // Output: true

// Removing an object from the WeakSet
weakSet.delete(obj2);

// Checking again
console.log(weakSet.has(obj2)); // Output: false
