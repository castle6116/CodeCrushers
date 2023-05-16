/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42884
 * @param {number[][]} routes 
 * @returns 
 */
function solution(routes) {
  let answer = 0;
  const outRoutes = [...routes].sort(([, a], [, b]) => a - b);
  let outLine = 0;
  for(let i = 0; i < outRoutes.length; i++) {
    const [inPoint, outPoint] = outRoutes[i];
    if(i === 0) {
      outLine = outPoint;
      answer++;
      continue;
    }
    if(inPoint > outLine) {
      outLine = outPoint;
      answer++;
    }
  }
  return answer;
}