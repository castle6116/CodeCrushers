function solution(rectangles) {
  let answer = [];
  const newRec = rectangles.map((a, i) => [i, ...a]);
  newRec.sort((a, b) => a[3] - b[3]);
  let targetX = [];
  let nowMax = 0;
  let nowRecArr = [];
  for(let i = 0; i < newRec.length; i++) {
    if(i === 0) {
      nowMax = newRec[i][3];
      nowRecArr.push(newRec[i][0]);
      continue;
    }
    if(newRec[i][1] > nowMax) {
      nowRecArr.sort((a, b) => a[1] - b[1]);
      targetX.push(nowRecArr);
      nowRecArr = [];
      nowMax = newRec[i][3];
    } 
    nowRecArr.push(newRec[i][0]);
    if(i === newRec.length - 1) {
      nowRecArr.sort((a, b) => a[1] - b[1]);
      targetX.push(nowRecArr);
    }
  }
  for(let i = 0; i < targetX.length; i++) {
    const xArr = targetX[i];
    for(let j = 0; j <xArr.length; j++) {
      const idx = xArr[j];
      const [a, b, c, d] = rectangles[idx];
      const newRex = [idx, ];
      rectangles[idx] = newRex;
    }
  }
  return targetX;
}

function isTrue() {
  const r1 = [[0,2,1,3], [1,2,2,5], [3,3,4,4], [4,1,6,3], [1,6,5,7], [5,5,7,6], [5,8,6,10]];
  const a1 = ["0 0 1 1", "1 0 2 3", "2 0 3 1", "3 0 5 2", "0 3 4 4", "2 2 4 3", "4 3 5 5"];

  const r2 = [[2, 8, 8, 10], [8, 5, 10, 8], [0, 3, 4, 7], [7, 1, 9, 5]];
  const a2 = ["0 4 6 6", "6 4 8 7", "0 0 4 4", "4 0 6 4"];

  console.log(solution(r1), a1);
  console.log(solution(r2), a2);
}