// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const flatten = (arr) => {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        output.push(arr[i][j]);
      }
    } else {
      output.push(arr[i]);
    }
  }
  return output;
};

// TEST CODE
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // => true
