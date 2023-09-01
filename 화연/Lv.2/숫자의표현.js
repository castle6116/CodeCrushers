/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12924
 * @author HwaYeon
 * @param {*} n
 * @returns
 */
function solution(n) {
  let answer = 0;
  const getSum = (i) => {
    for (let j = 2; j <= n / 2 + 1; j++) {
      const sumResult = i * j + (j * (j - 1)) / 2;
      if (sumResult === n) {
        return true;
      } else if (sumResult > n) {
        return false;
      } else {
        continue;
      }
    }
  };
  for (let i = 1; i <= Math.floor(n / 2); i++) {
    if (getSum(i)) {
      answer++;
    }
  }
  return answer + 1;
}
// 풀이가 예쁘지가 않음

/**
 * @author 임택 등
 * @param {*} n
 * @returns
 */
function solution2(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i == 0 && i % 2 == 1) {
      answer++;
    }
  }
  return answer;
}
// 홀수의 경우, 약수는 홀수 밖에 안나옴.
// 15의 약수는 1,3,5, 15. 약수를 이용해서 연속된 수의 합이 15가 나오도록 할 수도 있음.
// 15=1+2+3+4+5 (중간값 3) 3x5 / 15=4+5+6 (중간값 5) 5x3 / 15=7+8 (연속된 수) 7+8 - 홀수인 경우 무조건 가능.
// 15=15 / 중간값이 3인 경우, 중간값이 5인 경우, 연속된 수(7, 8), 15(n) 해서 4개인데, 이게 공교롭게 홀수의 약수 수와 같음.
// 그리고 짝수의 경우는 홀수의 연장선이라고 보면 됨. n=30인 경우, 30의 약수는 1, 2, 3, 5, 6, 10, 15, 30임.
// 30=4 + 5 + 6 + 7 + 8 (중간값 3의 연장) 2x3x5 / 30=9 + 10 + 11 (중간값 5의 연장) 2x5x3 / 30=6+7+8+9 (연속된 두 수의 연장) 2x(7+8) / 30=30
// 결과적으로 n의 홀수 약수 개수만 구해도 답이랑 같음.
