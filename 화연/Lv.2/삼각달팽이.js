/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/68645
 * @param {number} n 
 * @returns 
 */
function solution(n) {
  const nArr = Array.from(new Array(n), (_, i) => new Array(i + 1).fill(0));
  let sliceSize = n;
  let added = n;
  let direction = 1;
  let i = 0;
  let lastPosition = [-1, 0];
  while(i < (n * (n + 1)) / 2) {
    const insertN = i + 1; // 추가될 숫자
    if(direction === 1) {
      lastPosition[0] += 1;
    } else if (direction === 2) {
      lastPosition[1] += 1;
    } else {
      lastPosition[0] -= 1;
      lastPosition[1] -= 1;
    }
    const [a, b] = lastPosition;
    nArr[a][b] = insertN;
    if(i + 1 === sliceSize) {
      added--;
      sliceSize += added;
      direction = direction === 3 ? 1 : direction + 1;
    }
    i++;
  }
  return nArr.flat();
}