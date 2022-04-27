const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  let t;
  let k;

  if (sampleActivity) {
    if (typeof sampleActivity === "string") {
      let sampleActivityNum = parseFloat(sampleActivity);
      if (
        typeof sampleActivityNum === "number" &&
        sampleActivityNum > 0 &&
        sampleActivityNum < MODERN_ACTIVITY
      ) {
        k = 0.693 / HALF_LIFE_PERIOD;
        t = Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / k;
        return Math.ceil(t);
      }
    }
  }

  return false;
}

module.exports = {
  dateSample,
};

console.log(dateSample());
