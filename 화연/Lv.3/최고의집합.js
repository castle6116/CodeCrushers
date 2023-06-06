/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12938
 * @author HwaYeon
 * @param {number} n 
 * @param {number} s 
 * @returns 
 */
function solution(n, s) {
  const gap = s - n * Math.floor(s / n);
  const answer = Array.from(new Array(n).fill(0), (_, i) => 
    i >= n - gap ? Math.floor(s / n) + 1 : Math.floor(s / n));
  return s < n ? [-1] : answer;
}