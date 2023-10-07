/**
 * 재귀함수라요!
 * https://school.programmers.co.kr/learn/courses/30/lessons/12946
 * @param {number} n
 * @returns
 */
function solution(n) {
  let answer = [];
  const hanoi = (num, from, to, other) => {
    if (num === 0) return;
    hanoi(num - 1, from, other, to);
    answer.push([from, to]);
    hanoi(num - 1, other, to, from);
  };
  hanoi(n, 1, 3, 2);
  return answer;
}
