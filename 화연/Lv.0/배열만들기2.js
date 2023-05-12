/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/181921
 * 정수 l과 r이 주어졌을 때, l 이상 r이하의 정수 중에서 숫자 "0"과 "5"로만 이루어진 모든 정수를 
 * 오름차순으로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.
 * 만약 그러한 정수가 없다면, -1이 담긴 배열을 return 합니다.
 * @author HwaYeon
 * @param {number} l 
 * @param {number} r 
 * @returns 
 */
function solution(l, r) {
  let answer = [];
  const rest = (restN) => restN % 5 === 0 ? 0 : 5 - (restN % 5);
  for(let i = l + rest(l); i <= r - rest(r); i += 5) {
    const iStr = [...String(i)];
    answer.push(i);
    for(let j = 0; j < iStr.length; j++) {
      if(iStr[j] !== '5' && iStr[j] !== '0') {
        answer.pop();
        break;
      }
    }
  }
  return answer.length === 0 ? [-1] : answer;
}

/**
 * 풀이 잘보고 활용하쟈!!
 * @param {number} l 
 * @param {number} r 
 * @returns 
 */
function solution(l, r) {
  const answer = [[5]];

  for(let i = 0; answer[i][0] < r; i++) {
    const temp = [];
    for(let x of answer[i]) {
      temp.push(x * 10)
      temp.push(x * 10 + 5);
    }
    answer.push(temp);
  }

  const filtered = answer.flat().filter(v => l <= v && v <= r);
  return filtered.length ? filtered : [-1];
}
