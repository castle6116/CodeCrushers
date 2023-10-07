const [[n, m], ...maze] = require("fs")
  .readFileSync(__dirname + "/example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line, i) =>
    i === 0 ? line.split(" ").map(Number) : line.split("").map(Number)
  );
// "/dev/stdin"

function solution(n, m, maze) {
  const queue = [[0, 0, 1]];
  const moveY = [1, -1, 0, 0];
  const moveX = [0, 0, 1, -1];
  while (queue.length) {
    const [y, x, count] = queue.shift();
    if (y === n - 1 && x === m - 1) {
      return count;
    }
    for (let i = 0; i < 4; i++) {
      const newY = y + moveY[i];
      const newX = x + moveX[i];
      if (
        newY >= 0 &&
        newY < n &&
        newX >= 0 &&
        newX < m &&
        maze[newY][newX] === 1
      ) {
        maze[newY][newX] = 0;
        queue.push([newY, newX, count + 1]);
      }
    }
  }
}

console.log(solution(n, m, maze));
