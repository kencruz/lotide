const map = require("../map");
const assert = require("chai").assert;

describe("#map", () => {
  const words = ["ground", "control", "to", "major", "tom"];
  it("should return ['dnuorg', 'lortnoc', 'kt', 'rojam', 'mot']", () => {
    assert.deepEqual(
      map(words, (x) => x.split("").reverse().join("")),
      ["dnuorg", "lortnoc", "ot", "rojam", "mot"]
    );
  });
  it("should return [6, 7, 2, 5, 3]", () => {
    assert.deepEqual(
      map(words, (x) => x.length),
      [6, 7, 2, 5, 3]
    );
  });
  it("should return ['g', 'c', 't', 'm', 't']", () => {
    assert.deepEqual(
      map(words, (x) => x[0]),
      ["g", "c", "t", "m", "t"]
    );
  });
});
