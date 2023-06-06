/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/178871
 * @author HwaYeon
 * @param {string[]} players 
 * @param {string[]} callings 
 * @returns {string[]} 
 */
function solution(players, callings) {
  let playerObj = {}
  
  for(let i = 0; i < players.length; i++) {
      playerObj[players[i]] = i;
  }

  for(let i = 0; i < callings.length; i++) {
      const idx = playerObj[callings[i]];
      const swapPlayer = players[idx - 1];
      
      players[idx - 1] = callings[i];
      players[idx] = swapPlayer;
      playerObj[callings[i]] = idx - 1;
      playerObj[swapPlayer] = idx;
  }
  
  return players;
}