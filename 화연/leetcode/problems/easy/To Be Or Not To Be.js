/**
 * https://leetcode.com/problems/to-be-or-not-to-be/
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
  const toBe = (a) => {
    if(val === a) {
      return true;
    } else {
      throw "Not Equal";
    }
  }

  const notToBe = (a) => {
    if(val !== a) {
      return true;
    } else {
      throw "Equal";
    }
  }

  return { toBe, notToBe };
};

/**
* expect(5).toBe(5); // true
* expect(5).notToBe(5); // throws "Equal"
*/



var expect = function(val) {
  return {
    toBe: (val2) => {
      if (val !== val2) {
        throw "Not Equal";
      } else { 
        return true;
      }
    },
    notToBe: (val2) => {
      if (val === val2) {
        throw "Equal";
      } else {
        return true;
      }
    }
  }
};