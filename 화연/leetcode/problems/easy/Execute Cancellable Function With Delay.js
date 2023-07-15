/**
 * https://leetcode.com/problems/execute-cancellable-function-with-delay/description/
 * clearTimeout을 return 값으로 놓으면 cancelFn timeout이 끝났을 때 바로 해당 timeout 변수를 지울 수 있다.
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
  const fnTime = setTimeout(() => fn(...args), t);
  const cancelFn = () => clearTimeout(fnTime);
  return cancelFn;
};

/**
*  const result = []
*
*  const fn = (x) => x * 5
*  const args = [2], t = 20, cancelT = 50
*
*  const log = (...argsArr) => {
*      result.push(fn(...argsArr))
*  }
*       
*  const cancel = cancellable(fn, args, t);
*           
*  setTimeout(() => {
*     cancel()
*     console.log(result) // [{"time":20,"returned":10}]
*  }, cancelT)
*/