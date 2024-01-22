//! ======================================= Priority Queue =======================================

// A Priority Queue is a data structure that stores elements with associated priorities and allows
// elements to be retrieved based on their priority. In a priority queue, elements with higher
// priorities are dequeued before elements with lower priorities.

class PriorityQueue {
  constructor() {
    this.items = [];
  }

  enqueue(element, priority) {
    const queueElement = { element, priority };
    let added = false;
    for (let i = 0; i < this.items.length; i++) {
      if (priority < this.items[i].priority) {
        this.items.splice(i, 0, queueElement);
        added = true;
        break;
      }
    }
    if (!added) {
      this.items.push(queueElement);
    }
  }

  dequeue() {
    return this.items.shift();
  }

  peek() {
    return this.isEmpty() ? "Priority queue is empty" : this.items[0];
  }

  size() {
    return this.items.length;
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

// Example Usage:
const priorityQueue = new PriorityQueue();

priorityQueue.enqueue("Task 1", 3);
priorityQueue.enqueue("Task 2", 1);
priorityQueue.enqueue("Task 3", 2);

console.log(priorityQueue.peek()); // Output: { element: 'Task 2', priority: 1 }

priorityQueue.dequeue();
console.log(priorityQueue.size()); // Output: 2
