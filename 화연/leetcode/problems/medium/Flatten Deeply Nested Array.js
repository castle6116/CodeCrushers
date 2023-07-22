/**
 * https://leetcode.com/problems/flatten-deeply-nested-array/
 * Array.flat 구현하기
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function (arr, n) {
  if(n === 0) return arr;
  const newArr = [];
  for(let ele of arr) {
    if(Array.isArray(ele)) {
      ele = flat(ele, n - 1);
      newArr.push(...ele);
    } else {
      newArr.push(ele);
    }
  }
  return newArr;
};