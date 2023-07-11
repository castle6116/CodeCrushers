/**
 * https://leetcode.com/problems/snail-traversal/description/
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function(rowsCount, colsCount) {
  if(this.length !== rowsCount * colsCount) return [];
  const newArr = Array.from(new Array(rowsCount), () => new Array(colsCount).fill(0));
  let isDown = true;
  for(let i = 0; i < this.length; i++) {
    const second = Math.floor(i / rowsCount);
    let first = 0;
    if(isDown) {
      first = i % rowsCount;
    } else {
      first = (this.length - 1 - i) % rowsCount;
    }
    newArr[first][second] = this[i];
    if((i + 1) % rowsCount === 0) {
      isDown = !isDown;
    }
  }
  return newArr;
}

/**
* const arr = [1,2,3,4];
* arr.snail(1,4); // [[1,2,3,4]]
*/