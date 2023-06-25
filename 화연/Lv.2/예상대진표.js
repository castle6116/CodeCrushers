/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12985
 * @author HwaYeon
 * @param {*} n 
 * @param {*} a 
 * @param {*} b 
 * @returns 
 */
function solution(n,a,b) {
  for(let i = 1; i <= n/2; i++) {
    a = Math.ceil(a/2);
    b = Math.ceil(b/2);
    if(a === b) {
      return i;
    }
  }
}

// 잘 풀었음!