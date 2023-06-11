/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/181900
 * @author HwaYeon
 * @param {string} my_string 
 * @param {number[]} indices 
 * @returns 
 */
function solution(my_string, indices) {
  return [...my_string].filter((_, i) => !indices.includes(i)).join('');
}


/**
 * reduce의 3번째 파라미터가 index가 되는지 몰랐음!!!
 * @param {string} my_string 
 * @param {number[]} indices 
 * @returns 
 */
function solution(my_string, indices) {
  return [...my_string].reduce((p,c,idx) => p += indices.includes(idx) ? '' : c, '');
}