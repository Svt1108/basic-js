const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let num = 0;
  matrix.forEach((element) => {
    element.forEach((elem_inside) => {
      if (elem_inside === "^^") num++;
    });
  });
  return num;
}

module.exports = {
  countCats,
};

console.log(
  countCats([
    [0, 1, "^^"],
    [0, "^^", 2],
    ["^^", 1, 2],
  ])
);
