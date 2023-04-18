/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/92341?language=javascript
 * @author HwaYeon
 * @param {*} fees 
 * @param {*} records 
 * @returns 
 */
function solution(fees, records) {
  let timeObj = {};
  for(let i = 0; i < records.length; i++) {
    const [time, carN, isIn] = records[records.length - 1 - i].split(" ");
    let totalT = timeObj[carN] ? timeObj[carN][2] : 0;
    if(timeObj[carN] === undefined) {
      if(isIn === "IN") {
        const [hours, scnds] = time.split(":");
        totalT = (23 * 60 + 59) - ((+hours)*60 + (+scnds));
      }
    } else {
      if(isIn === "IN") {
        const [objH, objSec] = timeObj[carN][1].split(":");
        const [hours, scnds] = time.split(":");
        totalT = timeObj[carN][2] + ((+objH)*60 + (+objSec)) - ((+hours)*60 + (+scnds));
      }
    }
    timeObj[carN] = [isIn, time, totalT];
  }
  const [basicT, basicC, perT, perC] = fees;
  for(let key of Object.keys(timeObj)) {
    const paTime = timeObj[key][2];
    let cost = basicC;
    if(paTime > basicT) {
      cost += Math.ceil((paTime - basicT)/perT) * perC;
    }
    timeObj[key] = cost;
  }
  
  return Object.entries(timeObj)
    .sort(([a, ], [b, ]) => a - b)
    .map(a => a = a[1]);
}