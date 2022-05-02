const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(directMachine = true) {
    this.directMachine = directMachine;
  }
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    };
    message = message.toUpperCase();
    key = key.toUpperCase();
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let count = 0;
    let arr = message.split("").map((el) => {
      if (!alphabet.includes(el)) {
        return el;
      }
      let res = (el.charCodeAt() - 65 + key.charCodeAt(count % key.length) - 65) % 26 + 65
      count ++;
      return String.fromCharCode(res);
    });
    if (this.directMachine) {
      return arr.join('')
    } else {
      return arr.reverse().join('')
    };
  }
  decrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    };
    message = message.toUpperCase();
    key = key.toUpperCase();
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let count = 0;
    let arr = message.split("").map((el) => {
      if (!alphabet.includes(el)) {
        return el;
      }
      let res = ((el.charCodeAt() - key.charCodeAt(count % key.length) + 26) % 26)
      count ++;
      return String.fromCharCode(res + 65);
    });
    if (this.directMachine) {
      return arr.join('')
    } else {
      return arr.reverse().join('')
    };
  }
}

module.exports = {
  VigenereCipheringMachine
};
