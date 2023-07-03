/**
 * https://leetcode.com/problems/filter-elements-from-array/description/
 * filter 만들기
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
  const answer = [];
  for(i = 0; i < arr.length; i++) {
      const isTrue = fn(arr[i], i);
      if(isTrue) {
          answer.push(arr[i]);
      }
  }
  return answer;
};