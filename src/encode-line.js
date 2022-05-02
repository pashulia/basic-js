const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = [];
  let count = 1;
  let arrStr = str.split('')
  for (let i = 0; i < arrStr.length; i++) {
    if (arrStr[i] === arrStr[i + 1]) {
      count ++;
    } else {
      if (count !== 1)
        res.push(count);
        res.push(arrStr[i]);
        count = 1;
    }
  }
  return res.join('');
}

module.exports = {
  encodeLine
};
