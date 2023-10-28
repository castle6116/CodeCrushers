const [n, ...stairs] = require("fs")
  .readFileSync(__dirname + "/example.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

// "/dev/stdin"

function solution(n, stairs) {
  const dp = Array(n + 1).fill(0);
  dp[1] = stairs[1];
  dp[2] = stairs[1] + stairs[2];
  dp[3] = Math.max(stairs[1] + stairs[3], stairs[2] + stairs[3]);
  for (let i = 3; i <= n; i++) {
    dp[i] = Math.max(dp[i - 3] + stairs[i - 1], dp[i - 2]) + stairs[i];
  }
  return dp[n];
}

console.log(solution(n, [0, ...stairs]));
