const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = str.split("");
  let result = [];
  let N = 1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1]) N++;
    else {
      if (N == 1) result.push([arr[i]].join(""));
      else result.push([N, arr[i]].join(""));
      N = 1;
    }
  }

  return result.join("");
}

module.exports = {
  encodeLine,
};

console.log(encodeLine("aaaatttt"));
