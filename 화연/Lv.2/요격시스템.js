/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/181188
 * @author HwaYeon
 * @param {*} targets 
 * @returns 
 */
function solution(targets) {
  let answer = 0;
  const minT = [...targets].sort(([, a], [, b]) => a - b);
  let max = 0;
  for(let i = 0; i < minT.length; i++) {
      if(i === 0) {
          max = minT[i][1];
          answer++;
      }
      if(minT[i][0] >= max) {
          max = minT[i][1];
          answer++;
      }
  }
  return answer;
}




function solution2(targets) {
  let answer = 0;
  const tgts = targets.slice().sort((a, b) => a[0] - b[0] || b[1] - a[1]);
  let tail = -1;
  tgts.forEach(([s, e]) => {
      if (tail <= s) {
          answer++;
          tail = e;
      } else if (e < tail) {
          tail = e;
      }
  });
  return answer;
}


function solution3(targets) {
  targets.sort((a, b) => a[1] - b[1])
  let last_end = -1.5
  let cnt = 0
  for(const [s, e] of targets) {
      if (s <= last_end) {
          last_end = Math.min(last_end, e - 0.5)
      } else {
          cnt++
          last_end = e - 0.5
      }
  }
  return cnt
}
