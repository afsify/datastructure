class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    return this.items.shift();
  }

  peek() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.toString());
  }
}

const queue = new Queue();
console.log(queue.isEmpty()); // true
queue.enqueue(20);
queue.enqueue(10);
queue.enqueue(30);
console.log(queue.size()); // 3
queue.print(); // 20,10,30
console.log(queue.dequeue()); // 20
console.log(queue.peek()); // 10
