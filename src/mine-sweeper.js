const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The res should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper( matrix) {
  const res = matrix.map(el => el.map(e => 0));
  for (let i = 0; i < matrix.length; i++) {
    for (let x = 0; x < matrix[i].length; x++) {
      if (matrix[i] && matrix[i][x - 1]) {
        res[i][x] += 1
      } if (matrix[i] && matrix[i][x + 1]) {
        res[i][x] += 1
      } if (matrix[i - 1] && matrix[i - 1][x - 1]) {
        res[i][x] += 1
      } if (matrix[i + 1] && matrix[i + 1][x + 1]) {
        res[i][x] += 1
      } if (matrix[i - 1] && matrix[i - 1][x + 1]) {
        res[i][x] += 1
      } if (matrix[i + 1] && matrix[i + 1][x - 1]) {
        res[i][x] += 1
      } if (matrix[i - 1] && matrix[i - 1][x]) {
        res[i][x] += 1
      } if (matrix[i + 1] && matrix[i + 1][x]) {
        res[i][x] += 1
      } 
    }
  }
  return res;
}

module.exports = {
  minesweeper
};
