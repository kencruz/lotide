const countLetters = require("../countLetters.js");
const assert = require("chai").assert;

const test = "hello world";

const result1 = countLetters(test);

describe("#countLetters", () => {
  it("should return 1", () => {
    assert.strictEqual(result1["h"], 1);
  });
  it("should return 3", () => {
    assert.strictEqual(result1["l"], 3);
  });
  it("should return undefined", () => {
    assert.strictEqual(result1["z"], undefined);
  });
});
