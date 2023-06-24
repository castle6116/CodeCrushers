/**
 * https://leetcode.com/problems/maximum-value-at-a-given-index-in-a-bounded-array/description/
 * 
 * @param {number} n
 * @param {number} index
 * @param {number} maxSum
 * @return {number}
 */
function maxValue(n, index, maxSum) {
  let answer = 1;
  let left = 0;
  let right = 0;
  let addSum = maxSum - n;
  while(addSum > 0) {
      if(right + left + 1 === n) {
          answer += Math.floor(addSum / n);
          break;
      }
      answer += 1;
      addSum -= right + left + 1;
      if(index - left > 0) left++;
      if(index + right < n - 1) right++;
      if(right + left + 1 > addSum) {
          break;
      }
  }

  return answer;
};
