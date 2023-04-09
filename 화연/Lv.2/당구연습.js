// tbd...
function solution(m, n, startX, startY, balls) {
  let answer = [];
  
  for(let i = 0; i < balls.length; i++) {
      let minLength = [];
      const x = balls[i][0];
      const y = balls[i][1];
      
      if(x !== startX) {
          const l1 = Math.pow(-y + 2 * n - startY, 2) + Math.pow(startX - x, 2);
          const l2 = Math.pow(startY + y, 2) + Math.pow(startX - x, 2);
          minLength.push(l1, l2);
      }
      if(y !== startY) {
          const l3 = Math.pow(-x + 2 * m - startX, 2) + Math.pow(startY - y, 2);
          const l4 = Math.pow(startX + x, 2) + Math.pow(startY - y, 2);
          minLength.push(l3, l4);
      }

      answer.push(Math.min(...minLength));
  }
  
  return answer;
}

// tbd...
function solution(m, n, startX, startY, balls) {
  let answer = [];
  const fxMin = [[-startX, startY], [startX, -startY], [2*m - startX, startY], [startX, 2*n - startY]];
  const getMin = (ballX, ballY) => {
      const fxBMin = [[-ballX, ballY], [ballX, -ballY], [2*m - ballX, ballY], [ballX, 2*n - ballY]];
      let newFxMin;
      let newFxBMin;
      if(ballX === startX) {
          newFxMin = [fxMin[0], fxMin[2]];
          newFxBMin = [fxBMin[0], fxBMin[2]];
      } else if (ballY === startY) {
          newFxMin = [fxMin[1], fxMin[3]];
          newFxBMin = [fxBMin[1], fxBMin[3]];
      } else {
          newFxMin = [...fxMin];
          newFxBMin = [...fxBMin];
      }
      let min = 0;
      for(let i = 0; i < newFxMin.length; i++) {
          const answer1 = Math.pow(newFxMin[i][0] - ballX, 2) + Math.pow(newFxMin[i][1] - ballY, 2);
          const answer2 = Math.pow(newFxBMin[i][0] - startX, 2) + Math.pow(newFxBMin[i][1] - startY, 2);
          const newMin = Math.min(answer1, answer2);
          if(i === 0) {
              min = newMin;
          } else {
              if(newMin < min) {
                  min = newMin;
              }
          }
      }
      return min;
  }
  
  for(let ball of balls) {
      const min = getMin(...ball);
      answer.push(min);
  }
  return answer;
}