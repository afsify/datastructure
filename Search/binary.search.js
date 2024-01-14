function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const binarySearchResult = binarySearch(sortedArray, targetElement);
console.log(binarySearchResult); // Output: 4
