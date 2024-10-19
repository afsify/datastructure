# **Objects in JavaScript**

In JavaScript, an **object** is a standalone entity that holds multiple values in the form of key-value pairs. Objects are used to store collections of data and more complex entities.

## **1. Basic Operations**

### **1.1 Creation**

#### **1.1.1 Object Literals**

Object literals are the simplest way to create objects. You can define an object using curly braces `{}` with key-value pairs.

**Syntax:**

```javascript
const person = {
  name: "Alice",
  age: 30,
  isStudent: false
};
```

**Example:**

```javascript
const car = {
  make: "Toyota",
  model: "Camry",
  year: 2022
};
```

#### **1.1.2 Constructors**

You can create an object using a constructor function. Constructors are regular functions that you can use to create multiple similar objects.

**Syntax:**

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.isStudent = false;
}

const person1 = new Person("Bob", 25);
const person2 = new Person("Charlie", 22);
```

**Example:**

```javascript
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

const car1 = new Car("Honda", "Civic", 2021);
```

#### **1.1.3 Classes**

ES6 introduced classes as syntactical sugar over constructor functions, providing a more structured way to create objects.

**Syntax:**

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.isStudent = false;
  }
}

const person3 = new Person("Diana", 28);
```

**Example:**

```javascript
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
}

const car2 = new Car("Ford", "Mustang", 2020);
```

---

### **1.2 Access**

You can access object properties using **dot notation** or **bracket notation**.

#### **1.2.1 Dot Notation**

Dot notation is the most common way to access object properties.

**Example:**

```javascript
const person = {
  name: "Eve",
  age: 35
};

console.log(person.name); // Output: Eve
console.log(person.age);  // Output: 35
```

#### **1.2.2 Bracket Notation**

Bracket notation allows you to access properties using strings or variables, making it useful for dynamic property access.

**Example:**

```javascript
const person = {
  name: "Frank",
  age: 40
};

console.log(person["name"]); // Output: Frank

const prop = "age";
console.log(person[prop]);    // Output: 40
```

---

### **1.3 Modification**

You can modify object properties by adding, updating, or deleting them.

#### **1.3.1 Adding Properties**

You can add new properties to an object using either dot or bracket notation.

**Example:**

```javascript
const person = {
  name: "Grace",
  age: 30
};

person.email = "grace@example.com";  // Adding a property
person["isStudent"] = true;           // Adding another property

console.log(person);
/*
Output:
{
  name: "Grace",
  age: 30,
  email: "grace@example.com",
  isStudent: true
}
*/
```

#### **1.3.2 Updating Properties**

You can update existing properties using dot or bracket notation.

**Example:**

```javascript
const person = {
  name: "Henry",
  age: 29
};

person.age = 30;              // Updating a property
person["name"] = "Harry";     // Updating another property

console.log(person);
/*
Output:
{
  name: "Harry",
  age: 30
}
*/
```

#### **1.3.3 Deleting Properties**

You can remove properties from an object using the `delete` operator.

**Example:**

```javascript
const person = {
  name: "Ivy",
  age: 32,
  email: "ivy@example.com"
};

delete person.email;          // Deleting a property

console.log(person);
/*
Output:
{
  name: "Ivy",
  age: 32
}
*/
```

---

## **Summary**

- **Creation**: Objects can be created using object literals, constructors, or classes.
- **Access**: Object properties can be accessed using dot notation or bracket notation.
- **Modification**: Properties can be added, updated, or deleted using straightforward assignment or the `delete` operator.

These notes provide a comprehensive overview of objects in JavaScript, covering their creation, access, and modification. If you need more examples or explanations, feel free to ask!
