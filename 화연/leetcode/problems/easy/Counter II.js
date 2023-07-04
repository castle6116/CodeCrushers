/**
 * https://leetcode.com/problems/counter-ii/description/
 * closure 함수 여러개 넣기
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
  let num = init;
  const initial = init;
  const increment = () => {
      num++;
      return num;
  }
  const decrement = () => {
      num--;
      return num;
  }
  const reset = () => {
      num = initial;
      return num;
  }
  return { increment, decrement, reset };
};

/**
* const counter = createCounter(5)
* counter.increment(); // 6
* counter.reset(); // 5
* counter.decrement(); // 4
*/


var createCounter = function(init) {
  let presentCount = init;

  function increment() {
    return ++presentCount;
  }
  function decrement() {
    return --presentCount;
  }
  function reset() {
    return (presentCount = init);
  }
  return { increment, decrement, reset };
};


var createCounter = function(init) {
  let presentCount = init
  return {
    increment: () => ++presentCount,
    decrement: () => --presentCount,
    reset: () => presentCount = init,
  }
};


class Counter {
  constructor(init) {
    this.init = init;
    this.presentCount = init;
  }
  increment() {
    this.presentCount += 1;
    return this.presentCount;
  }
  decrement() {
    this.presentCount -= 1;
    return this.presentCount;
  }
  reset() {
    this.presentCount = this.init;
    return this.presentCount;
  }
}

var createCounter = function(init) {
  return new Counter(init);
};