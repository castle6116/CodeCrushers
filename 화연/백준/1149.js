const [n, ...arr] = require("fs")
  .readFileSync(__dirname + "/example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line, i) => (i === 0 ? parseInt(line) : line.split(" ").map(Number)));
// "/dev/stdin"

function solution(costs) {
  for (let i = 1; i < n; i++) {
    costs[i][0] += Math.min(costs[i - 1][1], costs[i - 1][2]);
    costs[i][1] += Math.min(costs[i - 1][0], costs[i - 1][2]);
    costs[i][2] += Math.min(costs[i - 1][0], costs[i - 1][1]);
  }
  return Math.min(...costs.at(-1));
}

console.log(solution(arr));
