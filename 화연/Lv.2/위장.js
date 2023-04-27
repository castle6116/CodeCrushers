// 1. 같은 의상 종류끼리 묶음
// 2. 의상 종류 수 만큼 경우의 수를 구함
// 윗옷 a개, 아래옷 b개를 입는 경우의 수를 구할 때 a*b 를 하면 된다.
// 이 때 윗옷, 아래옷을 각각 입지 않는 경우가 있을 수도 있으니 (a + 1)*(b + 1) 이라는 경우가 나오고
// 윗옷, 아래옷 모두 입지 않는 경우는 경우의 수에서 제외해야하니 결과는  (a + 1)*(b + 1) - 1 이다.
/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42578
 * @author HwaYeon
 * @param {*} clothes 
 * @returns 
 */
function solution(clothes) {
  let answer = 1;
  const clothObj = {};
  for(const cloth of clothes) {
      const [name, kind] = cloth;
      if(clothObj[kind] === undefined) {
          clothObj[kind] = 1;
      } else {
          clothObj[kind] += 1;
      }
  }
  
  for(const key in clothObj) {
      answer *= (clothObj[key] + 1);
  }
  return answer - 1;
}