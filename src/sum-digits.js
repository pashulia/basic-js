const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let res = 0;
  while (n >= 1) {
    res += Math.floor(n % 10);
    n = n / 10;
  }
  res > 9 ? (res = getSumOfDigits(res)) : res;
  return res;
}

module.exports = {
  getSumOfDigits
};
