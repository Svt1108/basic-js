const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  let i;
  let j;

  for (j = 0; j < matrix[0].length; j++) sum = sum + matrix[0][j];

  for (i = 1; i < matrix.length; i++) {
    for (j = 0; j < matrix[0].length; j++) {
      if (matrix[i - 1][j] != 0) sum = sum + matrix[i][j];
      //      console.log(matrix[i][j]);
    }
  }

  return sum;
}

module.exports = {
  getMatrixElementsSum,
};

const matrix = [[1], [5], [0], [2]];
console.log(getMatrixElementsSum(matrix));
