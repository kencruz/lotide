const middle = (arr) => {
  if (arr.length < 3) return [];

  const mid = Math.floor(arr.length / 2);

  if (arr.length % 2 === 0) {
    return arr.slice(mid - 1, mid + 1);
  } else {
    return [arr[mid]];
  }
};

module.exports = middle;
