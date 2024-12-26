// Write a function filterNumbers(arr) that returns only numbers from a mixed array

function filterNumbers(arr) {
  return arr.filter((items) => typeof items === "number");
}

// Write a function reverseArray(arr) that reverses the array
function reverseArray(arr) {
  return arr.reverse();
}

// Write a function findMax(arr) that returns the largest number in the array
function findMax(arr) {
  return Math.max(...arr);
}

// Write a function removeDuplicates(arr) that returns a new array with all duplicates removed
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

// Write a function flattenArray(arr) that takes a nested array and returns a single flattened array
function flattenArray(arr) {
  return arr.flat(Infinity);
}
