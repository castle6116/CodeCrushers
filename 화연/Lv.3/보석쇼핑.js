/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/67258
 * Two Pointer
 * @param {string[]} gems
 * @returns {number[]}
 */
function solution(gems) {
  const gemsSize = new Set(gems).size;
  const cart = new Map();
  let answer = [1, gems.length];
  let p1 = 0;
  let p2 = 0;
  cart.set(gems[0], 1);
  while (p1 < gems.length && p2 < gems.length) {
    let select;
    if (cart.size === gemsSize) {
      if (answer[1] - answer[0] > p2 - p1) {
        answer = [p1 + 1, p2 + 1];
      }
      select = gems[p1];
      const gemSize = cart.get(select);
      if (gemSize === 1) {
        cart.delete(select);
      } else {
        cart.set(select, gemSize - 1);
      }
      p1++;
    } else {
      p2++;
      select = gems[p2];
      cart.set(select, (cart.get(select) || 0) + 1);
    }
  }
  return answer;
}
