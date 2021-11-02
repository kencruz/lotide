const findKeyByValue = require("../findKeyByValue");
const assert = require("chai").assert;

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

describe("#findKeyByValue", () => {
  it("should return 'drama'", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it("should return undefined", () => {
    assert.strictEqual(
      findKeyByValue(bestTVShowsByGenre, "That '70s Show"),
      undefined
    );
  });
});
