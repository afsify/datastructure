function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

let arr = [5, 2, 1, 6, 4];

console.log(quickSort(arr)); // Output: [1, 2, 4, 5, 6]

//! Worst Case = O(n^2)
//! Average Case = O(n log n)
