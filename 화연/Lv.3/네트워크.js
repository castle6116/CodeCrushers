/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/43162
 * @param {number} n
 * @param {number[][]} computers
 * @returns
 */
function solution(n, computers) {
  let answer = 0;

  const visited = new Array(n).fill(false);

  const dfs = (root) => {
    const connect = computers[root];
    visited[root] = true;
    for (let i = 0; i < n; i++) {
      if (visited[i] === false && connect[i] === 1) {
        dfs(i);
      }
    }
  };

  for (let i = 0; i < n; i++) {
    if (visited[i] === false) {
      dfs(i);
      answer++;
    }
  }

  return answer;
}
