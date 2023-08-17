/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/62048
 * @param {number} w
 * @param {number} h
 * @returns {number}
 */
function solution(w, h) {
  let answer = 0;
  for (let i = 1; i < w; i++) {
    answer += Math.floor((i * h) / w);
  }
  return answer * 2;
}
