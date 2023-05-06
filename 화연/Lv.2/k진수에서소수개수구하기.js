/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/92335
 * @author HwaYeon
 * @param {*} n 
 * @param {*} k 
 * @returns 
 */
function solution(n, k) {
  let answer = 0;
  const kNum = n.toString(k);
  const isPrime = (num) => {
      if(num === 1 || num === 0) {
          return false; 
      }
      for(let i = 2; i*i <= num; i++) {
          if(num%i === 0) {
              return false;
          }
      }
      return true;
  }
  
  for(let num of kNum.split('0')) {
      if(isPrime(+num)) answer++;
  }
  return answer;
}