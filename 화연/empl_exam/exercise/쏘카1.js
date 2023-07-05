function solution(height, width) {
  let answer = [];
  let totalW = width.reduce((a, b) => a + b, 0);
  const hObj = {};
  for(let i = 0; i < height.length; i++) {
    const [h, w] = [height[i], width[i]];
    if(hObj[h] === undefined) {
      hObj[h] = w;
    } else {
      hObj[h] += w;
    }
  }
  const hArr = Object.entries(hObj).sort(([a, ], [b, ]) => b - a);
  for(let i = hArr.length - 1; i >= 0; i--) {
    const [h, w] = hArr[i];
    const area = h * totalW;
    answer.push(area)
    totalW -= w;
  }
  return Math.max(...answer);
}

function isTrue() {
  const h1 = [140, 21, 21, 32];
  const w1 = [2, 1, 3, 7];
  const r1 = 288;

  const h2 = [2, 8, 6];
  const w2 = [7, 3, 1];
  const r2 = 24;

  const h3 = [2, 8, 6, 2];
  const w3 = [7, 3, 1, 1];
  const r3 = 24;

  const h4 = [2, 8, 6, 2];
  const w4 = [7, 3, 1, 2];
  const r4 = 26;

  console.log(solution(h1, w1), r1);
  console.log(solution(h2, w2), r2);
  console.log(solution(h3, w3), r3);
  console.log(solution(h4, w4), r4);
}