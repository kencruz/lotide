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

module.exports = countLetters;
