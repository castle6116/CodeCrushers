/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12953
 *
 * GCD = 최대공약수, LCM = 최소공배수, 두 수 (a, b) => a x b = GCD * LCM
 *
 * [유클리드 호제법]
 * (13, 17)의 최대공약수는?
 * 17 % 13 = 4
 * 13 % 4 = 1
 * 4 % 1 = 0이므로
 * 최대공약수는 1
 * @author HwaYeon
 * @param {*} arr
 * @returns
 */
function solution(arr) {
  let answer = 0;
  const getSlice = (multi, m, n) => {
    let big = m;
    let small = n;
    if (m % n === 0) {
      return multi / small;
    } else {
      big = n;
      small = m % n;
      return getSlice(multi, big, small);
    }
  };
  const getLeast = (n1, n2) => {
    if (n1 === n2) {
      return n1;
    } else if (n1 > n2) {
      return getSlice(n1 * n2, n1, n2);
    } else {
      return getSlice(n1 * n2, n2, n1);
    }
  };
  for (let i = 1; i < arr.length; i++) {
    if (i === 1) {
      answer = getLeast(arr[0], arr[1]);
    } else {
      answer = getLeast(answer, arr[i]);
    }
  }
  return answer;
}
