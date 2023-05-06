/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/172928
 * 느낀점 : 음!!! 내 풀이보다 좋은 거 없었던 것 같다!!! 푸화화화화!!1
 * @author HwaYeon
 * @param {*} park 
 * @param {*} routes 
 * @returns 
 */
function solution(park, routes) {
  let start = [];
  const dirIndex = {
      E: [0, 1],
      W: [0, -1],
      N: [-1, 0],
      S: [1, 0],
  };
  for(let i = 0; i < park.length; i++) {
      const p = park[i];
      if(p.includes('S')) {
          start.push(i);
          start.push(p.indexOf('S'));
          break;
      }
  }
  const isNotBan = (dir, index) => {
      const [a, b] = dirIndex[dir];
      for(let j = 1; j <= index; j++) {
          let move = undefined;
          if(start[0] + a*j < 0 || start[1] + b*j < 0) {
              return false;
          } else {
              move = park[start[0] + a*j]?.at(start[1] + b*j);
          }
          if(move === undefined || move === 'X') {
              return false;
          }
      }
      return [start[0] + a*index, start[1] + b*index];
  }
  for(let i = 0; i < routes.length; i++) {
      const [dir, index] = routes[i].split(' ');
      const num = Number(index);
      const answer = isNotBan(dir, num);
      if(answer) {
          [start[0], start[1]] = answer;
      }
  }
  
  return start;
}