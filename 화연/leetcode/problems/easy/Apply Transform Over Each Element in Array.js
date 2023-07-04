/**
 * https://leetcode.com/problems/apply-transform-over-each-element-in-array/description/
 * array map 구현하기
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
  const valArr = [];
  for(let i = 0; i < arr.length; i++) {
      const value = fn(arr[i], i);
      valArr.push(value);
  }
  return valArr;
};