const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let arr1 = s1.split("");
  let arr2 = s2.split("");
  let num = 0;
  let i = 0;

  arr1.forEach((element) => {
    if (arr2.includes(element)) {
      num++;
      i = arr2.indexOf(element);
      arr2.splice(i, 1);
      //    console.log(i);
    }
  });

  return num;
}

module.exports = {
  getCommonCharacterCount,
};

console.log(getCommonCharacterCount("aabcc", "adcaa"));
