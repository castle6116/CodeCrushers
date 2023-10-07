/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/169199
 * @param {string[]} board
 * @returns
 */
function solution(board) {
  const len1 = board.length;
  const len2 = board[0].length;
  let G1,
    G2,
    R1,
    R2 = [];
  const boardArr = Array.from(Array(len1), (_, i) => {
    const line = board[i];
    if (line.includes("R")) {
      [R1, R2] = [i, line.indexOf("R")];
    }
    if (line.includes("G")) {
      [G1, G2] = [i, line.indexOf("G")];
    }
    return line.split("");
  });
  const moveX = [0, -1, 0, 1];
  const moveY = [-1, 0, 1, 0];
  let canMove = true;
  for (let i = 0; i < 4; i++) {
    const newG1 = G1 + moveY[i];
    const newG2 = G2 + moveX[i];
    if (
      newG1 < 0 ||
      newG2 < 0 ||
      newG1 >= len1 ||
      newG2 >= len2 ||
      boardArr[newG1][newG2] === "D"
    ) {
      canMove = false;
    }
  }
  if (canMove) return -1;

  const queue = [[R1, R2, 0]];
  boardArr[R1][R2] = "X";

  while (queue.length) {
    const [y, x, count, direction] = queue.shift();
    if (y === G1 && x === G2) {
      return count;
    }
    for (let i = 0; i < 4; i++) {
      if (direction && direction % 2 === i % 2) {
        continue;
      }
      let j = 1;
      let newY = y + moveY[i];
      let newX = x + moveX[i];
      if (newY < 0 || newX < 0 || newY >= len1 || newX >= len2) continue;
      while (
        newY >= 0 &&
        newX >= 0 &&
        newY < len1 &&
        newX < len2 &&
        boardArr[newY][newX] !== "D"
      ) {
        j++;
        newY = y + moveY[i] * j;
        newX = x + moveX[i] * j;
      }
      j--;
      newY = y + moveY[i] * j;
      newX = x + moveX[i] * j;
      if ((newY !== y || newX !== x) && boardArr[newY][newX] !== "X") {
        queue.push([newY, newX, count + 1, i]);
        boardArr[newY][newX] = "X";
      }
    }
  }
  return -1;
}
