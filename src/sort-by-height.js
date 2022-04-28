const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let arr1 = []; //array with '-1' on their places
  let arr2 = []; //array to sort

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == -1) arr1[i] = arr[i];
    else arr1[i] = "";
  }

  arr2 = arr.filter((item) => item != -1).sort((a, b) => a - b);

  for (let i = arr1.length - 1; i >= 0; i--) {
    if (arr1[i] != -1) arr1[i] = arr2.pop();
  }

  return arr1;
}

module.exports = {
  sortByHeight,
};

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));
