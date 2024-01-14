function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const targetElement = 5;
const linearSearchResult = linearSearch(array, targetElement);
console.log(linearSearchResult); // Output: 4
