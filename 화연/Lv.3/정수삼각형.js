/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/43105
 * lv.2 땅따먹기와 비슷 (Dynamic Programing)
 * @param {number[][]} triangle
 * @returns {number}
 */
function solution(triangle) {
  const length = triangle.length;
  for (let i = 1; i < length; i++) {
    for (let j = 0; j < triangle[i].length; j++) {
      if (j === 0) {
        triangle[i][j] += triangle[i - 1][0];
      } else if (j === triangle[i].length - 1) {
        triangle[i][j] += triangle[i - 1][j - 1];
      } else {
        triangle[i][j] +=
          triangle[i - 1][j - 1] > triangle[i - 1][j]
            ? triangle[i - 1][j - 1]
            : triangle[i - 1][j];
      }
    }
  }
  return Math.max(...triangle[length - 1]);
}
