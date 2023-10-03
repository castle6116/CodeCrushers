const input = require("fs")
  .readFileSync(__dirname + "/example.txt")
  .toString()
  .trim()
  .split("\n");

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

function solution(input) {
  const text1 = input[0];
  const text2 = input[1];

  const len1 = text1.length;
  const len2 = text2.length;

  const dp = Array.from(Array(len1 + 1), () => Array(len2 + 1).fill(0));

  for (let i = len1 - 1; i >= 0; i--) {
    const t1 = text1[i];
    for (let j = len2 - 1; j >= 0; j--) {
      const t2 = text2[j];
      if (t1 === t2) {
        dp[i][j] = dp[i + 1][j + 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j + 1]);
      }
    }
  }
  // 답변 출력
  console.log(dp[0][0]);
}

solution(input);
