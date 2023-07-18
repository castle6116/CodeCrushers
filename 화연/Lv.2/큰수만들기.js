/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42883#
 * @param {string} number
 * @param {number} k
 * @returns
 */
function solution(number, k) {
  const length = number.length;
  let answerL = length - k; // 정답의 자리수

  // 범위내에서 가장 큰 수와 index 찾기
  const getMaxNum = (startIdx, endIdx) => {
    let maxNum = -1;
    let maxIdx = -1;
    for (let i = startIdx; i < endIdx; i++) {
      if (number[i] === "9") return ["9", i];
      if (number[i] > maxNum) {
        maxNum = number[i];
        maxIdx = i;
      }
    }
    return [maxNum, maxIdx];
  };

  let start = 0;
  let end = k + 1;
  let answer = "";

  while (answerL > 0) {
    const [maxNum, maxIdx] = getMaxNum(start, end);
    if (answer.length === 0 && maxNum === 0) {
      answer += "";
    } else {
      answer += maxNum;
    }
    k -= maxIdx - start;
    answerL--;

    start = maxIdx + 1;
    end = start + k + 1;
    if (k === 0) {
      answer += number.slice(start);
      break;
    }
  }
  return answer;
}
