/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12914
 * 0.14ms
 * @author HwaYeon
 * @param {*} n 
 * @returns 
 */
function solution(n) {
  const REST = 1234567;
  let morePrevN = 1;
  let prevN = 1;
  let nowN = 1;
  let i = 1;
  while(i < n) {
      nowN = prevN%REST + morePrevN%REST; 
      morePrevN = prevN;
      prevN = nowN;
      i++;
  }
  return nowN%REST;
}



/**
 * dp가 무엇인가...
 * 0.22ms
 * @author Beom Sung Heo 등
 * @param {*} n 
 * @returns 
 */
function solution(n) {
  var answer = 0;
  var dp=[];
  dp[1]=1;
  dp[2]=2;
  for(var i=3;i<=n;i++){
      dp[i]=dp[i-1]+dp[i-2] %1234567;
  }
  answer=dp[n];
  return answer%1234567;
}