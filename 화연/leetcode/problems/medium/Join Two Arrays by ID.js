/**
 * https://leetcode.com/problems/join-two-arrays-by-id/description/
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
  const joinedArr = {};
  for(const ele of arr1.concat(arr2)) {
    const { id } = ele;
    if(joinedArr[id] === undefined) {
      joinedArr[id] = ele;
    } else {
      for(const key in ele) {
        joinedArr[id][key] = ele[key];
      }
    }
  }
  const joinedArray = Object.values(joinedArr);
  joinedArray.sort((a, b) => a.id - b.id);
  return joinedArray;
};



/**
 * 스프레드 연산자 사용
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
  const joinedArr = {};
  for(const ele of arr1.concat(arr2)) {
    const { id } = ele;
    if (!joinedArr[id]) {
      joinedArr[id] = { ...ele };
    } else {
      joinedArr[id] = { ...joinedArr[id], ...ele };
    }
  }
  const joinedArray = Object.values(joinedArr);
  joinedArray.sort((a, b) => a.id - b.id);
  return joinedArray;
};