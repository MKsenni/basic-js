const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  // remove line with error and write your code here
  if (!Array.isArray(members) || members.length === 0) return false;
  // let lastLetter = Array.of(members.shift());
  let name = [];
  for (let member of members) {
    if (typeof member === 'string' && member !== " ") {
      let letter = member.trim().toUpperCase()[0];
      name += letter;
    }
  };
  let str = name.split('').sort().join('');
  return str
}
  
  
module.exports = {
  createDreamTeam
};
