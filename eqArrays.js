const assertEqual = require("./assertEqual");
// FUNCTION IMPLEMENTATION

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

module.exports = eqArrays;
