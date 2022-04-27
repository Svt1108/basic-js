const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  let newArr = [];
  const err = new Error("'arr' parameter must be an instance of the Array!");

  if (!Array.isArray(arr)) throw err;

  let din = "--discard-next";
  let dip = "--discard-prev";
  let don = "--double-next";
  let dop = "--double-prev";

  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i] != din &&
      arr[i] != dip &&
      arr[i] != don &&
      arr[i] != dop &&
      arr[i] != "deleted"
    ) {
      newArr.push(arr[i]);
    }
    if (arr[i] == din && arr[i + 1]) arr[i + 1] = "deleted";
    if (arr[i] == dip && arr[i - 1] && arr[i - 1] != "deleted") newArr.pop();
    if (arr[i] == don && arr[i + 1]) newArr.push(arr[i + 1]);
    if (arr[i] == dop && arr[i - 1] != "deleted" && arr[i - 1])
      newArr.push(arr[i - 1]);
  }

  return newArr;
}

module.exports = {
  transform,
};

console.log(transform([1, 2, 3, "--double-next", 4, "--discard-prev", 5]));
