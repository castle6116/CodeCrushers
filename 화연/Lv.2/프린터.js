/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42587
 * @author HwaYeon
 * @param {*} priorities 
 * @param {*} location 
 * @returns 
 */
function solution(priorities, location) {
  let answer = 0;
  const PRI_SIZE = priorities.length;
  const priorArr = [...priorities].sort((a, b) => b - a);
  let maxIdx = 0; // 최댓값 순서
  let i = 0; // priorities 순서
  let idx = 0; // 대기목록 순서
  while(priorities.length > 0) {  
      const value = priorities[i];
      delete priorities[i];
      if(value < priorArr[maxIdx]) {
          priorities[PRI_SIZE + idx] = value;
          if(i === location) {
              location = PRI_SIZE + idx;
          }
          idx++;
      } else {
          maxIdx++;
          if(i === location) {
              answer = maxIdx;
              break;
          }
      }
      i++;
  }
  
  return answer;
}