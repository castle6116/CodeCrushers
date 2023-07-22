/**
 * https://leetcode.com/problems/group-by/description/
 * prototype 정의할 때 앞에 있는 변수를 쓴다면 그 변수는 함수 안에서 this로 부르면 된다
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function(fn) {
  const answer = {};
  for(const value of this) {
    const key = fn(value);
    answer[key] = answer[key] || [];
    answer[key].push(value);
  }
  return answer;
};

/**
* [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
*/


/**
 * reduce를 이용한 풀이
 * @param {*} fn 
 * @returns 
 */
Array.prototype.groupBy = function(fn) {
  return this.reduce((grouped, item) => {
    const key = fn(item);
    if(!grouped[key]) {
      grouped[key] = [];
    }
    grouped[key].push(item);
    return grouped;
  }, {});
};