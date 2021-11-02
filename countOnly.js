// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function (allItems, itemsToCount) {
  let count = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (item in count) {
        count[item] += 1;
      } else {
        count[item] = 1;
      }
    }
  }
  return count;
};

module.exports = countOnly;
