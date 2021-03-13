const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, {repeatTimes = 0, separator = '+', addition = '', additionRepeatTimes = 0, additionSeparator = '|'}) {
  addition = String(addition);
  let arr_addition = [];
  let str_addition = '';
  if (additionRepeatTimes == 0) {
    str_addition = addition;
  } else {
    for (let j=0; j<additionRepeatTimes; j++) {
     arr_addition.push(addition);
    }
    str_addition = arr_addition.join(additionSeparator);
    }
  str = str + str_addition;
  let arr = [];
  let new_str = '';
  if (repeatTimes == 0) {
    return str;
  } else {
    for (let i=0; i<repeatTimes; i++) {
     arr.push(str);
    }
    new_str = arr.join(separator);
    }
  return new_str;
};
  

