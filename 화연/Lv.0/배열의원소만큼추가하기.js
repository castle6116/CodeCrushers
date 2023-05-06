/**
 * flatMap 넘모 좋자냐!!! 😆😙
 * https://school.programmers.co.kr/learn/courses/30/lessons/181861
 * @author Hwayeon
 * @param {*} arr 
 * @returns 
 */
function solution(arr) {
  return arr.flatMap(a => {
      const arr = [];
      for(let i = 0; i < a; i++) {
          arr.push(a); 
      }
      return arr;
  });
}


/**
 * reduce도 쓸 수 있구낭!!
 * @param {*} arr 
 * @returns 
 */
function solution(arr) {
  return arr.reduce((list, num) => [...list, ...new Array(num).fill(num)], []);
}
function solution(arr) {
  return arr.reduce((list, num) => list.concat(Array(num).fill(num)), [])
}
