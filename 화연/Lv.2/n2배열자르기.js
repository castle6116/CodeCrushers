/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/87390
 * 문제가 시키는 프로세스를 그대로 따르지 말고 정답을 구할 수 있는 다른 방법을 생각해야함
 * 규칙이 있고 각 자리마다 숫자가 정해져 있다면 굳이 for문을 여러번 돌리지 않고 즉각 정답을 구할 수 있음
 * 마치 like 칸토새끼 문제처럼ㅠㅠ
 * @author HwaYeon
 * @param {*} n 
 * @param {*} left 
 * @param {*} right 
 * @returns 
 */
function solution(n, left, right) {
  let answer = [];
  for(let i = left + 1; i <= right + 1; i++) {
      const row = Math.ceil(i/n);
      const col = i%n === 0 ? n : i%n;
      const newNum = col <= row ? row : col;
      answer.push(newNum);
  }
  return answer;
}

/**
 * 같은 풀이라도 이렇게 쓸 수가 있구나ㅋㅋㅋㅋㅋ
 * 미친것들이다.
 * @param {*} n 
 * @param {*} left 
 * @param {*} right 
 * @returns 
 */
function solution(n, left, right) {
  var answer = [];
  for (let i = left; i <= right; i++) {
      answer.push(Math.max(i % n, parseInt(i / n)) + 1)
  }
  return answer;
}