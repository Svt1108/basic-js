const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let num = 1;
    // let arr1 = [];
    // arr1 = Array.from(arr);

    arr.forEach((element) => {
      if (Array.isArray(element)) {
        num = Math.max(num, this.calculateDepth(element) + 1);
      }
    });
    return num;
  }
}

module.exports = {
  DepthCalculator,
};

//console.log(calculateDepth([1, 2, 3, [4, 5, [[7]]], [[8]]]));
