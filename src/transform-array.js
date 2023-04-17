const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(newarr) {

  if (!Array.isArray(newarr)) {
    throw new Error ("'arr' parameter must be an instance of the Array!");
  };
  let arr = Array.from(newarr);
  

  for (let j = 0; j < arr.length; j++) {
    let i = arr.findIndex(item => item === '--double-next');
    if (i >= 0 && arr[i] !== arr[arr.length-1]) {
      arr.splice(i, 1, arr[i+1]);
      return arr
    } else if (arr[i] === arr[arr.length-1]) {
      arr.splice(i);
      return arr
    }

    i = arr.findIndex(item => item === '--double-prev');
    if (i > 0 && arr[i] !== arr[0]) {
      arr.splice(i, 1, arr[i-1]);
      return arr
    } else if (arr[i] === arr[0]) {
      arr.splice(0, 1);
      return arr
    }

    i = arr.findIndex(item => item === '--discard-next');
    if (i >= 0 && arr[i] !== arr[arr.length-1]) {
      arr.splice(i, 2);
      return arr
    } else  if (arr[i] === arr[arr.length-1]) {
      arr.splice(i);
      return arr
    }

    i = arr.findIndex(item => item === '--discard-prev');
    if (i > 0 && arr[i] !== arr[0]) {
      arr.splice(arr[i-1], 2);
      return arr
    } else if (arr[i] === arr[0]) {
      arr.splice(0, 1);
      return arr
    }
  }
  return arr.filter((e) => e !== " ")
}

module.exports = {
  transform
};
