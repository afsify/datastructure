//! ================================== Double-Ended Queue (Deque) ==================================

// It allows elements to be inserted or removed from both ends, the front and the rear.
// It combines the properties of both a stack (last-in, first-out) and a queue (first-in, first-out).

class Deque {
  constructor() {
    this.items = [];
  }

  // Add element to the front
  addFront(element) {
    this.items.unshift(element);
  }

  // Add element to the rear
  addRear(element) {
    this.items.push(element);
  }

  // Remove element from the front
  removeFront() {
    if (this.isEmpty()) {
      return "Deque is empty";
    }
    return this.items.shift();
  }

  // Remove element from the rear
  removeRear() {
    if (this.isEmpty()) {
      return "Deque is empty";
    }
    return this.items.pop();
  }

  // Check if the deque is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Get the size of the deque
  size() {
    return this.items.length;
  }

  // Peek at the front element without removing it
  front() {
    return this.isEmpty() ? "Deque is empty" : this.items[0];
  }

  // Peek at the rear element without removing it
  rear() {
    return this.isEmpty()
      ? "Deque is empty"
      : this.items[this.items.length - 1];
  }
}

// Example Usage:
const deque = new Deque();

deque.addRear(10);
deque.addRear(20);
deque.addFront(5);

console.log(deque.front()); // Output: 5
console.log(deque.rear()); // Output: 20

deque.removeFront();
console.log(deque.size()); // Output: 2

deque.removeRear();
console.log(deque.isEmpty()); // Output: false
