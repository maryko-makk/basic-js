const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  //--discard-next исключает следующий за ней элемент исходного массива из преобразованного массива.
  //--discard-prev исключает предшествующий ей элемент исходного массива из преобразованного массива.
  //--double-next удваивает следующий за ней элемент исходного массива в преобразованном массиве.
  //--double-prev удваивает предшествующий ей элемент исходного массива в преобразованном массиве.

  const d1 = "--discard-next";
  const d2 = "--discard-prev";
  const d3 = "--double-next";
  const d4 = "--double-prev";

  if (!arr) {
    throw new Error('Error');
  }
  let new_arr = [];
  for (let i=0; i<arr.length; i++) {
    let element = arr[i];
    switch(element) {
      case d1: i++;
      break;
      case d2: 
      if (new_arr.length != 0 && arr[i-2] != d1) {
        new_arr.pop();
      };
      break;
      case d3: 
      if (i+1<arr.length) {
        new_arr.push(arr[i+1]);
      };
      break;
      case d4: 
      if (i-1 > -1 && arr[i-2] != d1) {
        new_arr.push(arr[i-1]);
      };
      break;
      default: new_arr.push(element);
      break;
    }
  }
  return new_arr;
};
