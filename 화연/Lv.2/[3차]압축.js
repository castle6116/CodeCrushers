/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/17684
 * @param {string} msg
 * @returns {number[]}
 */
function solution(msg) {
  let answer = [];
  const dic = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8,
    I: 9,
    J: 10,
    K: 11,
    L: 12,
    M: 13,
    N: 14,
    O: 15,
    P: 16,
    Q: 17,
    R: 18,
    S: 19,
    T: 20,
    U: 21,
    V: 22,
    W: 23,
    X: 24,
    Y: 25,
    Z: 26,
  };
  let nextIndex = 27;
  let i = 0; // 현재 단어의 시작 index
  while (i < msg.length) {
    let idx = 0; // 현재 단어의 색인번호
    let nextI = i + 1;
    for (let j = i + 1; j <= msg.length; j++) {
      const word = msg.slice(i, j);
      if (dic[word] === undefined) {
        idx = dic[msg.slice(i, j - 1)];
        dic[word] = nextIndex;
        nextIndex++;
        nextI = j - 1;
        break;
      } else if (dic[word] && j === msg.length) {
        idx = dic[word];
        nextI = j;
      } else {
        continue;
      }
    }
    i = nextI;
    answer.push(idx);
  }
  return answer;
}
