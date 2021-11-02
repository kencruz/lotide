const letterPositions = require("../letterPositions");
const assert = require("chai").assert;

describe("#letterPositions", () => {
  const test = letterPositions("lighthouse in the house");
  it("should return [3, 5, 15, 18]", () => {
    assert.deepEqual(test["h"], [3, 5, 15, 18]);
  });
  it("should return [1, 11]", () => {
    assert.deepEqual(test["i"], [1, 11]);
  });
  it("should return [0]", () => {
    assert.deepEqual(test["l"], [0]);
  });
});
