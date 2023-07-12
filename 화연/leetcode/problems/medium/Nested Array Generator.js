/**
 * https://leetcode.com/problems/nested-array-generator/description/
 * @param {Array} arr
 * @return {Generator}
 */
var inorderTraversal = function*(arr) {
  arr = arr.flat(Infinity);
  let i = 0;
  while(i < arr.length) {
      yield arr[i];
      i++;
  }
};

/**
* const gen = inorderTraversal([1, [2, 3]]);
* gen.next().value; // 1
* gen.next().value; // 2
* gen.next().value; // 3
*/



/**
 * 재귀 이용
 * @param {Array} arr
 * @return {Generator}
 */
var inorderTraversal = function*(arr) {
  for (const element of arr) {
    if (Array.isArray(element)) {
      yield* inorderTraversal(element);
    } else {
      yield element;
    }
  }
}