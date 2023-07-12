/**
 * https://leetcode.com/problems/allow-one-function-call/description/
 * 함수 한 번만 부르기
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
  let isCall = true;
  return function(...args){
      if(isCall) {
          isCall = false;
          return fn(...args);
      } else {
          return undefined;
      }
  }
};

/**
* let fn = (a,b,c) => (a + b + c)
* let onceFn = once(fn)
*
* onceFn(1,2,3); // 6
* onceFn(2,3,6); // returns undefined without calling fn
*/