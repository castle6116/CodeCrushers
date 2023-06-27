/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/181898
 * @author HwaYeon
 * @param {number[]} arr 
 * @param {number} idx 
 * @returns 
 */
function solution(arr, idx) {
  for(let i = 0; i < arr.length; i++) {
      if(i + 1 > idx && arr[i] === 1) return i;
  }
  return -1;
}


/**
 * 대충격임!!!! indexOf가 몇번째 인덱스부터 찾아야하는지 구현할 수 있다니!!!!!!
 * includes도 마찬가지!!!
 * @param {number[]} arr 
 * @param {number} idx 
 * @returns 
 */
function solution(arr, idx) {
  return arr.indexOf(1, idx);
}