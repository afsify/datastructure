//! ======================================= Monotonic Queue =======================================

// A monotonic queue is a data structure that maintains monotonicity within a queue. Monotonic queues
// are often used in scenarios where you need to efficiently keep track of either the maximum or
// minimum element in a sliding window of values.

//? Monotonic Queue Properties:

//* Monotonic Increasing Queue:
// Elements in the queue are in non-decreasing order.
// When pushing an element into the queue, elements with smaller values are dequeued from the back.

//* Monotonic Decreasing Queue:
// Elements in the queue are in non-increasing order.
// When pushing an element into the queue, elements with larger values are dequeued from the back.

//? Common Use Cases:

// Monotonic queues are useful in solving problems involving sliding windows,
// where you need to efficiently find the maximum or minimum element in the current window.

class MonotonicQueue {
  constructor() {
    this.queue = [];
  }

  push(value) {
    while (this.queue.length > 0 && this.queue[this.queue.length - 1] < value) {
      this.queue.pop();
    }
    this.queue.push(value);
  }

  pop() {
    if (this.queue.length > 0) {
      this.queue.shift();
    }
  }

  getMax() {
    return this.queue.length > 0 ? this.queue[0] : null;
  }
}

// Example Usage:
const nums = [1, 3, -1, -3, 5, 3, 6, 7];
const windowSize = 3;

const result = [];
const monoQueue = new MonotonicQueue();

for (let i = 0; i < nums.length; i++) {
  if (i >= windowSize) {
    result.push(monoQueue.getMax());
    monoQueue.pop();
  }
  monoQueue.push(nums[i]);
}

console.log(result); // Output: [3, 3, 5, 5, 6, 7]
