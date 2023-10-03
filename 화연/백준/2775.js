const [n, ...arr] = require("fs")
  .readFileSync(__dirname + "/example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => parseInt(line));
// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

function solution(k, n) {
  const dp = Array.from(Array(k + 1), (_, i) => Array(n + 1).fill(0));

  for (let i = 0; i <= k; i++) {
    for (let j = 1; j <= n; j++) {
      if (i === 0) {
        dp[i][j] = j;
      } else {
        dp[i][j] = dp[i][j - 1] + dp[i - 1][j];
      }
    }
  }
  return dp[k][n];
}

for (let i = 0; i < n; i++) {
  console.log(solution(arr[2 * i], arr[2 * i + 1]));
}
