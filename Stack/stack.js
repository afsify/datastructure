class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
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

const stack = new Stack();
console.log(stack.isEmpty()); // true
stack.push(20);
stack.push(10);
stack.push(30);
console.log(stack.size()); // 3
stack.print(); // 20,10,30
console.log(stack.pop()); // 30
console.log(stack.peek()); // 10
