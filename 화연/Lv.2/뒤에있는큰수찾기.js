/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/154539
 * 넘나 머리가 안돌아간다 흑흑
 * 스택에 해당 숫자가 아니라 인덱스를 넣겠단 생각을 못했음
 * @author HwaYeon
 * @param {*} numbers 
 * @returns 
 */
function solution(numbers) {
  const answer = Array.from(new Array(numbers.length), n => n = -1);
  let indexArr = [];

  for(let i = 0; i < numbers.length; i++) {
    while (indexArr.length && numbers[i] > numbers[indexArr[indexArr.length - 1]]) {
      const index = indexArr.pop();
      answer[index] = numbers[i];
    }
    indexArr.push(i);
  }

  return answer;
}



/**
 * @author yunu
 * @param {*} numbers 
 * @returns 
 */
function solution(numbers) {
  const stack = [];
  return numbers.reverse().map((number) => {
    while (true) {
      if (!stack.length) {
        stack.push(number);
        return -1;
      }
      if (number < stack[stack.length - 1]) {
        stack.push(number);
        return stack[stack.length - 2];
      } else {
        stack.pop();
      }
    }
  }).reverse();
}