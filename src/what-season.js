const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) {
    return "Unable to determine the time of year!"
  } if (Object.entries(date).length > 0) {
    throw new Error("Invalid date!")
  } if (Object.prototype.toString.call(date) === "[object Date]") {
    if (date.getMonth() < 2 || date.getMonth() > 10) {
      return "winter"
    } else if (date.getMonth() > 1 && date.getMonth() < 5) {
      return "spring"
    } else if (date.getMonth() > 4 && date.getMonth() < 8) {
      return "summer"
    } else {
      return "autumn"
    }
  } throw new Error("Invalid date!");
}

module.exports = {
  getSeason
};
