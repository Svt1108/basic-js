const { NotImplementedError } = require("../extensions/index.js");

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 *
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 *
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  let turnsNum = 0;
  let secondsNum = 0;

  for (let i = 0; i < disksNumber; i++) {
    turnsNum = turnsNum + 2 ** i;
  }

  secondsNum = Math.floor((turnsNum / turnsSpeed) * 60 * 60);

  let answer = {
    turns: turnsNum,
    seconds: secondsNum,
  };
  return answer;
}

module.exports = {
  calculateHanoi,
};

console.log(calculateHanoi(9, 4308));
