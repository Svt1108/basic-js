const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  let k = [];
  let i = 0;
  if (!date) return "Unable to determine the time of year!";

  const err = new Error("Invalid date!");
  for (key in date) {
    k[i] = key;
    i++;
  }
  if (
    !date.getUTCMonth ||
    Object.prototype.toString.call(date) !== "[object Date]" ||
    typeof date !== "object" ||
    typeof date == "string" ||
    typeof date == "symbol" ||
    k[0] == "toString"
  )
    throw err;

  let month = date.getUTCMonth();
  // console.log(typeof date);

  if (month == "11" || month == "0" || month == "1") return "winter";
  if (month == "2" || month == "3" || month == "4") return "spring";
  if (month == "5" || month == "6" || month == "7") return "summer";
  if (month == "8" || month == "9" || month == "10") return "fall";
}

module.exports = {
  getSeason,
};

console.log(getSeason(new Date(2020, 3, 31)));
