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
  let result = '';
  let newStr = '';

  let repeatTimes = options.repeatTimes || true;
  let separator = options.separator || '+';
  let addition = options.addition;
  let additionRepeatTimes = options.additionRepeatTimes || true;
  let additionSeparator = options.additionSeparator || '|';

  if (typeof str !== 'string') toString(str);
  if (typeof addition !== 'string') {
    toString(addition);
  } 
  if (addition === undefined) {
    addition = '';
  }
    
  for (let i = 1; i <= additionRepeatTimes; i++) {
    newStr += addition;

    if (i+1 <= additionRepeatTimes) {
      newStr += additionSeparator;
    }
  }

  for (let i = 1; i <= repeatTimes; i++) {
    result += str + newStr;
    if (i+1 <= repeatTimes) {
      result += separator;
    }
  }
  return result;
}

module.exports = {
  repeater
};
