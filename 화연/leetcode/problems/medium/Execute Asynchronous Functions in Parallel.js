/**
 * https://leetcode.com/problems/execute-asynchronous-functions-in-parallel/description/
 * Promise all 구현하기
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = async function(functions) {
  return new Promise((resolve, reject) => {
    const answer = [];
    let count = 0;
    for(let i = 0; i < functions.length; i++) {
      functions[i]().then(a => {
        count++;
        answer[i] = a;
        if(count === functions.length) {
          resolve(answer);
        }
      }).catch((error) => {
        reject(error);
      });
    }
  })
};

/**
* const promise = promiseAll([() => new Promise(res => res(42))])
* promise.then(console.log); // [42]
*/