/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/1844
 * @param {number[][]} maps
 * @returns
 */
function solution(maps) {
  const lenX = maps[0].length;
  const lenY = maps.length;
  const [targetX, targetY] = [lenX - 1, lenY - 1];
  const moveX = [1, -1, 0, 0];
  const moveY = [0, 0, 1, -1];
  const queue = [[0, 0, 1]];

  while (queue.length) {
    const [nowX, nowY, count] = queue.shift();
    if (nowX === targetX && nowY === targetY) {
      return count;
    }
    for (let i = 0; i < 4; i++) {
      const x = nowX + moveX[i];
      const y = nowY + moveY[i];
      if (x >= 0 && x < lenX && y >= 0 && y < lenY && maps[y][x] === 1) {
        queue.push([x, y, count + 1]);
        maps[y][x] = 0;
      }
    }
  }
  return -1;
}
