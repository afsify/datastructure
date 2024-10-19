# **Object.assign()**

The `Object.assign()` method is a built-in function in JavaScript that is used to copy the values of all enumerable properties from one or more source objects to a target object. It can also be used to merge multiple objects into one.

## **1. Description**

- **Purpose**: The main purpose of `Object.assign()` is to copy properties from source objects to a target object. If the same property exists in both the target and source objects, the value from the source will overwrite the value in the target.
  
- **Syntax**: 

```javascript
Object.assign(target, ...sources)
```

### **Parameters**

- **target**: The object to which properties will be copied.
- **...sources**: One or more source objects from which properties will be copied.

### **Returns**

- The modified target object.

## **2. Basic Usage**

### **Example: Copying Properties**

```javascript
const target = { a: 1 };
const source = { b: 2, c: 3 };

const result = Object.assign(target, source);

console.log(result); // Output: { a: 1, b: 2, c: 3 }
console.log(target); // Output: { a: 1, b: 2, c: 3 } (target is modified)
```

### **Example: Merging Objects**

You can merge multiple objects into a single target object.

```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const obj3 = { d: 5 };

const merged = Object.assign({}, obj1, obj2, obj3);

console.log(merged); // Output: { a: 1, b: 3, c: 4, d: 5 }
```

In this example, `obj1`, `obj2`, and `obj3` are merged into a new object. Note that the value of property `b` from `obj2` overwrites the value from `obj1`.

## **3. Overwriting Properties**

If multiple sources have the same property, the last one will take precedence.

### **Example: Overwriting Properties**

```javascript
const defaultSettings = {
  volume: 50,
  brightness: 70,
};

const userSettings = {
  volume: 80,
};

const finalSettings = Object.assign({}, defaultSettings, userSettings);

console.log(finalSettings); // Output: { volume: 80, brightness: 70 }
```

In this example, the `volume` property from `userSettings` overwrites the same property in `defaultSettings`.

## **4. Cloning Objects**

You can use `Object.assign()` to create a shallow copy of an object.

### **Example: Cloning an Object**

```javascript
const original = { x: 1, y: 2 };
const clone = Object.assign({}, original);

console.log(clone); // Output: { x: 1, y: 2 }
console.log(clone === original); // Output: false (different references)
```

### **Important Note**

- **Shallow Copy**: `Object.assign()` creates a shallow copy of the source object. This means that if the source object contains nested objects, the nested objects are copied by reference. Changes to nested objects in the copied object will affect the original object.

```javascript
const original = { x: 1, y: { z: 2 } };
const clone = Object.assign({}, original);

clone.y.z = 3;

console.log(original.y.z); // Output: 3 (changed because of reference)
```

## **5. Handling Non-Enumerable Properties**

`Object.assign()` only copies enumerable and own properties from a source object. Non-enumerable properties and properties in the prototype chain are not copied.

### **Example: Non-Enumerable Properties**

```javascript
const obj = Object.create({}, {
  hidden: {
    value: 42,
    enumerable: false,
  },
  visible: {
    value: 100,
    enumerable: true,
  },
});

const result = Object.assign({}, obj);

console.log(result); // Output: { visible: 100 }
console.log(result.hidden); // Output: undefined
```

## **6. Summary**

- **`Object.assign(target, ...sources)`**:
  - Merges properties from one or more source objects into a target object.
  - Returns the target object.
  - Performs a shallow copy of properties.
  - Overwrites properties in the target object if they already exist.
  - Only copies enumerable and own properties.

### **Usage Scenarios**

- Merging configuration objects.
- Cloning objects for state management in frameworks.
- Creating immutable updates in applications.

Feel free to ask if you need further clarification or examples!
