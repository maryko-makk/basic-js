const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let k = HALF_LIFE_PERIOD / 0.693;
  let n = parseFloat(sampleActivity);
  if (typeof sampleActivity == "string" && n > 0 && n < MODERN_ACTIVITY) {
  return Math.ceil(Math.log(MODERN_ACTIVITY / n) * k);
  } else {
    return false;
  }
};
