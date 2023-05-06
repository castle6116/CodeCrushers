/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/148652
 * @author HwaYeon
 * @param {*} n 
 * @param {*} l 
 * @param {*} r 
 * @returns 
 */
function solution(n, l, r) {
  let num = r - l + 1;
  for(let i = l; i <= r; i++) {
      let snum = i;
      if(snum === 3) {
          num--;
      }
      while(snum > 5) {
          if(snum%5 === 3) {
              num--;
              break;
          }
          snum = Math.ceil(snum/5); 
          if(snum === 3) {
              num--;
              break;
          }
      }  
  }
  return num;
}


/**
 * 천잰가??? 어떻게 5진수로 바꿔서 풀 생각을 함??
 * 마치 고3 때의 나같군 푸항항항항
 * @author 최종택 등
 * @param {*} n 
 * @param {*} l 
 * @param {*} r 
 * @returns 
 */
function solution(n, l, r) {
  let answer = 0;
  for (let i = l - 1; i <=r - 1; i++) {
    if (!i.toString(5).match('2')) answer += 1;
  }
  return answer;
}
  
  