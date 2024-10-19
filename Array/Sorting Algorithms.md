# **Sorting Algorithms**

Sorting algorithms are methods for arranging the elements of a list or array in a certain order, typically in ascending or descending order. Understanding sorting algorithms is essential for optimizing search and data processing tasks.

## **1. Bubble Sort**

### **Overview**

Bubble Sort is a simple comparison-based sorting algorithm. It repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The process is repeated until the list is sorted.

### **Characteristics**

- **Time Complexity**: 
  - Best Case: \(O(n)\) (already sorted list)
  - Average Case: \(O(n^2)\)
  - Worst Case: \(O(n^2)\)
- **Space Complexity**: \(O(1)\) (in-place)
- **Stable**: Yes (maintains the relative order of equal elements)

### **Implementation in JavaScript**

```javascript
function bubbleSort(arr) {
  const n = arr.length;
  let swapped;

  for (let i = 0; i < n - 1; i++) {
    swapped = false;  // Track if a swap occurred in this iteration
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap arr[j] and arr[j + 1]
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    if (!swapped) break;  // Stop if the array is sorted
  }
  return arr;
}

const array = [5, 1, 4, 2, 8];
console.log(bubbleSort(array));  // Output: [1, 2, 4, 5, 8]
```

---

## **2. Merge Sort**

### **Overview**

Merge Sort is a divide-and-conquer algorithm that divides the array into halves, recursively sorts each half, and then merges the sorted halves back together.

### **Characteristics**

- **Time Complexity**: 
  - Best Case: \(O(n \log n)\)
  - Average Case: \(O(n \log n)\)
  - Worst Case: \(O(n \log n)\)
- **Space Complexity**: \(O(n)\) (requires additional storage)
- **Stable**: Yes

### **Implementation in JavaScript**

```javascript
function mergeSort(arr) {
  if (arr.length <= 1) return arr;  // Base case

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));  // Recursively sort left half
  const right = mergeSort(arr.slice(mid));     // Recursively sort right half

  return merge(left, right);  // Merge sorted halves
}

function merge(left, right) {
  const sortedArray = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      sortedArray.push(left[i]);
      i++;
    } else {
      sortedArray.push(right[j]);
      j++;
    }
  }

  return sortedArray.concat(left.slice(i)).concat(right.slice(j));  // Append remaining elements
}

const array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array));  // Output: [3, 9, 10, 27, 38, 43, 82]
```

---

## **3. Quick Sort**

### **Overview**

Quick Sort is another divide-and-conquer algorithm. It selects a 'pivot' element from the array, partitions the other elements into two sub-arrays according to whether they are less than or greater than the pivot, and then recursively sorts the sub-arrays.

### **Characteristics**

- **Time Complexity**: 
  - Best Case: \(O(n \log n)\) (balanced partition)
  - Average Case: \(O(n \log n)\)
  - Worst Case: \(O(n^2)\) (unbalanced partition, e.g., already sorted)
- **Space Complexity**: \(O(\log n)\) (in-place with recursion stack)
- **Stable**: No

### **Implementation in JavaScript**

```javascript
function quickSort(arr) {
  if (arr.length <= 1) return arr;  // Base case

  const pivot = arr[arr.length - 1];  // Choose the last element as pivot
  const left = [];                    // Elements less than pivot
  const right = [];                   // Elements greater than pivot

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);  // Add to left array
    } else {
      right.push(arr[i]); // Add to right array
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];  // Recursively sort and combine
}

const array = [10, 80, 30, 90, 40, 50, 70];
console.log(quickSort(array));  // Output: [10, 30, 40, 50, 70, 80, 90]
```

---

## **Comparison of Sorting Algorithms**

| Algorithm     | Time Complexity (Best) | Time Complexity (Average) | Time Complexity (Worst) | Space Complexity | Stable |
|---------------|------------------------|--------------------------|-------------------------|------------------|--------|
| Bubble Sort   | \(O(n)\)               | \(O(n^2)\)               | \(O(n^2)\)              | \(O(1)\)         | Yes    |
| Merge Sort    | \(O(n \log n)\)       | \(O(n \log n)\)         | \(O(n \log n)\)        | \(O(n)\)         | Yes    |
| Quick Sort    | \(O(n \log n)\)       | \(O(n \log n)\)         | \(O(n^2)\)             | \(O(\log n)\)    | No     |

---

## **Summary**

- **Bubble Sort**: Simple but inefficient for large datasets. Best for small or nearly sorted arrays.
- **Merge Sort**: Efficient and stable. Good for large datasets and linked lists.
- **Quick Sort**: Generally faster than other algorithms for average cases. Not stable, but efficient for in-place sorting.

These notes provide a comprehensive overview of sorting algorithms, including their implementations and comparisons. If you have further questions or need more examples, feel free to ask!
