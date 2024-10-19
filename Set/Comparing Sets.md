# **Comparing Sets in JavaScript**

While JavaScript does not have built-in methods for comparing sets directly, you can create functions to perform various operations like checking equality, finding the union, and finding the intersection of two sets. Below are detailed explanations and examples for each operation.

## **1. Checking Equality of Sets**

To check if two sets are equal, both sets must contain the same elements. Since sets are unique collections, two sets can be considered equal if they have the same size and contain the same elements.

### **1.1 Function to Check Equality**

You can create a function to check if two sets are equal:

```javascript
function areSetsEqual(setA, setB) {
    if (setA.size !== setB.size) {
        return false; // Different sizes mean they can't be equal
    }
    
    for (let item of setA) {
        if (!setB.has(item)) {
            return false; // If an item in setA is not in setB, they are not equal
        }
    }
    
    return true; // Sets are equal
}
```

### **Example:**

```javascript
const set1 = new Set([1, 2, 3]);
const set2 = new Set([3, 2, 1]);
const set3 = new Set([1, 2, 3, 4]);

console.log(areSetsEqual(set1, set2)); // Output: true
console.log(areSetsEqual(set1, set3)); // Output: false
```

## **2. Finding the Union of Sets**

The union of two sets is a new set containing all unique elements from both sets. To find the union, you can iterate through both sets and add all elements to a new set.

### **2.1 Function to Find the Union**

```javascript
function union(setA, setB) {
    const resultSet = new Set(setA); // Start with elements from setA
    
    for (let item of setB) {
        resultSet.add(item); // Add elements from setB
    }
    
    return resultSet; // Return the new set containing the union
}
```

### **Example:**

```javascript
const setA = new Set([1, 2, 3]);
const setB = new Set([3, 4, 5]);

const unionSet = union(setA, setB);
console.log(unionSet); // Output: Set { 1, 2, 3, 4, 5 }
```

## **3. Finding the Intersection of Sets**

The intersection of two sets is a new set containing only the elements that are present in both sets.

### **3.1 Function to Find the Intersection**

```javascript
function intersection(setA, setB) {
    const resultSet = new Set();
    
    for (let item of setA) {
        if (setB.has(item)) {
            resultSet.add(item); // Add the item to the result if it's in both sets
        }
    }
    
    return resultSet; // Return the new set containing the intersection
}
```

### **Example:**

```javascript
const setX = new Set([1, 2, 3, 4]);
const setY = new Set([3, 4, 5, 6]);

const intersectionSet = intersection(setX, setY);
console.log(intersectionSet); // Output: Set { 3, 4 }
```

## **4. Summary of Set Comparison Operations**

| Operation               | Description                                                   | Example                         |
|-------------------------|---------------------------------------------------------------|---------------------------------|
| **Equality Check**      | Checks if two sets have the same elements.                  | `areSetsEqual(set1, set2)`     |
| **Union**               | Combines all unique elements from both sets into a new set. | `union(setA, setB)`            |
| **Intersection**        | Creates a new set with elements common to both sets.        | `intersection(setX, setY)`     |

## **5. Additional Operations**

- **Difference**: You can also find the difference between two sets, which includes elements that are in the first set but not in the second.

### **Function to Find the Difference:**

```javascript
function difference(setA, setB) {
    const resultSet = new Set();
    
    for (let item of setA) {
        if (!setB.has(item)) {
            resultSet.add(item); // Add the item only if it's not in setB
        }
    }
    
    return resultSet; // Return the new set containing the difference
}
```

### **Example:**

```javascript
const diffSet = difference(setX, setY);
console.log(diffSet); // Output: Set { 1, 2 }
```
