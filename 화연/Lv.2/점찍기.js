/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/140107
 * @param {number} k
 * @param {number} d
 * @returns
 */
function solution(k, d) {
  const N = Math.floor(d / k);
  const D = d * d;
  let answer = 0;
  for (let x = 0; x <= d; x += k) {
    const X = x * x;
    const y = (D - X) ** (1 / 2);
    answer += Math.floor(y / k) + 1;
  }
  return answer;
}
