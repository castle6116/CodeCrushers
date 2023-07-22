/**
 * https://leetcode.com/problems/sleep/
 * Promise 구현
 * @param {number} millis
 */
async function sleep(millis) {
  return await new Promise(resolve => {
      setTimeout(resolve, millis);
  })
}

/** 
* let t = Date.now()
* sleep(100).then(() => console.log(Date.now() - t)) // 100
*/