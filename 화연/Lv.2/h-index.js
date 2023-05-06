/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42747
 * @author HwaYeon
 * @param {*} citations 
 * @returns 
 */
function solution(citations) {
  let answer = 0;
  citations.sort((a, b) => b - a);
  const citaSize = citations.length;
  for(let i = citaSize; i >= Math.floor(citaSize/2); i--) {
      if(citations[i - 1] >= i) {
          answer = i;
          break;
      }
  }
  return answer;
}

/**
 * 뭐 시발?
 * @param {*} citations 
 * @returns 
 */
function solution(citations) {
  let i = 0;
  while(i + 1 <= citations.sort((a, b) => b - a)[i]) {
    i++;
  }
  return i;
}