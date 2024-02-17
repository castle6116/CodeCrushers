/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12902
 * @param {number} n
 * @returns
 */
function solution(n) {
  const dp = Array(n + 1).fill(0);
  const NUM = 1000000007;
  dp[2] = 3;
  dp[4] = 11;
  for (let i = 6; i <= n; i += 2) {
    dp[i] = (((dp[i - 2] * 4) % NUM) - (dp[i - 4] % NUM) + NUM) % NUM;
  }

  return dp[n] % NUM;
}
