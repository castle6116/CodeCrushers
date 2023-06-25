/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/131127
 * @param {string[]} want 
 * @param {number[]} number 
 * @param {string[]} discount 
 * @returns 
 */
function solution(want, number, discount) {
  let answer = 0;
  const wantObj = Object.fromEntries(Array.from(want, (w, i) => w = [w, number[i]]));
  const goodsObj = {};
  for(let i = 0; i < discount.length; i++) {
    const goods = discount[i];
    if(goodsObj[goods] === undefined) {
      goodsObj[goods] = 1;
    } else {
      goodsObj[goods] += 1;
    }
    if(i >= 9) {
      let add = true;
      for(const key in wantObj) {
        if(goodsObj[key] === undefined ||
          goodsObj[key] === 0 ||
          wantObj[key] !== goodsObj[key]) {
          add = false;
          break;
        }
      }
      if(add) answer++;
      const remove = discount[i - 9];
      goodsObj[remove] -= 1; 
    }
  }
  return answer;
}

/**
 * object로 만들 필요없이 filter로 정련을 한 후 갯수를 비교하는 방식!
 * @param {*} want 
 * @param {*} number 
 * @param {*} discount 
 * @returns 
 */
function solution(want, number, discount) {
  let count = 0;
  for (let i = 0; i < discount.length - 9; i++) {
    const slice = discount.slice(i, i+10);

    let flag = true;
    for (let j = 0; j < want.length; j++) {
      if (slice.filter(item => item === want[j]).length !== number[j]) {
        flag = false;
        break;
      }
    }
    if (flag) count += 1;
  }
  return count;
}