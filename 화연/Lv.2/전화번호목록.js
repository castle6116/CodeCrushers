/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42577
 * @param {string[]} phone_book
 * @returns {boolean}
 */
function solution(phone_book) {
  phone_book.sort();
  for (let i = 0; i < phone_book.length - 1; i++) {
    const now = phone_book[i];
    const next = phone_book[i + 1];
    if (next.startsWith(now)) {
      return false;
    }
  }
  return true;
}
