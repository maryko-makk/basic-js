const CustomError = require("../extensions/custom-error");

const alphabet = 'abcdefghijklmnopqrstuvwxyz';
let alphabetArray = alphabet.split('');
let square = [];
for (let i=0; i<alphabet.length; i++) {
 square[i] = alphabet.slice(i).concat(alphabet.slice(0, i));
}

class VigenereCipheringMachine {

  constructor(directMachine = true) {
    this.directMachine = directMachine;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Arguments missed');
    }
    let messageStr = message.toLowerCase();
    let keyStr = key.toLowerCase().repeat(Math.ceil(message.length / key.length));
    let result = [];
    const regex = /[a-z]/;
    for (let i=0, j=0; i<message.length; i++, j++) {
      if (regex.test(messageStr[i])) {
        result.push(square[alphabetArray.indexOf(messageStr[i])][alphabetArray.indexOf(keyStr[j])]);
      } else {
        result.push(messageStr[i]);
        j--;
      }
    }
   return (!this.directMachine) ? result.reverse().join('').toUpperCase() : result.join('').toUpperCase();
  }    
  decrypt(message, key) {
    if (!message || !key) {
      throw new Error('Arguments missed');
    }
    let messageStr = message.toLowerCase();
    let keyStr = key.toLowerCase().repeat(Math.ceil(message.length / key.length));
    let result = [];
    const regex = /[a-z]/;
    for (let i=0, j=0; i<message.length; i++, j++) {
      if (regex.test(messageStr[i])) {
        let row = alphabetArray.indexOf(keyStr[j]);
        let coll = square[row].indexOf(messageStr[i]);
        result.push(alphabetArray[coll]);
      } else {
        result.push(messageStr[i]);
        j--;
      }
    }
    return (!this.directMachine) ? result.reverse().join('').toUpperCase() : result.join('').toUpperCase();
  }
}

module.exports = VigenereCipheringMachine;
