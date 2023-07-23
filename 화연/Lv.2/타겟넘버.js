/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/43165
 * @param {number[]} numbers
 * @param {number} target
 * @returns
 */
function solution(numbers, target) {
  let answer = 0;
  const length = numbers.length;
  const getTarget = (sum, i) => {
    const num = numbers[i];
    if (i < length) {
      i++;
      getTarget(sum + num, i);
      getTarget(sum - num, i);
    } else if (i === length && sum === target) {
      answer += 1;
    }
  };
  getTarget(0, 0);

  return answer;
}
