/**
 * https://leetcode.com/problems/generate-fibonacci-sequence/description/
 * 제너레이터 정의할때는 function*이라고 쓰고, return 값은 yield라고 쓴다.
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Generator
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
  let first = 0;
  let second = 1;
  let sum = 0;
  let i = 0;
  while(true) {
      if(i === 0 || i === 1) {
          sum = i;
      } else {
          sum = first + second;
          first = second;
          second = sum;
      }
      yield sum;
      i++;
  }
};

/**
* const gen = fibGenerator();
* gen.next().value; // 0
* gen.next().value; // 1
*/



/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
  let current = 0; 
  let next = 1;

  while (true) {
    yield current; 
    [current, next] = [next, current + next];
  }
};