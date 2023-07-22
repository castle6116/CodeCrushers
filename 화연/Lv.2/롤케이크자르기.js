/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/132265
 * @param {number[]} topping
 * @returns {number}
 */
function solution(topping) {
  let answer = 0;
  let totalArr = new Array(10001).fill(0);
  let leftArr = new Array(10001).fill(0);
  for (let i = 0; i < topping.length; i++) {
    const num = topping[i];
    totalArr[num]++;
  }
  let totalSize = totalArr.filter((a) => a !== 0).length;
  let leftSize = 0;
  for (let i = 0; i < topping.length; i++) {
    const num = topping[i];
    if (leftArr[num] === 0) {
      leftSize++;
      leftArr[num]++;
    }
    totalArr[num]--;
    if (totalArr[num] === 0) {
      totalSize--;
    }
    if (leftSize === totalSize) {
      answer++;
    }
    if (leftSize > totalSize) {
      break;
    }
  }
  return answer;
}
