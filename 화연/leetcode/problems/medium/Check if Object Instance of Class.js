/**
 * https://leetcode.com/problems/check-if-object-instance-of-class/description/
 * @param {any} obj
 * @param {any} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function(obj, classFunction) {
  while(obj !== null && obj !== undefined) {
    if(obj.constructor === classFunction) {
      return true;
    }
    obj = Object.getPrototypeOf(obj);
  }
  return false;
};

/**
* checkIfInstanceOf(new Date(), Date); // true
*/



/**
 * @param {Object} object
 * @param {Function} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function(obj, classFunction) {
  if(obj === null || obj === undefined || typeof classFunction !== "function") {
    return false;
  }
  return Object(obj) instanceof classFunction;
};
