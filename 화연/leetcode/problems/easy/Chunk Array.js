/**
 * https://leetcode.com/problems/chunk-array/description/
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
  const chunkArr = [];
  const length = Math.ceil(arr.length / size);
  for(let i = 0; i < length; i++) {
    const sliced = arr.slice(i * size, i * size + size);
    chunkArr.push(sliced);
  }
  return chunkArr;
};



/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
const chunk = (arr, size) => {
  const chunkedArray = [];
  for (let i = 0; i < arr.length; i += size) {
    chunkedArray.push(arr.slice(i, i + size));
  }
  return chunkedArray;
};