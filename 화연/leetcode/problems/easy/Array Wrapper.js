/**
 * https://leetcode.com/problems/array-wrapper/description/
 * 아하!!! 그래서 프로토타입보고 메소드라 하는구나!!!
 * @param {number[]} nums
 */
var ArrayWrapper = function(nums) {
  this.nums = nums;
};

ArrayWrapper.prototype.valueOf = function() {
  return this.nums.reduce((a, b) => a + b, 0);
}

ArrayWrapper.prototype.toString = function() {
  return `[${this.nums.join(",")}]`;
}

/**
* const obj1 = new ArrayWrapper([1,2]);
* const obj2 = new ArrayWrapper([3,4]);
* obj1 + obj2; // 10
* String(obj1); // "[1,2]"
* String(obj2); // "[3,4]"
*/


class ArrayWrapper {
  constructor(nums) {
    this.nums = nums;
  }
  valueOf () {
    return this.nums.reduce((a, b) => a + b, 0);
  }
  toString () {
    return `[${this.nums.join(",")}]`;
  }
}