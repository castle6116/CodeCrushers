/**
 * https://leetcode.com/problems/promise-time-limit/description/
 * t 시간내에 fn이 끝나면 resolve를, t 시간이 초과되면 reject를,
 * promise 공부 시급!!!!!
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
  return async function(...args) {
      const resolved = fn(...args);
        
      const rejected = new Promise((_, reject) => {
          setTimeout(() => {
              reject('Time Limit Exceeded')
          }, t)
      });

      return Promise.race([resolved, rejected]);
  }
};

/**
* const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
* limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
*/


/**
 * race 쓰지 않은 풀이
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
  return async function(...args) {
    return new Promise((resolve, reject) => {
      let timerId;

      fn(...args)
        .then(result => {
          resolve(result);
        })
        .catch(error => {
          reject(error);
        }).finally(() => {
          clearTimeout(timerId);
        });

      timerId = setTimeout(() => {
        reject('Time Limit Exceeded');
      }, t);
    });
  };
};