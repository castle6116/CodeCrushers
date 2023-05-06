/**
 * tbd...
 * @param {*} storey 
 * @returns 
 */
function solution(storey) {
  let answer = 0;
  let newStorey = storey;
  const oStr = String(newStorey).at(0);
  const getCount = (n) => {
    const sLength = String(newStorey).length;
    if(n > 4) {
      answer += 1;
      if(sLength > 1) {
        newStorey = Math.pow(10, sLength) - newStorey;  
      } else {
        answer += (10 - n);
        return answer;
      }
    } else {
      answer += n;
      newStorey = newStorey - (n*Math.pow(10, sLength - 1));
    }
    if(sLength === 1) {
      return answer;
    } else {
      const nStr = String(newStorey).at(0);
      return getCount(+nStr);  
    }
  }
  return getCount(+oStr);
}