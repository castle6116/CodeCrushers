/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/17687
 * @param {number} n
 * @param {number} t
 * @param {number} m
 * @param {number} p
 * @returns {string}
 */
function solution(n, t, m, p) {
  const tube = (i) => p + (i - 1) * m;
  let answer = "";
  let totalNum = "0";
  let numLen = 1; // totalNum 길이
  let nowNum = 1; // 현재 변경할 숫자
  for (let i = 1; i <= t; i++) {
    const index = tube(i);
    while (numLen < index) {
      const N = nowNum.toString(n).toUpperCase();
      nowNum++;
      totalNum += N;
      numLen += N.length;
    }
    answer += totalNum[index - 1];
  }
  return answer;
}
