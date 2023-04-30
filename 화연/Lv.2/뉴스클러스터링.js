/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/17677
 * @author HwaYeon
 * @param {*} str1 
 * @param {*} str2 
 * @returns 
 */
function solution(str1, str2) {
  const NUM = 65536;
  const [STR_IDX1, STR_IDX2] = [str1.length - 1, str2.length - 1];
  const strObj = {};
  const getStrData = (str, strIdx, i) => {
      const thisStr = (str[i] + str[i + 1]).toUpperCase();
      if(thisStr.charCodeAt(0) < 65 || thisStr.charCodeAt(0) > 90 ||
        thisStr.charCodeAt(1) < 65 || thisStr.charCodeAt(1) > 90) {
          return;
      }
      if(strObj[thisStr] === undefined) {
          strObj[thisStr] = strIdx === 0 ? [1, 0] : [0, 1];
      } else {
          strObj[thisStr][strIdx] += 1;
      }
  }
  for(let i = 0; i < Math.max(STR_IDX1, STR_IDX2); i++) {
      if(i < STR_IDX1) getStrData(str1, 0, i);
      if(i < STR_IDX2) getStrData(str2, 1, i);
  }
  let inter = 0;
  let combi = 0;
  for(const str in strObj) {
      if(!strObj[str].includes(0)) {
          inter += Math.min(...strObj[str]);
      }
      combi += Math.max(...strObj[str]);
  }
  const jSimil = combi === 0 ? 1 : inter / combi;
  return Math.floor(jSimil * NUM);
}