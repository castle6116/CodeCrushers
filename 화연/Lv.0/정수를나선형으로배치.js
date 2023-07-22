/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/181832
 * 아니 왜 삼각달팽이보다 더 어렵지?
 * @param {number} n 
 * @returns 
 */
function solution(n) {
  let answer = Array.from(new Array(n), a => new Array(n).fill(0));
  let dir = 1;
  let i = 1;
  let step = n;
  let size = n;
  let [a, b] = [0, 0];
  while (i <= n * n) {
    answer[a][b] = i;
    if(dir === 1) {
      b++;
    } else if (dir === 2) {
      a++;
    } else if (dir === 3) {
      b--;
    } else {
      a--;
    }
    i++;
    if(i % size === 0) {
      if(dir % 2 !== 0) step--;
      dir = dir + 1 > 4 ? 1 : dir + 1;
      size += step;
    }
  }
  return answer;
}



function solution(n) {
  const move = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  const answer = Array.from(new Array(n), () => new Array(n).fill(0))
  let x = 0, y = 0, dir = 0, num = 1;
  while(num <= n * n) {
    answer[x][y] = num;
    let nextX = x + move[dir][0];
    let nextY = y + move[dir][1];
    if (nextX >= n || nextX < 0 || nextY >= n || nextY < 0 || answer[nextX][nextY] !== 0) {
      dir = (dir + 1) % 4;
      nextX = x + move[dir][0];
      nextY = y + move[dir][1];
    }
    x = nextX;
    y = nextY;
    num ++;
  }
  return answer;
}