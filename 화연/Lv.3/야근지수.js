/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12927#
 * @param {number} n
 * @param {number[]} works
 * @returns {number}
 */
function solution(n, works) {
  if (works.reduce((a, b) => a + b, 0) <= n) {
    return 0;
  }

  const sorted = works.sort((a, b) => b - a);

  while (n > 0) {
    const max = sorted[0];
    for (let i = 0; i < works.length; i++) {
      if (sorted[i] >= max) {
        sorted[i]--;
        n--;
      }
      if (!n) break;
    }
  }
  return sorted.reduce((a, b) => a + Math.pow(b, 2), 0);
}
