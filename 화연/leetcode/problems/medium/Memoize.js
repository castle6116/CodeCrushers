/**
 * https://leetcode.com/problems/memoize/description/
 * @param {Function} fn
 */
function memoize(fn) {
  const memoObj = {};
  return function(...args) {
    const key = JSON.stringify(args);
    if(memoObj[key] === undefined) {
      memoObj[key] = fn(...args);
    }
    return memoObj[key];
  }
}


/** 
* let callCount = 0;
* const memoizedFn = memoize(function (a, b) {
*	 callCount += 1;
*   return a + b;
* })
* memoizedFn(2, 3) // 5
* memoizedFn(2, 3) // 5
* console.log(callCount) // 1 
*/