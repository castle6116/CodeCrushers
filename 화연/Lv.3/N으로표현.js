/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42895
 * @param {number} N
 * @param {number} number
 * @returns
 */
function solution(N, number) {
  if (N === number) return 1;

  const use = Array.from(new Array(9), (u, i) => {
    u = new Set();
    const NStr = String(N).repeat(i);
    u.add(+NStr);
    return u;
  });

  for (let i = 1; i <= 8; i++) {
    for (let j = 1; j < i; j++) {
      for (let first of use[j]) {
        for (let second of use[i - j]) {
          use[i].add(first + second);
          use[i].add(first - second);
          use[i].add(first * second);
          use[i].add(first / second);
        }
      }
    }
    if (use[i].has(number)) return i;
  }
  return -1;
}
