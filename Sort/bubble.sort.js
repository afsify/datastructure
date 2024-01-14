function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}

const arr = [7, 2, 5, 3, 6];

console.log(bubbleSort(arr)); // [ 2, 3, 5, 6, 7 ]

//! Big-O = O(n^2)
