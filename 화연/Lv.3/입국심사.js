/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/43238
 * @param {number} n
 * @param {number[]} times
 * @returns {number}
 */
function solution(n, times) {
  const sortedTimes = times.sort((a, b) => a - b);
  let left = 1;
  let right = sortedTimes[sortedTimes.length - 1] * n;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const sum = times.reduce((a, time) => a + Math.floor(mid / time), 0);

    if (sum < n) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
}
