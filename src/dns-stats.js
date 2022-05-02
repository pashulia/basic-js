const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const obj = {};
  domains = domains.map((el) => el.split(".").reverse().map((val) => `.${val}`))
  domains.forEach((el) => {
    let DNS = "";
    el.forEach((val) => {
      DNS += val;
      if (!obj[DNS]) {
        obj[DNS] = 1;
      } else obj[DNS]++;
    });
  });
  return obj;
}

module.exports = {
  getDNSStats
};
