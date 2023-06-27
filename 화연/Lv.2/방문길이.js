function solution(dirs) {
  let [x, y] = [0, 0];
  const dirObj = {
      'U': [0, 1], 
      'D': [0, -1], 
      'R': [1, 0], 
      'L': [-1, 0], 
  };
  let answer = [];
  for(let i = 0; i < dirs.length; i++) {
      const [x1, y1] = dirObj[dirs[i]];
      const [pX, pY] = [x, y];
      let moveX = x + x1;
      let moveY = y + y1;
      let key = pX <= moveX ? `${pX}${pY}${moveX}${moveY}` : `${moveX}${moveY}${pX}${pY}`
      if(Math.abs(moveX) <= 5 && Math.abs(moveY) <= 5) {
          answer.push(key);
          [x, y] = [moveX, moveY]; 
      } 
  }
  return new Set(answer).size;
}