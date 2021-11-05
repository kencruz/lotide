const assertEqual = require("../assertEqual");
const eqObjects = require("../eqObjects");
const assert = require("chai").assert;

describe("#eqObjects", () => {
  const ab = { a: "1", b: "2" };
  const ba = { b: "2", a: "1" };
  const abc = { a: "1", b: "2", c: "3" };
  const cd = { c: "1", d: ["2", 3] };
  const dc = { d: ["2", 3], c: "1" };
  const cd2 = { c: "1", d: ["2", 3, 4] };
  it("should return true with equal objects", () => {
    assert.isTrue(eqObjects(ab, ba), true);
  });

  it("should return false with inequal objects", () => {
    assert.isFalse(eqObjects(abc, ba), true);
  });

  it("should return true with equal objects with array values", () => {
    assert.isTrue(eqObjects(cd, dc), true); // => true
  });

  it("should return false with inequal objects with array values", () => {
    assert.isFalse(eqObjects(cd, cd2), false); // => false
  });

  it("should return true with equal nested objects", () => {
    assert.isTrue(
      eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }),
      true
    ); // => true
  });

  it("should return false with inequal nested objects", () => {
    assert.isFalse(
      eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }),
      false
    ); // => false
  });

  it("should return false with inequal nested objects", () => {
    assert.isFalse(
      eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }),
      false
    ); // => false
  });
});
