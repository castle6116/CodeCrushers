/**
 * 조건문을 잘 보고 잘 생각하고 쓰자ㅜㅜ
 * https://school.programmers.co.kr/learn/courses/30/lessons/181187
 * @author HwaYeon
 * @param {*} r1 
 * @param {*} r2 
 * @returns 
 */
function solution(r1, r2) {
  const powR1 = r1 ** 2;
  const powR2 = r2 ** 2;

  let outLine = 0;
  let count = 0;

  for(let i = 1; i <= r2; i++) {
    const pow = i * i;
    const y2 = (powR2 - pow) ** (1/2);
    let y1 = 0;
    if(i < r1) {
      y1 = (powR1 - pow) ** (1/2);
      count += 4 * (Math.floor(y2) - Math.floor(y1));
    } else {
      count += 4 * Math.floor(y2);
    }
    if(y1 === Math.floor(y1)) outLine++;
  }
  return count + 4 * outLine;
}


function solution(r1, r2) {
  let answer = 0;
  for(let i = 0; i < r1; i++) {
    answer += Math.floor(Math.sqrt(r2 ** 2 - i ** 2)) - 
      Math.floor(Math.sqrt(r1 ** 2 - i ** 2 - 1)); 
  }
  for(let i = r1; i < r2; i++) {
    answer += Math.floor(Math.sqrt(r2 ** 2 - i ** 2));
  }
  return answer * 4;
}