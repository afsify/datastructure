//! ======================================= Monotonic Stack =======================================

// A monotonic stack is a data structure, often implemented using a stack, that maintains the
// monotonicity property. In the context of a monotonic stack, monotonicity typically refers
// to either non-increasing or non-decreasing order.

//? Monotonic Stack Properties:

//* Monotonic Increasing Stack:
// Elements in the stack are in non-decreasing order.
// When pushing an element onto the stack, elements with smaller values are popped from the stack.

//* Monotonic Decreasing Stack:
// Elements in the stack are in non-increasing order.
// When pushing an element onto the stack, elements with larger values are popped from the stack.

//? Common Use Cases:

// Monotonic stacks are often used in algorithms where you need to find the next greater or smaller
// element for each element in an array.
// Applications include solving problems related to finding the nearest greater or smaller element,
// calculating the maximum area of histograms, and solving various monotonic queue problems.

function nextGreaterElements(nums) {
  const result = new Array(nums.length).fill(-1);
  const stack = [];

  for (let i = 0; i < nums.length; i++) {
    while (stack.length > 0 && nums[i] > nums[stack[stack.length - 1]]) {
      const index = stack.pop();
      result[index] = nums[i];
    }
    stack.push(i);
  }

  return result;
}

// Example Usage:
const inputArray = [4, 5, 2, 10, 8];
const nextGreaterElementsArray = nextGreaterElements(inputArray);
console.log(nextGreaterElementsArray); // Output: [5, 10, 10, -1, -1]
