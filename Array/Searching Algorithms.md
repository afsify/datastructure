# **Searching Algorithms in JavaScript**

Searching algorithms are used to find the location of an element within a data structure. The two common searching algorithms are **Linear Search** and **Binary Search**.

## **1. Linear Search**

### **1.1 Definition**

Linear search is the simplest searching algorithm. It sequentially checks each element of the array until a match is found or the end of the array is reached. It works on both sorted and unsorted arrays.

### **1.2 Time Complexity**

- **Best Case:** O(1) (element is found at the first position)
- **Average Case:** O(n) (element is found in the middle)
- **Worst Case:** O(n) (element is not found)

### **1.3 Implementation**

#### **Syntax:**

```javascript
function linearSearch(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i; // Return the index of the target element
        }
    }
    return -1; // Return -1 if the element is not found
}
```

#### **Example:**

```javascript
const numbers = [5, 3, 8, 4, 2];
const target = 4;
const index = linearSearch(numbers, target);

if (index !== -1) {
    console.log(`Element found at index ${index}`); // Output: Element found at index 3
} else {
    console.log('Element not found');
}
```

---

## **2. Binary Search**

### **2.1 Definition**

Binary search is a more efficient algorithm compared to linear search. It works on **sorted** arrays by repeatedly dividing the search interval in half. If the target value is less than the middle element, the search continues in the lower half; otherwise, it continues in the upper half.

### **2.2 Time Complexity**

- **Best Case:** O(1) (element is found at the middle position)
- **Average Case:** O(log n)
- **Worst Case:** O(log n) (element is not found)

### **2.3 Implementation**

#### **Syntax:**

```javascript
function binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2); // Find the middle index

        if (array[mid] === target) {
            return mid; // Return the index of the target element
        }
        if (array[mid] < target) {
            left = mid + 1; // Search in the right half
        } else {
            right = mid - 1; // Search in the left half
        }
    }
    return -1; // Return -1 if the element is not found
}
```

#### **Example:**

```javascript
const sortedNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 6;
const index = binarySearch(sortedNumbers, target);

if (index !== -1) {
    console.log(`Element found at index ${index}`); // Output: Element found at index 5
} else {
    console.log('Element not found');
}
```

---

## **3. Comparison Between Linear Search and Binary Search**

| Feature               | Linear Search                         | Binary Search                      |
|-----------------------|--------------------------------------|-----------------------------------|
| **Data Structure**    | Works on both sorted and unsorted arrays | Works only on sorted arrays       |
| **Time Complexity**   | O(n) (worst case)                   | O(log n) (worst case)            |
| **Space Complexity**  | O(1) (iterative version)            | O(1) (iterative version)          |
| **Implementation**    | Simple and easy to implement         | More complex but efficient        |

---

## **Summary**

- **Linear Search** checks each element in the array until it finds the target or reaches the end. It’s simple but not efficient for large datasets.
- **Binary Search** divides the search interval in half each time, making it much faster for sorted arrays, but it requires the array to be sorted beforehand.

These notes should give you a clear understanding of searching algorithms, specifically Linear Search and Binary Search, along with their implementations in JavaScript. If you have any questions or need further clarification, feel free to ask!
