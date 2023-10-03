/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/43163
 * @param {string} begin
 * @param {string} target
 * @param {string[]} words
 * @returns
 */
function solution(begin, target, words) {
  if (!words.includes(target)) return 0;
  const queue = [[begin, 0]];
  const len = words.length;
  const wordLen = begin.length;
  const visited = [];
  while (queue.length) {
    let [nowWord, count] = queue.shift();
    if (nowWord === target) {
      return count;
    }
    for (let i = 0; i < len; i++) {
      const word = words[i];
      let diffAlpha = 0;
      if (!visited.includes(i)) {
        for (let j = 0; j < wordLen; j++) {
          if (word[j] !== nowWord[j]) {
            diffAlpha++;
          }
        }
        if (diffAlpha === 1) {
          queue.push([word, count + 1]);
          visited.push(i);
        }
      }
    }
  }
  return 0;
}
