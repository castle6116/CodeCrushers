/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42584
 * @param {number[]} prices
 * @returns {number[]}
 */
function solution(prices) {
  const len = prices.length;
  const answer = Array.from(Array(len), (_, i) => len - 1 - i);
  for (let i = 0; i < len; i++) {
    const price = prices[i];
    for (let j = i + 1; j < len; j++) {
      if (price > prices[j]) {
        answer[i] = j - i;
        break;
      }
    }
  }
  return answer;
}

// stack, queue로도 함 풀어보자!!
