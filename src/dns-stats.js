const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let pos = 0;
  let temp = [];
  domains.forEach((element) => {
    pos = 0;
    temp.push("." + element);

    while (1) {
      let index = element.indexOf(".", pos);
      if (index < 0) break;
      let subElement = element.slice(index);
      temp.push(subElement);
      pos = pos + index + 1;
      if (pos >= element.length) break;
    }
  });

  let arr1;
  let arr2 = [];
  temp.forEach((element) => {
    let arr = element.split(".");
    arr1 = arr.reverse();
    arr1.pop();
    arr2.push(arr1.join("."));
  });

  arr2.sort();

  let n = 1;
  let temp1 = [];
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] == arr2[i + 1]) {
      n++;
    } else {
      temp1.push(arr2[i]);
      temp1.push(n);
      n = 1;
    }
  }

  let obj = {};
  let prop;
  for (let i = 0; i < temp1.length; i++) {
    prop = "." + String(temp1[i]);
    obj[prop] = temp1[i + 1];
    i++;
  }

  return obj;
}

module.exports = {
  getDNSStats,
};

console.log(getDNSStats(["code.yandex.ru", "music.yandex.ru", "yandex.ru"]));
