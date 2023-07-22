/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/181857
 * @param {number[]} arr 
 * @returns 
 */
function solution(arr) {
  const arrStr = arr.length.toString(2);
  let target = '';
  if([...arrStr].filter(str => str === '1').length > 1) {
    target = '1' + '0'.repeat(arrStr.length);
  } else {
    return arr;
  }
  const targetNum = parseInt(Number(target), 2);
  return Array.from(new Array(targetNum), (a, i) => 
    a = i < arr.length ? arr[i] : 0
  );
}

/**
 * Math properties에 log2가 있다니!!!!
 * @param {*} arr 
 * @returns 
 */
function solution(arr) {
  const length = arr.length;
  const totalLength = 2 ** Math.ceil(Math.log2(length));
  return [...arr, ...new Array(totalLength - length).fill(0)];
}
