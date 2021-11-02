const letterPositions = (sentence) => {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    const character = sentence[i];
    if (character !== " ") {
      if (results[character]) {
        results[character].push(i);
      } else {
        results[character] = [i];
      }
    }
  }
  return results;
};

module.exports = letterPositions;
