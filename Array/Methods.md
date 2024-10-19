# **Array Methods in JavaScript**

## **1. Push/Pop: Adding/Removing Elements from the End**

### **1.1 Push**

The `push()` method adds one or more elements to the **end** of an array and returns the new length of the array.

#### **Syntax:**

```javascript
array.push(element1, element2, ..., elementN);
```

#### **Example:**

```javascript
let fruits = ['Apple', 'Banana'];
fruits.push('Cherry', 'Orange');
console.log(fruits);  // Output: ['Apple', 'Banana', 'Cherry', 'Orange']
```

### **1.2 Pop**

The `pop()` method removes the last element from an array and returns that element. This method changes the length of the array.

#### **Syntax:**

```javascript
let lastElement = array.pop();
```

#### **Example:**

```javascript
let fruits = ['Apple', 'Banana', 'Cherry'];
let lastFruit = fruits.pop();
console.log(lastFruit);  // Output: 'Cherry'
console.log(fruits);     // Output: ['Apple', 'Banana']
```

---

## **2. Shift/Unshift: Adding/Removing Elements from the Beginning**

### **2.1 Shift**

The `shift()` method removes the first element from an array and returns that element. This method changes the length of the array.

#### **Syntax:**

```javascript
let firstElement = array.shift();
```

#### **Example:**

```javascript
let fruits = ['Apple', 'Banana', 'Cherry'];
let firstFruit = fruits.shift();
console.log(firstFruit);  // Output: 'Apple'
console.log(fruits);      // Output: ['Banana', 'Cherry']
```

### **2.2 Unshift**

The `unshift()` method adds one or more elements to the **beginning** of an array and returns the new length of the array.

#### **Syntax:**

```javascript
let newLength = array.unshift(element1, element2, ..., elementN);
```

#### **Example:**

```javascript
let fruits = ['Banana', 'Cherry'];
fruits.unshift('Apple');
console.log(fruits);  // Output: ['Apple', 'Banana', 'Cherry']
```

---

## **3. Slice/Splice: Extracting or Modifying Sections of the Array**

### **3.1 Slice**

The `slice()` method returns a shallow copy of a portion of an array into a new array object selected from `start` to `end` (end not included). The original array will not be modified.

#### **Syntax:**

```javascript
let newArray = array.slice(start, end);
```

#### **Example:**

```javascript
let fruits = ['Apple', 'Banana', 'Cherry', 'Date'];
let citrus = fruits.slice(1, 3);
console.log(citrus);  // Output: ['Banana', 'Cherry']
console.log(fruits);   // Output: ['Apple', 'Banana', 'Cherry', 'Date'] (original array unchanged)
```

### **3.2 Splice**

The `splice()` method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. It returns the removed elements.

#### **Syntax:**

```javascript
let removedElements = array.splice(start, deleteCount, element1, element2, ..., elementN);
```

#### **Example:**

```javascript
let fruits = ['Apple', 'Banana', 'Cherry'];
let removedFruits = fruits.splice(1, 1, 'Orange', 'Peach');  // Removes 'Banana' and adds 'Orange' and 'Peach'
console.log(removedFruits);  // Output: ['Banana']
console.log(fruits);          // Output: ['Apple', 'Orange', 'Peach', 'Cherry']
```

---

## **4. Map/Filter/Reduce: Functional Programming Methods**

### **4.1 Map**

The `map()` method creates a new array populated with the results of calling a provided function on every element in the calling array.

#### **Syntax:**

```javascript
let newArray = array.map(callback(currentValue[, index[, array]])[, thisArg]);
```

#### **Example:**

```javascript
let numbers = [1, 2, 3, 4];
let squares = numbers.map(num => num * num);
console.log(squares);  // Output: [1, 4, 9, 16]
```

### **4.2 Filter**

The `filter()` method creates a new array with all elements that pass the test implemented by the provided function.

#### **Syntax:**

```javascript
let newArray = array.filter(callback(element[, index[, array]])[, thisArg]);
```

#### **Example:**

```javascript
let numbers = [1, 2, 3, 4, 5];
let evens = numbers.filter(num => num % 2 === 0);
console.log(evens);  // Output: [2, 4]
```

### **4.3 Reduce**

The `reduce()` method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

#### **Syntax:**

```javascript
let result = array.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue]);
```

#### **Example:**

```javascript
let numbers = [1, 2, 3, 4];
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);  // Output: 10
```

---

## **Summary of Array Methods**

- **Push/Pop**: Use `push()` to add to the end and `pop()` to remove from the end.
- **Shift/Unshift**: Use `shift()` to remove from the beginning and `unshift()` to add to the beginning.
- **Slice/Splice**: Use `slice()` to extract sections without modifying the original array and `splice()` to modify the array (add/remove elements).
- **Map/Filter/Reduce**: Functional programming methods to transform (`map`), filter (`filter`), or reduce (`reduce`) an array to a single value.

---

These notes provide a comprehensive overview of essential array methods in JavaScript, along with clear examples to demonstrate their usage. If you have any questions or need further elaboration, feel free to ask!
