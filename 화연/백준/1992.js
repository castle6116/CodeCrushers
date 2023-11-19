const [N, ...Arr] = require("fs")
  .readFileSync(__dirname + "/example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((a, i) => (i === 0 ? Number(a) : a.split("").map(Number)));

// "/dev/stdin"

function solution(n, numbers) {
  const quadTree = [];
  const recursion = (n, x, y) => {
    let total = 0;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        total += numbers[y + j][x + i];
      }
    }
    if (total === 0) quadTree.push("0");
    else if (total === n * n) quadTree.push("1");
    else {
      n /= 2;
      quadTree.push("(");
      recursion(n, x, y);
      recursion(n, x + n, y);
      recursion(n, x, y + n);
      recursion(n, x + n, y + n);
      quadTree.push(")");
    }
  };
  recursion(n, 0, 0);

  return quadTree.join("");
}

console.log(solution(N, Arr));
