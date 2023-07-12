/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/49189
 * @param {number} n
 * @param {number[][]} vertex
 * @returns
 */
function solution(n, vertex) {
  const graph = Array.from(Array(n + 1), () => []);

  for (const [src, dest] of vertex) {
    graph[src].push(dest);
    graph[dest].push(src);
  }

  const distance = Array(n + 1).fill(0);
  distance[1] = 1;

  // BFS
  const queue = [1];
  while (queue.length > 0) {
    const src = queue.shift();
    for (const dest of graph[src]) {
      if (distance[dest] === 0) {
        queue.push(dest);
        distance[dest] = distance[src] + 1;
      }
    }
  }

  const max = Math.max(...distance);

  return distance.filter((item) => item === max).length;
}
