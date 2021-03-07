const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  } else {
  let arr = [];
  let str = '';
  for (i=0; i<members.length; i++) {
    if (typeof members[i] == "string") {
      arr.push(members[i].trim().charAt(0).toUpperCase());
    }
  }
  str = arr.sort().join('');
  return (str.length != 0) ? str : false;
  }
};
