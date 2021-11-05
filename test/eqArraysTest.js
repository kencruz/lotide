const eqArrays = require("../eqArrays");
const assertEqual = require("../assertEqual");
const assert = require("chai").assert;

describe("#eqArrays", () => {
  it("should return true for equal arrays", () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("should return false for inequal arrays", () => {
    assert.isFalse(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });
  it("should return true for equal arrays", () => {
    assert.isTrue(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
  });
  it("should return false for inequal arrays", () => {
    assert.isFalse(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });
  it("should return true for equal nested arrays", () => {
    assert.isTrue(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
  });
  it("should return false for inequal nested arrays", () => {
    assert.isFalse(
      eqArrays(
        [[2, 3], [4]],
        [
          [2, 3],
          [4, 5],
        ]
      ),
      false
    );
  });
  it("should return false for inequal nested arrays", () => {
    assert.isFalse(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);
  });
});
