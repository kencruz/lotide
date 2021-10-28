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

const words = ["ground", "control", "to", "major", "tom"];

const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

assertArraysEqual(
  map(words, (x) => x[0]),
  ["g", "c", "t", "m", "t"]
);
assertArraysEqual(
  map(words, (x) => x.length),
  [6, 7, 2, 5, 3]
);
assertArraysEqual(
  map(words, (x) => x.split("").reverse().join("")),
  ["dnuorg", "lortnoc", "ot", "rojam", "mot"]
);
