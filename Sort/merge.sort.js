function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let middleIndex = Math.floor(arr.length / 2);
  let left = arr.slice(0, middleIndex);
  let right = arr.slice(middleIndex);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  return result.concat(left.slice().concat(right.slice()));
}

let arr = [5, 2, 1, 6, 4];

console.log(mergeSort(arr)); // Output: [1, 2, 4, 5, 6]

//! Big-O = O(n log n)
