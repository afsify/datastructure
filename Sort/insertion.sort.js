function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = temp;
  }
  return arr;
}

const arr = [4, 1, 5, 3, 2];

console.log(insertionSort(arr)); // [ 1, 2, 3, 4, 5 ]

//! Big-O = O(n^2)
