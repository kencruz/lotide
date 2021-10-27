const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = (string) => {
  let count = {};
  for (const letter of string) {
    if (letter !== " ") {
      if (letter in count) {
        count[letter] += 1;
      } else {
        count[letter] = 1;
      }
    }
  }
  return count;
};

const test = "hello world";

const result1 = countLetters(test);

assertEqual(result1["l"], 3);
assertEqual(result1["h"], 1);
assertEqual(result1["z"], undefined);
