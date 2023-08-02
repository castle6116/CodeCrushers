/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12952
 */
function check(queen, row) {
  for (let i = 0; i < row; i += 1) {
    if (
      queen[i] === queen[row] ||
      Math.abs(queen[i] - queen[row]) === row - i
    ) {
      return false;
    }
  }
  return true;
}
function search(queen, row) {
  const n = queen.length;
  let count = 0;
  if (n === row) {
    return 1;
  }
  for (let col = 0; col < n; col += 1) {
    queen[row] = col;
    if (check(queen, row)) {
      count += search(queen, row + 1);
    }
  }
  return count;
}
/**
 * @param {number} n
 * @returns {number}
 */
function solution(n) {
  const queenArr = Array.from({ length: n }, () => 0);
  return search(queenArr, 0);
}
