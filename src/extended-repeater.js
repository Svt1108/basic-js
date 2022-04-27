const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let addStr = "";
  let resStr = "";
  str = String(str);

  // console.log("111: " + options.addition);
  if (options.addition === undefined) options.addition = "";
  options.addition = String(options.addition);
  if (options.repeatTimes === undefined) options.repeatTimes = 1;
  if (options.additionRepeatTimes === undefined)
    options.additionRepeatTimes = 1;
  if (options.separator === undefined) options.separator = "+";
  if (options.additionSeparator === undefined) options.additionSeparator = "|";

  for (let i = 0; i < options.additionRepeatTimes; i++) {
    addStr = addStr + options.addition;
    if (i < options.additionRepeatTimes - 1)
      addStr = addStr + options.additionSeparator;
  }

  for (let i = 0; i < options.repeatTimes; i++) {
    resStr = resStr + str + addStr;
    if (i < options.repeatTimes - 1) resStr = resStr + options.separator;
  }
  //for (let key in options) options[key] = String(options[key]);
  return resStr;
}

module.exports = {
  repeater,
};

console.log(
  repeater("STRING", {
    repeatTimes: 3,
    separator: "**",
    addition: "PLUS",
    additionRepeatTimes: 3,
    additionSeparator: "00",
  })
);
