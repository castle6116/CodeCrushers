/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/181834
 * @author HwaYeon
 * @param {string} myString 
 * @returns 
 */
function solution(myString) {
  return [...myString].map((str) => str.charCodeAt(0) < 108 ? 'l' : str).join('');
}

/**
 * 헐!!!! 대!!충!!격!! 알파벳으로만 부등호 비교가 가능한거였어???!!!
 * @param {string} myString 
 * @returns 
 */
function solution(myString) {
  return [...myString].map((v) => v < 'l' ? 'l' : v).join('');
}
