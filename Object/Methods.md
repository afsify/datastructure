# **Object Methods in JavaScript**

JavaScript provides several built-in methods to interact with objects. Three of the most commonly used methods are `Object.keys()`, `Object.values()`, and `Object.entries()`. These methods help retrieve keys, values, and key-value pairs from objects, respectively.

## **1. Object.keys()**

### **Description**

The `Object.keys()` method returns an array of a given object's own enumerable property names (keys). This method is useful when you want to retrieve just the keys from an object.

### **Syntax**

```javascript
Object.keys(obj)
```

- **Parameters**: `obj` - The object from which to retrieve keys.
- **Returns**: An array of strings representing the keys of the object.

### **Example**

```javascript
const person = {
  name: "Alice",
  age: 30,
  isStudent: false
};

const keys = Object.keys(person);
console.log(keys); // Output: ["name", "age", "isStudent"]
```

### **Usage**

- Useful for iterating over object keys.
- Can be combined with array methods (e.g., `forEach`, `map`) to process keys.

### **Example with Iteration**

```javascript
Object.keys(person).forEach(key => {
  console.log(`Key: ${key}, Value: ${person[key]}`);
});
/*
Output:
Key: name, Value: Alice
Key: age, Value: 30
Key: isStudent, Value: false
*/
```

---

## **2. Object.values()**

### **Description**

The `Object.values()` method returns an array of a given object's own enumerable property values. This is useful when you want to retrieve just the values stored in an object.

### **Syntax**

```javascript
Object.values(obj)
```

- **Parameters**: `obj` - The object from which to retrieve values.
- **Returns**: An array of the object's property values.

### **Example**

```javascript
const person = {
  name: "Bob",
  age: 25,
  isStudent: true
};

const values = Object.values(person);
console.log(values); // Output: ["Bob", 25, true]
```

### **Usage**

- Useful for quickly obtaining the values of an object.
- Can be combined with array methods to process values.

### **Example with Iteration**

```javascript
Object.values(person).forEach(value => {
  console.log(`Value: ${value}`);
});
/*
Output:
Value: Bob
Value: 25
Value: true
*/
```

---

## **3. Object.entries()**

### **Description**

The `Object.entries()` method returns an array of a given object's own enumerable property [key, value] pairs. This method is useful when you need both the keys and values together.

### **Syntax**

```javascript
Object.entries(obj)
```

- **Parameters**: `obj` - The object from which to retrieve entries.
- **Returns**: An array of the object's own enumerable string-keyed property [key, value] pairs.

### **Example**

```javascript
const person = {
  name: "Charlie",
  age: 28,
  isStudent: false
};

const entries = Object.entries(person);
console.log(entries); 
/*
Output: 
[
  ["name", "Charlie"],
  ["age", 28],
  ["isStudent", false]
]
```

### **Usage**

- Useful for iterating over both keys and values simultaneously.
- Can be used in conjunction with array methods to transform or process key-value pairs.

### **Example with Iteration**

```javascript
Object.entries(person).forEach(([key, value]) => {
  console.log(`Key: ${key}, Value: ${value}`);
});
/*
Output:
Key: name, Value: Charlie
Key: age, Value: 28
Key: isStudent, Value: false
*/
```

---

## **Summary**

- **`Object.keys(obj)`**: Retrieves an array of keys from the object.
- **`Object.values(obj)`**: Retrieves an array of values from the object.
- **`Object.entries(obj)`**: Retrieves an array of [key, value] pairs from the object.

These methods provide essential functionality for interacting with and manipulating JavaScript objects effectively. If you need further examples or clarifications, let me know!
