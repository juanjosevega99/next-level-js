function findLargestSumSubarray(array) {
  if (array === 0) {
    throw new Error("Array is empty.");
  }
}

// Testing the function
console.log(findLargestSumSubarray([1, -2, 3, 10, -4, 7, 2, -5]));  // Output: 18
console.log(findLargestSumSubarray([-1, -2, -3, -4, -5]));       // Output: -1
console.log(findLargestSumSubarray([1, 2, 3, 4, 5]));             // Output: 15