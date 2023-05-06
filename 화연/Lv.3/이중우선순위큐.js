/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42628
 * @author HwaYeon
 * @param {string[]} operations 
 * @returns 
 */
function solution(operations) {
  const operObj = {
    max: 0,
    min: 0,
    nArr: [],
  };
  const operArr = ["I ", "D 1", "D -1"];
  for(let i = 0; i < operations.length; i++) {
    const operation = operations[i];
    if(operation === operArr[1] || operation === operArr[2]) {
      if(operObj["nArr"].length === 0) {
        continue;
      } else if (operObj["nArr"].length === 1) {
        operObj["max"] = 0;
        operObj["min"] = 0;
        operObj["nArr"] = [];
      } else {
        if(operation === operArr[1]) {
          operObj.nArr.pop();
          operObj["max"] = operObj.nArr[operObj.nArr.length - 1];
        } else {
          operObj.nArr.shift();
          operObj["min"] = operObj.nArr[0];
        }
      }
    } else {
      const [, num] = operation.split(" ");
      operObj["nArr"].push(+num);
      if(operObj.nArr.length > 1) {
        operObj["nArr"].sort((a, b) => a - b);
        operObj["max"] = operObj.nArr[operObj.nArr.length - 1];
        operObj["min"] = operObj.nArr[0];
      }
    }
  }
  return [operObj.max, operObj.min];
}



/**
 * @author 정유성 등
 * @param {string[]} operations 
 * @returns 
 */
function solution(operations) {
  var list = [];
  operations.forEach(t => {
    if(t[0] === 'I') {
      list.push(+(t.split(" ")[1]));            
    } else {
      if(!list.length) return;

      var val = (t[2] === '-' ? Math.min : Math.max)(...list);
      var delIndex = list.findIndex(t => t === val);

      list.splice(delIndex, 1);
    }
  });

  return list.length ? [Math.max(...list), Math.min(...list)] : [0, 0];
}