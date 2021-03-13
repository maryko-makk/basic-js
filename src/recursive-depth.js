const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) return 0;
    let max_depth = 1;
    arr.forEach(element => {
      if (Array.isArray(element)) {
        let depth = this.calculateDepth(element) + 1;
        if (depth > max_depth) {
          max_depth = depth;
        }
      }
    });
    return max_depth;
  }
};