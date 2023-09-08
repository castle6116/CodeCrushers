/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/178870
 * @param {number[]} sequence
 * @param {number} k
 * @returns {number[]}
 */
function solution(sequence, k) {
  if (sequence.includes(k)) return [sequence.indexOf(k), sequence.indexOf(k)];
  const len = sequence.length;
  const range = [];
  let sum = 0;
  for (let i = len - 1; i >= 0; i--) {
    const num = sequence[i];
    if (num > k) continue;
    if (!range.length) range[1] = i;
    range[0] = i;
    sum += num;
    if (sum === k) {
      // test case 3
      if (sequence[range[0]] === sequence[range[1]]) {
        const gap = range[1] - range[0];
        const start = sequence.indexOf(sequence[range[0]]);
        return [start, start + gap];
      }
      return range;
    } else if (sum > k) {
      sum -= sequence[range[1]];
      range[1]--;
    }
  }
}
