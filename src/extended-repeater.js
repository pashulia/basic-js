const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  options.str = String(str);
  if (options.separator === undefined) {
    options.separator = "+";
  } if (options.additionSeparator === undefined) {
    options.additionSeparator = "|";
  } if (options.repeatTimes === undefined) {
    options.repeatTimes = 1;
  } if (options.additionRepeatTimes === undefined) {
    options.additionRepeatTimes = 1;
  } if (options.addition === undefined) {
    options.addition = "";
  }
  options.addition = String(options.addition);
  let addStr = "";
  let newStr = "";
  for (let i = 0; i < options.additionRepeatTimes; i++) {
    addStr += options.addition + options.additionSeparator;
  }
  addStr = addStr.slice(0, -options.additionSeparator.length);
  for (let i = 0; i < options.repeatTimes; i++) {
    newStr += str + addStr + options.separator;
  }
  return newStr.slice(0, -options.separator.length);
}

module.exports = {
  repeater
};
