/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
  return function(x) {
      let value = x;
      for(let i = functions.length - 1; i >= 0; i--) {
          const fn = functions[i];
          value = fn(value);
      }
      return value;
  }
};

/**
* const fn = compose([x => x + 1, x => 2 * x])
* fn(4) // 9
*/



/**
 * reduceRight!!!! 처음알게 되었다!!!!!
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
	return function(x) {
      return functions.reduceRight((value, func) => func(value), x);
    }
}