# **Encapsulation in JavaScript Using Closures**

**Encapsulation** is a fundamental concept in object-oriented programming that restricts access to certain details of an object and exposes only the necessary parts. In JavaScript, one way to achieve encapsulation is through **closures**, allowing the creation of private properties that cannot be accessed directly from outside the function.

## **1. Understanding Closures**

### **1.1 Definition of Closures**

A **closure** is a function that retains access to its lexical scope, even when the function is executed outside that scope. This means that a closure can "remember" the environment in which it was created, allowing for private variables.

### **1.2 Example of a Closure**

```javascript
function outerFunction() {
  let privateVariable = "I am private";

  function innerFunction() {
    console.log(privateVariable); // Accessing the private variable
  }

  return innerFunction; // Returning the inner function
}

const myClosure = outerFunction(); // outerFunction is executed, returning innerFunction
myClosure(); // Output: I am private
```

In this example, `privateVariable` is a private variable accessible only within `innerFunction`. 

---

## **2. Encapsulation with Closures**

### **2.1 Creating Private Properties**

To encapsulate properties using closures, you can create an outer function that contains private variables and return methods to manipulate those variables.

**Example:**

```javascript
function createCounter() {
  let count = 0; // Private variable

  return {
    increment: function() {
      count++;
      console.log(count);
    },
    decrement: function() {
      count--;
      console.log(count);
    },
    getCount: function() {
      return count; // Method to access the private variable
    }
  };
}

const counter = createCounter();
counter.increment(); // Output: 1
counter.increment(); // Output: 2
console.log(counter.getCount()); // Output: 2
counter.decrement(); // Output: 1
```

In this example, `count` is a private property of the `createCounter` function and cannot be accessed directly from outside. Only the returned methods can manipulate it.

### **2.2 Preventing Direct Access**

By using closures, you can prevent direct access to the private properties, ensuring that they can only be modified through defined methods.

**Example:**

```javascript
const bankAccount = (function() {
  let balance = 1000; // Private property

  return {
    deposit: function(amount) {
      balance += amount;
      console.log(`Deposited: $${amount}`);
    },
    withdraw: function(amount) {
      if (amount <= balance) {
        balance -= amount;
        console.log(`Withdrew: $${amount}`);
      } else {
        console.log('Insufficient funds');
      }
    },
    getBalance: function() {
      return balance; // Accessing the private property
    }
  };
})();

bankAccount.deposit(500); // Output: Deposited: $500
console.log(bankAccount.getBalance()); // Output: 1500
bankAccount.withdraw(200); // Output: Withdrew: $200
console.log(bankAccount.getBalance()); // Output: 1300

// Attempting to access the private property directly
console.log(bankAccount.balance); // Output: undefined
```

In this case, `balance` cannot be accessed directly from outside the `bankAccount` function, ensuring the integrity of the data.

---

## **3. Benefits of Using Closures for Encapsulation**

1. **Data Protection**: By keeping certain properties private, you protect them from being inadvertently modified or accessed.
2. **Controlled Access**: You can define methods that control how the private data is accessed or modified.
3. **Modularity**: Encapsulation makes code easier to manage, allowing for modularity and separation of concerns.

## **4. Summary**

- **Encapsulation** in JavaScript can be achieved using **closures**, allowing for the creation of private properties.
- A closure retains access to its lexical scope, enabling private variables to be accessed only by inner functions.
- This technique promotes data protection, controlled access, and modularity in code design.

By using closures for encapsulation, you can create robust and secure JavaScript applications. If you have further questions or need additional examples, feel free to ask!
