// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const areBothArrays = (el1, el2) => {
  return Array.isArray(el1) && Array.isArray(el2);
};

const XOR = (a, b) => {
  return (
    (Array.isArray(a) || Array.isArray(b)) &&
    !(Array.isArray(a) && Array.isArray(b))
  );
};

const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (areBothArrays(arr1[i], arr2[i])) {
      if (!eqArrays(arr1[i], arr2[i])) return false;
    } else if (!areBothArrays(arr1[i], arr2[i]) && XOR(arr1[i], arr2[i])) {
      return false;
    } else if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true); // => true

assertEqual(
  eqArrays(
    [[2, 3], [4]],
    [
      [2, 3],
      [4, 5],
    ]
  ),
  false
); // => false
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false); // => false
