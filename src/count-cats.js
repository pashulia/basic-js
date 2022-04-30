const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let count = 0;
  if (matrix.length < 1) {
    return count
  }
  count = matrix.map(cat => cat.filter(ears => ears === "^^").length);
  return count.reduce((a, b) => a + b);
}

module.exports = {
  countCats
};
